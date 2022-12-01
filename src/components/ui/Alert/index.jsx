import { node, oneOf } from 'prop-types';
import React, { useMemo, useState } from 'react';
import {
  IoCheckmarkDone,
  IoClose,
  IoCloseCircle,
  IoWarning,
} from 'react-icons/io5';

function Alert({ type, message }) {
  const [isVisible, setIsVisible] = useState(true);

  const className = useMemo(() => {
    const baseClassName =
      'flex gap-3 w-full rounded items-center justify-between border px-4 py-3';

    switch (type) {
      case 'success':
        return `${baseClassName} bg-green-200 border-green-500 text-green-900`;
      case 'danger':
        return `${baseClassName} bg-red-200 border-red-500 text-red-900`;
      default:
        return `${baseClassName} bg-yellow-200 border-yellow-500 text-yellow-900`;
    }
  }, [type]);

  const icon = useMemo(() => {
    switch (type) {
      case 'success':
        return <IoCheckmarkDone data-testid="success-icon" />;
      case 'danger':
        return <IoCloseCircle data-testid="danger-icon" />;
      default:
        return <IoWarning data-testid="warning-icon" />;
    }
  }, [type]);

  const onCloseButtonClick = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className={className} data-testid="alert">
      {icon}
      <p className="flex-1 text-sm">{message}</p>
      <button
        type="button"
        className="transition-transform hover:scale-150"
        onClick={onCloseButtonClick}
        title="Close"
      >
        <IoClose />
      </button>
    </section>
  );
}

Alert.propTypes = {
  type: oneOf(['success', 'danger', 'warning']).isRequired,
  message: node.isRequired,
};

export default Alert;
