import { logStatus, logType } from '@/redux/slice/log';
import { savedMessages, initMessages, deleteMessage } from '@/redux/slice/chat';

import Chat from '@/components/main/Chat';
import Log from '@/components/main/Log';

function Main() {
  const isLogStatus = ReactRedux.useSelector(logStatus);
  const isLogType = ReactRedux.useSelector(logType);
  const dispatch = ReactRedux.useDispatch();

  const [message, setMessage] = React.useState();
  const messageList = ReactRedux.useSelector(savedMessages);
  
  React.useEffect(() => {
    getSavedMessage();
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
  function getSavedMessage() {
    console.log('## get item', localStorage.getItem('CHAT_SAVED_MESSAGES'));
    const _message = localStorage.getItem('CHAT_SAVED_MESSAGES');
    if (_message) dispatch(initMessages(JSON.parse(_message)));
  }

  return (
    <div className="main">
      <div>
        <p>examples</p>
        <ul className='exampleList'>
          <li onClick={() => setMessage('안녕')}>안녕</li>
          <li onClick={() => setMessage('수고')}>수고</li>
          <li onClick={() => setMessage('로그(토글)')}>로그(토글)</li>
          {
            messageList.map((message, i) => (
              <li className={`message ${message.type}`} key={`message${i}`}>
                <p className='txt'>
                  <span onClick={() => setMessage(message.txt)}>{message.txt}</span>
                  <span onClick={() => dispatch(deleteMessage(i))}>X</span>
                </p>
              </li>
            ))
          }
        </ul>
      </div>
      {(isLogStatus && <Log logType={isLogType} />)}
      <Chat clickedMessage={message} parentClearMessage={parentClearMessage} />
      {/* <div className='filterBox'></div> */}

    </div>
  );
}

export default Main;
