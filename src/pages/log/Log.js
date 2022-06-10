import { logStatus, logType } from '@/redux/slice/log';

import Log from '@/components/log/Log';

function LogPage() {
  const isLogStatus = ReactRedux.useSelector(logStatus);
  const isLogType = ReactRedux.useSelector(logType);
  const dispatch = ReactRedux.useDispatch();

  return (
    <div className="innerWrap log">
      <Log logType={isLogType} />
      {/* {(isLogStatus && <Log logType={isLogType} />)} */}
    </div>
  );
}

export default LogPage;
