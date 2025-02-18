import React, { useEffect, useState } from 'react';

const Transition = ({ show, timeout, className = 'show', children }) => {
  const [isChildMounted, setIsChildMounted] = useState(false);
  const [addClass, setAddClass] = useState(false);

  useEffect(() => {
    if (show && !isChildMounted) {
      setIsChildMounted(true);
      setTimeout(() => {
        setAddClass(true);
      }, 10);
    }
    if (!show && isChildMounted) {
      setAddClass(false);
      setTimeout(() => {
        setIsChildMounted(false);
      }, timeout);
    }
  }, [show, timeout, isChildMounted]);

  if (!React.isValidElement(children)) return;

  return (
    isChildMounted &&
    React.cloneElement(children, { className: addClass ? className : '' })
  );
};

export default Transition;
