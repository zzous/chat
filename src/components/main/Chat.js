// react-icons
import { IoMdSend } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';

// state
import { modalStatus, setModalStatus } from '@/redux/slice/modal';
import { logStatus, setLogStatus, setLogType } from '@/redux/slice/log';
import { setSaveMessages } from '@/redux/slice/chat';

// components
import Modal from '@/components/ui/Modal';
import Login from '@/components/member/Login';
import Account from '@/components/member/Account';
import React from 'react';

const _Promise = (payload, resData, delay) => new Promise(resolve => (console.log('%c <=== : payload : ===> \n', 'color: #fdd835', payload), setTimeout(() => resolve(resData), delay)));

function Chat(props) {
  const islogStatus = ReactRedux.useSelector(logStatus);
  const isModalVisible = ReactRedux.useSelector(modalStatus);
  const dispatch = ReactRedux.useDispatch();

  const [messages, setMessages] = React.useState([]);
  const [chatForm, setChatForm] = React.useState({
    res: {
      type: 'res',
      txt: null,
      ts: new Date()
    },
    send: {
      type: 'send',
      txt: null,
      ts: new Date()
    }
  });

  const textareaRef = React.useRef();
  const messageListRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => { greetMessage(); }, 1000);
  }, []);
  React.useEffect(() => {
    console.log(props);
    if (!_.isEmpty(props.clickedMessage)) {
      setChatForm(chatForm => ({
        ...chatForm,
        send: {
          ...chatForm.send,
          txt: props.clickedMessage
        }
      }));
    }
    props.parentClearMessage();
  }, [props]);
  
  /**
   * & ChatForm Change(Send)
   */
  React.useEffect(() => {
    if (chatForm.send.txt !== null) {
      setMessages(messages => [...messages, chatForm.send]);
      sendMessage(chatForm.send);
    }
  }, [chatForm.send]);

  function greetMessage() {
    const greetData = {
      type: 'res',
      txt: 'TABot에 오신걸 환영합니다.',
      ts: new Date()
    };
    receiveMessage(greetData);
  }

  function ctrlTextareaKeyDown(e) {
    e.stopPropagation();
    e.preventDefault();

    if (e.code === 'Enter' && e.target.value === '\n') return e.target.value = null;

    if ((!e.shiftKey && e.code === 'Enter')) {
      let message = e.target.value;
      // let matchNl = message.match(/(?:\n)(.*)/);
      // if (matchNl !== null && matchNl[1] === '') message.replace(/\\n/, '');

      ctrlScrollTop();
      ctrlTextareaAutoHeight(e.target, null);

      setChatForm(chatForm => ({
        ...chatForm,
        send: {
          ...chatForm.send,
          txt: message
        }
      }));
    } else {
      ctrlTextareaAutoHeight(e.target);
    }

    return;
  }

  function ctrlTextareaAutoHeight(target, value) {
    if (value !== undefined) target.value = value;

    target.style.height = '24px';
    target.style.height = `${Math.min(target.scrollHeight, 72)}px`;
  }

  function ctrlScrollTop() {
    setTimeout(() => messageListRef.current.scrollTo(0, messageListRef.current.scrollHeight * 2), 30);
  }

  function ctrlSendButton() {
    let message = textareaRef.current.value;

    ctrlScrollTop();
    ctrlTextareaAutoHeight(textareaRef.current, null);

    setChatForm(chatForm => ({
      ...chatForm,
      send: {
        ...chatForm.send,
        txt: message
      }
    }));
  }

  async function sendMessage(payload) {
    try {
      if (payload.txt.includes('로그')) {
        dispatch(setLogStatus(!islogStatus));
        dispatch(setLogType(Math.random() * 2000));

        return;
      }

      const resData = await _Promise(payload, {
        type: 'res',
        txt: payload.txt.includes('안녕')
          ? '안녕하세요. 저는 TABot입니다. :)'
          : payload.txt.includes('수고')
            ? '다음에 또 만나요. :)'
            : [
              '죄송합니다. 무슨말인지 잘 모르겠어요. :(',
              '네? 다시 한번 말씀해주시겠어요?',
              '음... 무슨말인지 알것 같기도한데요? :)',
              '...학습 진행중',
              '학습 완료!!!',
              'Error: ca1b.00=.e1-d=_2./,13zq1,dfodfed,,a.flj9o109uvjlk9fn,ai9fdf d sa'
            ][parseInt(Math.random() * 6, 10)],
        ts: new Date()
      }, Math.max(300, Math.random() * 1000));

      console.log('## resData', resData);
      receiveMessage(resData);
    } catch (err) {
      console.log('%c <=== : err : ===> \n', 'color: #fdd835', err);
    }
  }

  async function receiveMessage(data) {
    setMessages(messages => [...messages, data]);

    ctrlScrollTop();
  }

  return (
    <>
      <div className="chatBox">
        <div className='title'>
          <h1>TABot</h1>
          <Account />

          {
            (isModalVisible &&
              <Modal modalStatus={modalStatus} setModalStatus={status => dispatch(setModalStatus(status))}>
                <div>
                  <Login />
                </div>
              </Modal>
            )
          }
        </div>

        <ul className="messageList" ref={messageListRef}>
          {
            messages.map((message, i) => (
              <li className={`message ${message.type}`} key={`message${i}`}>
                <p className='txt'>
                  {message.txt}
                  {
                    message.type === 'send' &&
                    <span className='bookmark'>
                      <IoBookmarkOutline onClick={() => dispatch(setSaveMessages(message.txt))} />
                    </span>
                  }
                </p>
              </li>
            ))
          }
        </ul>

        <div className='ctrl'>
          <div className='textarea'>
            <textarea ref={textareaRef} onKeyDown={_.debounce(ctrlTextareaKeyDown, 10)} placeholder="Type message..." />
          </div>
          <button onClick={ctrlSendButton}><IoMdSend /></button>
        </div>
      </div>
    </>
  );
}

export default Chat;
