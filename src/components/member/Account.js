// react-icons
import { IoIosSettings } from 'react-icons/io';
import { VscAccount } from 'react-icons/vsc';

// state
import { setModalStatus } from '@/redux/slice/modal';
import { userStatus, setUserStatus } from '@/redux/slice/member';

function Account() {
  const isLogin = ReactRedux.useSelector(userStatus);
  const dispatch = ReactRedux.useDispatch();

  const [isLayer, setLayer] = React.useState(false);
  const layerRef = React.useRef();
  
  React.useEffect(() => {
    const closeLayer = (e) => {
      if (e.path[1] !== layerRef.current && e.path[2] !== layerRef.current && e.path[3] !== layerRef.current) setLayer(false);
    };
    document.body.addEventListener('click', closeLayer);
    return () => document.body.removeEventListener('click', closeLayer);
  }, []);

  return (
    <div ref={layerRef}>
      {
        isLogin
          ? <span className='user' onClick={() => setLayer(prev => !prev)}><IoIosSettings /></span>
          : <span className='user' onClick={() => dispatch(setModalStatus(true))}><VscAccount /></span>
      }

      {
        (isLogin && isLayer &&
          <div className='memberSettingslayer'>
            <a>profile</a>
            <a onClick={() => {
              setLayer(false);
              dispatch(setUserStatus(false));
            }}
            >
              Sign out
            </a>
          </div>
        )
      }
    </div>
  );
}

export default Account;
