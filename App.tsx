
import React, { useState } from 'react';
import Letter from './components/Letter';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-rose-100 to-purple-200 overflow-hidden">
      <FloatingHearts />
      <Letter isOpen={isOpen} onOpen={handleOpenLetter} onClose={handleCloseLetter} />
    </div>
  );
};

export default App;
