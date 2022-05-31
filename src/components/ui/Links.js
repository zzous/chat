import { NavLink, Link } from 'react-router-dom';

const Links = props => {
  const { isNavLink, to, exact, children, onClick } = props;

  return (
    <>
      {!!isNavLink
        ? <NavLink className="navLink" exact={exact} to={to} onClick={onClick}>{children}</NavLink>
        : <Link classname="link" to={to}>{children}</Link>
      }
    </>
  );
};

export default Links;
