
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ReservationModal from './ReservationModal';

interface HeroSectionProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  scrollToId?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  videoSrc, 
  title, 
  subtitle,
  scrollToId 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollDown = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mt-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-primary bg-accent text-white mt-6 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Reserve a Table
        </button>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={handleScrollDown}
        className="scroll-indicator"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="text-white animate-subtle-bounce" />
      </button>
      
      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
