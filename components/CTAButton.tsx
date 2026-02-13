import React from 'react';
import { AIRBNB_LINK } from '../constants';

interface CTAButtonProps {
  className?: string;
  text?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = "", text = "Reservar no Airbnb" }) => {
  return (
    <a
      href={AIRBNB_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-rose-700 md:py-4 md:text-lg md:px-10 transition-transform active:scale-95 shadow-lg ${className}`}
    >
      {text}
    </a>
  );
};

export default CTAButton;