import React from 'react';
import Portal from '@/components/hoc/Portal';

function Modal(props) {
  const {
    children,
    modalStatus,
    setModalStatus
  } = props;

  React.useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden; position:fixed;');

    return () => {
      document.body.removeAttribute('style');
    };
  }, [modalStatus]);

  return (
    <Portal elementId="modal-root">
      <div className={'modal' + (modalStatus ? ' active' : '')}>
        <div className="inner">
          {children}
        </div>

        <div className="dimmed" onClick={() => setModalStatus(false)}></div>
      </div>
    </Portal>
  );
}

export default React.memo(Modal, (prevProps, nextProps) => prevProps.modalStatus === nextProps.modalStatus);
