import { Outlet } from 'react-router-dom';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Chat from '@/components/main/Chat';

function Default() {
  const [message, setMessage] = React.useState();
  const parentClearMessage = () => {
    setMessage();
  };
  return (
    <div id='wrap'>
      <Header />
      <div id="contents">
        <div className='contInner'>
          <Outlet />
          <Chat />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Default;
