import { XMarkIcon } from "@heroicons/react/24/outline";
import { PropsWithChildren } from "react";

const Modal = ({
  onClose,
  children,
  title,
  className,
}: {
  onClose: () => void;
  title: string;
  className?: string;
} & PropsWithChildren) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div
        className={`flex items-center justify-center text-center ${
          className ? className : ""
        }`}
      >
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full self-center">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start w-full">
              <div className="text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-between mb-4 items-start">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <button onClick={onClose}>
                    <XMarkIcon className="w-6 h-6 font-bold" />
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
