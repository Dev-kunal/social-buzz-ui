import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="fixed inset-0" onClick={onClose}></div>
      <div className="bg-[#0a0a0aab] text-white p-6 rounded-lg shadow-lg z-10 absolute right-0 flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
