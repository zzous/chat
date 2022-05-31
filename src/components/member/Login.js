import { setModalStatus } from '@/redux/slice/modal';
import { setUserStatus } from '@/redux/slice/member';

import Buttons from '@/components/ui/Buttons';

function Login() {
  const dispatch = ReactRedux.useDispatch();

  function login() {
    dispatch(setUserStatus(true));
    dispatch(setModalStatus(false));
  }
  return (
    <div className='loginWrap'>
      <h1>Sign in to your account</h1>

      <div className='inp'><input type='text' placeholder='Type your E-mail' /></div>
      <div className='inp'><input type='password' placeholder='Password' /></div>

      <Buttons type='button' onClick={() => login()}>Sign in</Buttons>
    </div>
  );
}

export default Login;
