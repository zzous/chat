import React from 'react';
import { WebSocket, Server } from 'mock-socket';
import mockLog from '@/mock/log';

import Spinner from '@/components/ui/Spinner';

const ANSI_REG = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
const FAKE_URL = 'ws://localhost:8080';
const mockServer = new Server(FAKE_URL);

const _Promise = (payload, resData, delay) => new Promise(resolve => (console.log('%c <=== : payload : ===> \n', 'color: #fdd835', payload), setTimeout(() => resolve(resData), delay)));

mockServer.on('connection', socket => {
  socket.on('message', data => socket.send(data));
  socket.on('close', e => console.log('ws closing', e));
});

function Log(props) {
  const {
    logType = null
  } = props;

  const [socket, setSocket] = React.useState(null);
  const [connected, setConnected] = React.useState(false);
  const [logs, setLogs] = React.useState([]);

  const logList = React.useRef();

  const connect = (url) => new Promise((response, reject) => {
    const ws = new WebSocket(url);

    ws.onclose = () => console.log('%c <=== : Closing socket : ===> \n', 'color: #fdd835', ws);
    ws.onopen = () => (console.log('%c <=== : Connected : ===> \n', 'color: #fdd835', ws), response(ws));
    ws.onerror = () => (console.log('%c <=== : Error happened in connection : ===> \n', 'color: #fdd835'), ws.close());

    ws.onmessage = ({ data }) => {
      let { log, ts } = JSON.parse(data);
      let isAnsi = log.match(ANSI_REG) !== null;

      if (isAnsi) log = log.replace(ANSI_REG, '');

      return setLogs(logs => [...logs, {
        ansi: isAnsi,
        log,
        ts: moment(ts).format('YYYY-MM-DD-HH:MM:SS')
      }]);
    };

    setConnected(true);
  });

  React.useEffect(() => {
    let isConnection = false;
    if (!isConnection) (async () => setTimeout(async () => setSocket(await connect(FAKE_URL)), 6000))();

    return () => isConnection = true;
  }, []);

  React.useEffect(() => {
    const log = (log, i) => new Promise(res => {
      return setTimeout(() => {
        mockServer.emit('message', JSON.stringify(log));
        logList.current?.scrollTo(0, logList.current.scrollHeight);

        res();
      }, i > 60 && i < 134 ? Math.min(i * 60, Math.random() * i) : Math.min(i * 60, Math.random() * 300));
    });

    if (socket && socket?.readyState === 1) {
      Object.keys(mockLog).reduce(async (prev, mock, i) => {
        await prev;

        return await log(mockLog[ mock ], i);
      }, Promise.resolve([]));
    }

    return () => socket && socket.close();
  }, [socket]);

  return (
    <div className='logBox'>
      {
        !connected && <Spinner />
      }
      <ul ref={logList}>
        {
          logs.map((d, i) => (
            <li key={i} className={d.ansi ? 'cyan' : null} data-line-number={i + 1}>
              <span className='ts'>{ d.ts } :</span>
              <span className='log'>{ d.log }</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default React.memo(Log);
