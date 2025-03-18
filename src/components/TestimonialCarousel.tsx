
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role?: string;
  quote: string;
  rating: number;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlay = true,
  interval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalTestimonials = testimonials.length;

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!autoPlay) return;
    
    const slideTimer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(slideTimer);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex items-center justify-center">
        <button 
          onClick={prev} 
          className="absolute left-0 z-10 p-2 rounded-full bg-background/80 text-foreground shadow-md hover:bg-background transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="w-full overflow-hidden px-10">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4 md:px-12"
              >
                <div className="glass-card rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < testimonial.rating 
                            ? 'text-gold fill-gold' 
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl italic mb-6 text-foreground/90">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col items-center">
                    {testimonial.image && (
                      <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="font-medium">{testimonial.name}</p>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={next} 
          className="absolute right-0 z-10 p-2 rounded-full bg-background/80 text-foreground shadow-md hover:bg-background transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'w-6 bg-accent' : 'bg-muted-foreground/30'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
