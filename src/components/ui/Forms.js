const Forms = props => {
  const { elementTypes, elementConfig, elementValue, label } = props;
  let formElement;

  switch (elementTypes) {
    case 'input':
      formElement = <input {...elementConfig} value={elementValue} />;
      break;
    case 'textarea':
      formElement = <textarea {...elementConfig} value={elementValue} />;
      break;
    default:
      formElement = null;
      break;
  }

  return (
    <div className="formElement">
      {/* <label htmlFor={elementConfig.for}>{label ? label : null}</label> */}
      {formElement}
    </div>
  );
};

export default Forms;
