import './Example.scss';
import {
  modalStatus,
  setModalStatus
} from '@/redux/slice/modal';

import Modal from '@/components/ui/Modal';

import Buttons from '@/components/ui/Buttons';
import Links from '@/components/ui/Links';
import Spinner from '@/components/ui/Spinner';

function Example() {
  const isModalVisible = ReactRedux.useSelector(modalStatus);
  const dispatch = ReactRedux.useDispatch();

  const navigate = ReactRouter.useNavigate();

  const spinnerStyles = {
    position: 'relative',
    width: '100px',
    height: '100px',
    background: '#000'
  };

  return (
    <div>
      <div className='example'>
        <h2>Modal Example</h2>
        <div>
          <button type='button' onClick={() => dispatch(setModalStatus(true))}>Root Modal</button>

          {
            (isModalVisible &&
              <Modal modalStatus={modalStatus} setModalStatus={status => dispatch(setModalStatus(status))}>
                <div>
                  Modal
                </div>
              </Modal>
            )
          }
        </div>
      </div>

      <div className='example'>
        <h2>UI components</h2>
        <div>
          <Buttons type="button" className="success">success</Buttons>
          <Buttons type="button" disabled="disabled">success(disabled)</Buttons>
          <Buttons type="link" className="link">button(link)</Buttons>
          {/* <Links isNavLink className="link">button(link)</Links> */}
        </div>
      </div>

      <div className='example'>
        <h2>Spinner</h2>
        <div style={spinnerStyles}>
          <Spinner />
        </div>
      </div>

    </div>
  );
}

export default Example;
