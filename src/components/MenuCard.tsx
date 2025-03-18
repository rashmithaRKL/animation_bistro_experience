
import React from 'react';
import FadeInSection from './FadeInSection';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  category?: string;
  isSpecial?: boolean;
  delay?: number;
}

const MenuCard: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  category,
  isSpecial = false,
  delay = 0,
}) => {
  return (
    <FadeInSection
      delay={delay}
      className="w-full transition-transform duration-500"
    >
      <div 
        className={`relative overflow-hidden rounded-lg transition-all duration-300 h-full ${
          isSpecial ? 'bg-gradient-to-br from-gold-light/10 to-gold/5 border border-gold/20' : 'bg-card'
        } hover:shadow-md`}
      >
        {image && (
          <div className="h-48 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        )}
        
        <div className="p-6">
          {category && (
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground mb-3">
              {category}
            </span>
          )}
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-serif font-medium">{name}</h3>
            <span className="text-lg font-medium text-accent">{price}</span>
          </div>
          
          <p className="text-muted-foreground text-sm">{description}</p>
          
          {isSpecial && (
            <div className="absolute top-3 right-3 bg-gold text-white text-xs px-2 py-1 rounded-md transform rotate-3">
              Chef's Special
            </div>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};

export default MenuCard;
