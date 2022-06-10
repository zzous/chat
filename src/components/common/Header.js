import { AiOutlineRobot, AiFillHome, AiOutlineFileText, AiOutlineMessage } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import Account from '@/components/member/Account';

import { Link } from 'react-router-dom';

export function Header(props) {
  return (
    <div id='header'>
      {/* ... */}
      <p className='logo'><span><AiOutlineRobot /></span>TABot</p>
      <ul className='nav'>
        <Link to='/'><li><span><AiFillHome /></span>Home</li></Link>
        <Link to='/log'><li><span><AiOutlineFileText /></span>Log</li></Link>
        <Link to='/history'><li><span><AiOutlineMessage /></span>History</li></Link>
        <Link to='/'><li><span><IoIosSettings /></span>Settings</li></Link>
      </ul>

      <Account />
      
    </div>
  );
}

export default Header;
