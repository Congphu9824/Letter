
import React, { useState } from 'react';

interface LetterProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const textLines = [
    { text: "Gửi em, người con gái anh thương!", className: "text-xl font-bold text-rose-500" },
    { text: "Mỗi ngày trôi qua...", className: "" },
    { text: "...tình yêu anh dành cho em lại càng sâu đậm.", className: "text-base" },
    { text: "Nụ cười của em là ánh nắng sưởi ấm trái tim anh.", className: "" },
    { text: "Cảm ơn em đã đến bên anh.", className: "" },
    { text: "Yêu em rất nhiều.", className: "text-xl" },
    { text: "- Anh", className: "text-xl" }
];


const Letter: React.FC<LetterProps> = ({ isOpen, onOpen, onClose }) => {
  const [visibleLineIndex, setVisibleLineIndex] = useState(-1);

  const handleClick = () => {
    if (!isOpen) {
      onOpen();
      setVisibleLineIndex(0);
    } else if (visibleLineIndex < textLines.length - 1) {
      setVisibleLineIndex(prevIndex => prevIndex + 1);
    } else {
      onClose();
      setVisibleLineIndex(-1);
    }
  };

  return (
    <div
      className={`group relative w-80 h-52 transition-transform duration-1000 cursor-pointer z-40 ${isOpen ? 'scale-[1.8]' : 'hover:scale-105'}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      {/* Envelope Back */}
      <div className={`absolute w-full h-full bg-rose-200 rounded-md shadow-lg`}></div>

      {/* Paper */}
      <div
        className={`absolute top-0 left-0 w-[95%] h-[95%] bg-stone-50 m-[2.5%] shadow-inner rounded-sm`}
      >
        <div className="p-4 text-stone-700 font-dancing-script text-lg overflow-hidden h-full flex flex-col justify-center items-center text-center">
            {visibleLineIndex > -1 && textLines[visibleLineIndex] && (
              <p
                key={visibleLineIndex}
                className={`${textLines[visibleLineIndex].className} animate-fade-in-up`}
              >
                {textLines[visibleLineIndex].text}
              </p>
            )}
        </div>
      </div>

      {/* Envelope Flap */}
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-rose-300 transition-transform duration-1000 origin-top z-10 [clip-path:polygon(0%_0%,_100%_0%,_50%_100%)]`}
        style={{ transformStyle: 'preserve-3d', transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)' }}
      >
        <div className="absolute inset-0 bg-rose-300 rounded-t-md" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}></div>
        <div className="absolute inset-0 bg-rose-200 rounded-t-md" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}></div>
      </div>
      
       {/* Envelope Front */}
       <div className={`absolute w-full h-full bg-rose-200 rounded-md shadow-lg [clip-path:polygon(0%_0%,_100%_0%,_100%_50%,_50%_100%,_0%_50%)] transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Wax Seal */}
      <div className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 z-20 flex items-center justify-center
          w-12 h-12 rounded-full bg-red-800 
          shadow-[1px_1px_3px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_4px_rgba(0,0,0,0.3)]
          group-hover:scale-110
          ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        >
          <HeartIcon className="w-6 h-6 text-yellow-400/80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
      </div>
       
      {!isOpen && (
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-600 animate-pulse z-20 font-dancing-script text-xl">
            Nhấn vào để mở
        </div>
      )}
    </div>
  );
};

export default Letter;
