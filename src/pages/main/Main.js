import {
  logStatus,
  logType
} from '@/redux/slice/log';

import Chat from '@/components/main/Chat';
import Log from '@/components/main/Log';

function Main() {
  const isLogStatus = ReactRedux.useSelector(logStatus);
  const isLogType = ReactRedux.useSelector(logType);

  return (
    <div className="main">
      {(isLogStatus && <Log logType={isLogType} />)}
      <Chat />
      {/* <div className='filterBox'></div> */}

    </div>
  );
}

export default Main;
