import { logStatus, logType } from '@/redux/slice/log';
import { saveMessages } from '@/redux/slice/chat';

import Chat from '@/components/main/Chat';
import Log from '@/components/main/Log';

function Main() {
  const isLogStatus = ReactRedux.useSelector(logStatus);
  const isLogType = ReactRedux.useSelector(logType);

  const [message, setMessage] = React.useState();
  
  React.useEffect(() => {
    getSavedMessage();
    console.log('## get item :', getSavedMessage());
  }, []);
  React.useEffect(() => {
    console.log('## auto txt :', message);
  }, [message]);

  const parentClearMessage = () => {
    // console.log('## parent : parentClearMessage', msg);
    setMessage();
  };

  /**
   * localStorage saved item list
   */
  const getSavedMessage = () => {
    // console.log('## get item', localStorage.getItem('CHAT_SAVED_MESSAGES'));
    const _message = localStorage.getItem('CHAT_SAVED_MESSAGES');
    return _message !== null ? JSON.parse(_message) : undefined;
  };

  return (
    <div className="main">
      <div>
        <p>examples</p>
        <ul className='exampleList'>
          <li onClick={() => setMessage('안녕')}>안녕</li>
          <li onClick={() => setMessage('수고')}>수고</li>
          <li onClick={() => setMessage('로그(토글)')}>로그(토글)</li>
        </ul>
      </div>
      {(isLogStatus && <Log logType={isLogType} />)}
      <Chat clickedMessage={message} parentClearMessage={parentClearMessage} />
      {/* <div className='filterBox'></div> */}

    </div>
  );
}

export default Main;
