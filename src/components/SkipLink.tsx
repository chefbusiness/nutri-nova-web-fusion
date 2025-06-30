
import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-modern-gray-900 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
      tabIndex={0}
    >
      Saltar al contenido principal
    </a>
  );
};

export default SkipLink;
