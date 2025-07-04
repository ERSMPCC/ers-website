import React from 'react';
import { FaXmark } from 'react-icons/fa6';

interface BaseModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  headerContent?: React.ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

export function BaseModal({ 
  children, 
  isOpen = true, 
  onClose, 
  title = "Modal",
  headerContent,
  showCloseButton = true,
  className = ""
}: BaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto ${className}`}>
        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            {headerContent || <h2 className="text-xl font-semibold">{title}</h2>}
          </div>
          {showCloseButton && onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 ml-4"
            >
              <FaXmark className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Section */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}