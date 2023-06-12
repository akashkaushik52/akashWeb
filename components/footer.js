import { EnvelopeIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="p-2 w-full pt-8 border-t border-gray-200 text-center">
        AKASH @{new Date().getFullYear()}
      </div>
    </footer>
  );
}
