import { AiOutlineEllipsis, AiOutlineClose } from 'react-icons/ai';
import { savedMessages, initMessages, deleteMessage, setAutoMessage } from '@/redux/slice/chat';

function History() {
  const dispatch = ReactRedux.useDispatch();

  const [message, setMessage] = React.useState();
  const messageList = ReactRedux.useSelector(savedMessages);
  
  React.useEffect(() => {
    getSavedMessage();
  }, []);
  React.useEffect(() => {
    console.log('## auto txt :', message);
    if (message) {
      dispatch(setAutoMessage(message));
      setMessage(null);
    }
  }, [message]);

  /**
   * localStorage saved item list
   */
  function getSavedMessage() {
    console.log('## get item', localStorage.getItem('CHAT_SAVED_MESSAGES'));
    const _message = localStorage.getItem('CHAT_SAVED_MESSAGES');
    if (_message) dispatch(initMessages(JSON.parse(_message)));
  }

  function deleteMessages(i) {
    event.preventDefault();
    dispatch(deleteMessage(i));
  }

  return (
    <div className="innerWrap history">
      <div className='infoBox'>
        <h1 className='pageTitle'>HISTORY</h1>

        <div className='title'>example</div>
        <ul className='exampleList'>
          <li onClick={() => setMessage('안녕')}><p className='txt'><span>안녕</span></p></li>
          <li onClick={() => setMessage('수고')}><p className='txt'><span>수고</span></p></li>
          <li onClick={() => setMessage('실행')}><p className='txt'><span>실행</span></p></li>
        </ul>
        <div className='title'>saved messages</div>
        <ul className='exampleList'>
          {
            messageList.map((message, i) => (
              <li className={`message ${message.type}`} key={`message${i}`} onClick={() => setMessage(message.txt)}>
                <p className='txt'>
                  <span>{message.txt}</span>
                  <span className='delete' onClick={() => deleteMessages(i)}><AiOutlineClose /></span>
                </p>
                <p className='date'>{message.date}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default History;
