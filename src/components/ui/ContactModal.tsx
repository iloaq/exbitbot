'use client';

import { Modal } from './Modal';
import { ContactForm, ContactFormData } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  onSubmit?: (data: ContactFormData) => void;
}

export function ContactModal({ 
  isOpen, 
  onClose, 
  title = "Оставить заявку",
  onSubmit 
}: ContactModalProps) {
  const handleSubmit = async (data: ContactFormData) => {
    if (onSubmit) {
      await onSubmit(data);
    } else {
      // Дефолтная логика - просто логируем и закрываем
      console.log('Contact form submitted:', data);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <ContactForm onSubmit={handleSubmit} />
    </Modal>
  );
}
