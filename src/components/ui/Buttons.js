// Style
import './Buttons.scss';

const Buttons = props => {
  let buttonElement;

  switch (props.type) {
    case 'link':
      buttonElement = <a { ...props }>{props.children}</a>;
      break;
    case 'button':
      buttonElement = <button { ...props }>{props.children}</button>;
      break;
    default:
      return null;
  }

  return buttonElement;
};

export default Buttons;
