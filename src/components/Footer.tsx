
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif mb-4 text-accent">Bistro Elegance</h3>
            <p className="max-w-xs opacity-80 text-sm">
              Exquisite dining experience with a fusion of traditional and contemporary flavors in an elegant atmosphere.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-accent">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 text-accent" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Monday - Friday</p>
                  <p className="text-primary-foreground/70 text-sm">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock size={18} className="mt-1 text-accent" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Saturday - Sunday</p>
                  <p className="text-primary-foreground/70 text-sm">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <span className="text-primary-foreground/70">123 Gourmet Avenue, Culinary District, City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+15551234567" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:info@bistroelegance.com" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300">
                  info@bistroelegance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} Bistro Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
