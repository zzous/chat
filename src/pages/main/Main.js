import {
  logStatus,
  logType
} from '@/redux/slice/log';

import Chat from '@/components/main/Chat';
import Log from '@/components/main/Log';

function Main() {
  const isLogStatus = ReactRedux.useSelector(logStatus);
  const isLogType = ReactRedux.useSelector(logType);

  const exampleStyle = {
    fontSize: '12px'
  };

  const autoMessage = {
    txt: ''
  };

  return (
    <div className="main">
      <div>
        <p>examples</p>
        <ul style={exampleStyle}>
          <li>안녕</li>
          <li>수고</li>
          <li>로그(토글)</li>
        </ul>
      </div>
      {(isLogStatus && <Log logType={isLogType} />)}
      <Chat />
      {/* <div className='filterBox'></div> */}

    </div>
  );
}

export default Main;
