'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Chatbot from './Chatbot';  // Import the Chatbot component

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
              fixed
              inset-0
              bg-gray-900
              bg-opacity-70
              transition-opacity
            "
          />
        </Transition.Child>

        <div
          className="
            fixed
            inset-0
            z-10
            flex
            items-center
            justify-center
          "
        >
          <Dialog.Panel
            as="div"
            className="
              bg-gray-800
              rounded-lg
              shadow-lg
              max-w-md
              w-full
              h-full
              flex
              flex-col
            "
          >
            <div className="flex-1 overflow-auto">
              <Chatbot />
            </div>
            <button
              onClick={onClose}
              className="
                absolute
                top-4
                right-4
                bg-gray-700
                text-white
                p-2
                rounded-full
                hover:bg-gray-600
              "
            >
              X
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ChatbotModal;
