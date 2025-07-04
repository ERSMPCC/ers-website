import React from 'react';
import { BaseModal } from '../../modals/BaseModal';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: React.ReactNode;
    name: string;
    shortDescription: string;
    description: string;
  };
  children?: React.ReactNode; // For additional content that can be customized
}

export function ServicesModal({ isOpen, onClose, service, children }: ServiceModalProps) {
  const headerContent = (
    <div className="flex items-center gap-3">
      <div className="text-2xl text-blue-600">
        {service.icon}
      </div>
      <h2 className="text-xl font-semibold text-gray-800">
        {service.name}
      </h2>
    </div>
  );

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      headerContent={headerContent}
      className="max-w-2xl"
    >
      {/* Short Description */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm italic">
          {service.shortDescription}
        </p>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Full Description */}
      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Additional customizable content */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </BaseModal>
  );
}
