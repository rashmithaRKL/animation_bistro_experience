
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import FadeInSection from '@/components/FadeInSection';
import AnimatedText from '@/components/AnimatedText';
import MenuCard from '@/components/MenuCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { Utensils, Coffee, Calendar, Users, ArrowRight } from 'lucide-react';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredMenuItems = [
    {
      name: "Truffle Infused Risotto",
      description: "Arborio rice slowly cooked with white wine, finished with butter, parmesan, and fresh truffle",
      price: "$26",
      category: "Main Course",
      isSpecial: true,
      image: "https://images.unsplash.com/photo-1673421099902-93b5ca43c7c9?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Pan Seared Scallops",
      description: "Fresh Atlantic scallops with cauliflower purée, crispy pancetta, and herb oil",
      price: "$32",
      category: "Seafood",
      image: "https://images.unsplash.com/photo-1625944517963-7e9971fca675?q=80&w=2787&auto=format&fit=crop"
    },
    {
      name: "Chocolate Fondant",
      description: "Warm chocolate cake with a molten center, served with artisanal vanilla ice cream",
      price: "$14",
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2787&auto=format&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sophie Anderson",
      role: "Food Critic",
      quote: "The culinary finesse displayed at Bistro Elegance sets a new standard for fine dining in the city. Their commitment to seasonal ingredients results in dishes that are both innovative and comforting.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Regular Customer",
      quote: "I've celebrated many special occasions here, and each time has been memorable. The staff makes you feel like family while maintaining impeccable service standards.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Food Blogger",
      quote: "The attention to detail in both presentation and flavor profiles is remarkable. Bistro Elegance manages to create an atmosphere that's sophisticated without being pretentious.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Video Background */}
      <HeroSection
        videoSrc="https://v-network.io/download/samples/jellyfish/jellyfish-1080p.mp4"
        title="Culinary Excellence & Elegant Ambiance"
        subtitle="Experience the perfect blend of traditional and modern cuisine in a sophisticated atmosphere"
        scrollToId="about-section"
      />

      {/* About Section */}
      <section id="about-section" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                  alt="Restaurant interior"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <AnimatedText
                  text="Welcome to Bistro Elegance"
                  tag="h2"
                  className="text-3xl md:text-4xl font-serif font-medium"
                />
                <p className="text-muted-foreground">
                  Nestled in the heart of the city, Bistro Elegance offers an unparalleled dining experience that combines culinary excellence with a warm, sophisticated atmosphere.
                </p>
                <p className="text-muted-foreground">
                  Our talented team of chefs creates dishes that celebrate the finest seasonal ingredients, resulting in a menu that's both innovative and comfortingly familiar.
                </p>
                <div className="pt-4">
                  <Link to="/about" className="btn-outline flex items-center gap-2 w-fit">
                    Our Story <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="Featured Dishes"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience our chef's favorite creations, each prepared with meticulous attention to detail and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMenuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
                isSpecial={item.isSpecial}
                delay={0.1 * index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary inline-flex items-center gap-2">
              View Complete Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Services"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Beyond exceptional dining, we offer a range of services to elevate your experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Utensils size={28} />,
                title: "Fine Dining",
                description: "Experience exquisite cuisine in an elegant atmosphere with impeccable service"
              },
              {
                icon: <Users size={28} />,
                title: "Private Events",
                description: "Host your special occasions in our versatile event spaces with customized menus"
              },
              {
                icon: <Calendar size={28} />,
                title: "Catering",
                description: "Bring the Bistro Elegance experience to your location with our professional catering"
              },
              {
                icon: <Coffee size={28} />,
                title: "Chef's Table",
                description: "An intimate dining experience with dishes prepared and presented by our executive chef"
              }
            ].map((service, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="border border-primary-foreground/10 rounded-lg p-6 text-center transition-all duration-300 hover:bg-primary-foreground/5">
                  <div className="text-accent bg-primary-foreground/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{service.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center gap-2">
              Explore Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="What Our Guests Say"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experiences of our valued guests reflect our commitment to excellence
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedText
              text="Reserve Your Table Today"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-white/80 mb-8">
              Join us for an unforgettable culinary journey. Reserve your table now and experience the perfect blend of exquisite cuisine, elegant ambiance, and exceptional service.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary bg-accent hover:bg-accent/90 text-white"
            >
              Make a Reservation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
