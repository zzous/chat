import { Outlet } from 'react-router-dom';

function Default() {
  return (
    <div id="wrap">
      <div id="contents">
        <Outlet />
      </div>
    </div>
  );
}

export default Default;
