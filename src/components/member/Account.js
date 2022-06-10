// react-icons
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
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

  const user = {
    name: 'User name',
    email: 'testmaker@strato.co.kr',
    imageSrc: null
  };

  return (
    <div ref={layerRef} className='account'>
      {
        isLogin ?
          <div className='user signIn'>
            <div className='image'>
              {
                user.imageSrc
                  ? <img src={user.imageSrc} />
                  : user.name.split('')[0]
              }
            </div>
            <div className='name'>{user.name}</div>
            <div className='email'>{user.email}</div>
            <div className='btnSignOut'>
              <AiOutlineLogout onClick={() => {
                setLayer(false);
                dispatch(setUserStatus(false));
              }}/>
            </div>
          </div>
          : <span className='user signOut' onClick={() => dispatch(setModalStatus(true))}><span><AiOutlineLogin /></span>Sign In</span>
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
