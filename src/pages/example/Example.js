import {
  modalStatus,
  setModalStatus
} from '@/redux/slice/modal';

import Modal from '@/components/ui/Modal';

function Example() {
  const isModalVisible = ReactRedux.useSelector(modalStatus);
  const dispatch = ReactRedux.useDispatch();

  const navigate = ReactRouter.useNavigate();

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
        <h2></h2>
        <div></div>
      </div>
    </div>
  );
}

export default Example;
