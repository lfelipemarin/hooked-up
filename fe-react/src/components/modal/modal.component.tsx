import { ReactNode, FC } from 'react';

interface ModalProperties {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: FC<ModalProperties> = ({
  isOpen, onClose, title, children
}) => {
  if (!isOpen) return;

  // eslint-disable-next-line consistent-return
  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-max-w-md tw-w-full tw-p-6">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b tw-pb-3">
          <h3 className="tw-text-lg tw-font-semibold">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="tw-text-gray-500 hover:tw-text-black tw-text-xl"
          >
            &times;
          </button>
        </div>
        <div className="tw-mt-4">{children}</div>
        <div className="tw-flex tw-justify-end mt-6">
          <button
            type="button"
            onClick={onClose}
            className="tw-bg-blue-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
