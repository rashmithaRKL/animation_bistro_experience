
import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { ArrowRight, Utensils, Users, Calendar, Gift, Award, Coffee } from 'lucide-react';

const Services = () => {
  const testimonials = [
    {
      name: "Amanda & John",
      role: "Wedding Couple",
      quote: "Bistro Elegance made our rehearsal dinner unforgettable. The custom menu perfectly reflected our taste, and the service was impeccable from planning to execution.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Corporate Client",
      quote: "We've hosted multiple business dinners at Bistro Elegance. Their attention to detail and professionalism create the perfect environment for our client meetings.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Birthday Celebration",
      quote: "My milestone birthday celebration at Bistro Elegance was absolutely perfect. The private dining room, customized menu, and attentive service made it a night to remember.",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop"
            alt="Table setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container relative z-10 text-center px-6 md:px-12">
          <AnimatedText
            text="Our Services"
            tag="h1"
            className="text-4xl md:text-6xl font-serif text-white mb-4"
          />
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Beyond exceptional dining, we offer specialized services for every occasion
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <AnimatedText
            text="Exceptional Experiences"
            tag="h2"
            className="text-3xl font-serif font-medium mb-6"
          />
          <p className="text-muted-foreground">
            At Bistro Elegance, we go beyond traditional restaurant service to offer a range of experiences designed to delight and impress. Whether you're planning a private celebration, corporate gathering, or special event, our team will work with you to create a memorable experience tailored to your needs.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={28} />,
                title: "Private Dining",
                description: "Host intimate gatherings in our elegant private dining rooms, with bespoke menus and dedicated service staff.",
                features: ["Customized menus", "Multiple room configurations", "Audio-visual equipment", "Dedicated service staff"],
                image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Calendar size={28} />,
                title: "Event Catering",
                description: "Bring the Bistro Elegance experience to your location with our professional catering services for events of any size.",
                features: ["On-site chefs", "Full service staff", "Custom menu planning", "Equipment rental options"],
                image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Utensils size={28} />,
                title: "Cooking Classes",
                description: "Learn culinary techniques from our expert chefs in interactive, hands-on cooking classes for all skill levels.",
                features: ["Small class sizes", "Ingredient sourcing guidance", "Wine pairing lessons", "Take-home recipes"],
                image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2074&auto=format&fit=crop"
              },
              {
                icon: <Gift size={28} />,
                title: "Gift Experiences",
                description: "Perfect gifts for food lovers, from gift cards to custom tasting experiences and chef's table reservations.",
                features: ["Digital or physical gift cards", "Custom experience packages", "Corporate gifting options", "Presentation boxes"],
                image: "https://images.unsplash.com/photo-1594758395302-29bd1e7efe99?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Coffee size={28} />,
                title: "Chef's Table",
                description: "An exclusive dining experience where you can interact with our chefs and enjoy a custom tasting menu.",
                features: ["Direct chef interaction", "Behind-the-scenes insights", "Premium wine pairings", "Custom menu creation"],
                image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: <Award size={28} />,
                title: "Wine Tastings",
                description: "Guided tastings led by our sommelier, featuring carefully selected wines paired with complementary dishes.",
                features: ["Expert guidance", "Regional focus options", "Food pairing demonstrations", "Educational components"],
                image: "https://images.unsplash.com/photo-1516594915697-987d70f7d89f?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="glass-card rounded-lg overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-accent/10 text-accent p-2 rounded-full">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-medium">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="text-accent font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Learn more <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Events Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div className="space-y-6">
                <AnimatedText
                  text="Custom Events"
                  tag="h2"
                  className="text-3xl md:text-4xl font-serif font-medium"
                />
                <p className="text-primary-foreground/80">
                  From intimate weddings to corporate gatherings, we tailor our services to create unforgettable events that reflect your vision and exceed your expectations.
                </p>
                <p className="text-primary-foreground/80">
                  Our event planning team works closely with you to customize every detail, from menu design to decor, ensuring a seamless and memorable experience for you and your guests.
                </p>
                
                <div className="space-y-4 pt-4">
                  {[
                    "Custom menu development",
                    "Venue styling and decor",
                    "Entertainment coordination",
                    "Audio-visual production",
                    "Transportation arrangements",
                    "Accommodation recommendations"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <a href="/contact" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary inline-flex items-center gap-2">
                    Inquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1529516548843-b26c0bb93b70?q=80&w=2069&auto=format&fit=crop"
                    alt="Wedding event"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1611599538835-b52a8c2f9ec1?q=80&w=1974&auto=format&fit=crop"
                    alt="Corporate dinner"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1470053053191-39cf85f8ed09?q=80&w=2043&auto=format&fit=crop"
                    alt="Private party"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?q=80&w=1974&auto=format&fit=crop"
                    alt="Special celebration"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <AnimatedText
              text="Service Packages"
              tag="h2"
              className="text-3xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our curated packages or work with our team to create a custom solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Essentials",
                price: "Starting at $85 per person",
                description: "Perfect for intimate gatherings and small corporate events",
                features: [
                  "Three-course plated menu",
                  "House wine selections",
                  "Standard table settings",
                  "Service staff",
                  "4-hour event duration"
                ],
                highlighted: false
              },
              {
                name: "Signature",
                price: "Starting at $125 per person",
                description: "Our most popular option for special celebrations",
                features: [
                  "Four-course plated menu",
                  "Premium wine pairings",
                  "Enhanced table settings",
                  "Dedicated service team",
                  "5-hour event duration",
                  "Custom printed menus"
                ],
                highlighted: true
              },
              {
                name: "Prestige",
                price: "Starting at $180 per person",
                description: "The ultimate luxury experience for milestone events",
                features: [
                  "Five-course tasting menu",
                  "Reserve wine collection",
                  "Luxury table settings",
                  "VIP service team",
                  "6-hour event duration",
                  "Custom floral arrangements",
                  "Private venue buyout options"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className={`rounded-xl overflow-hidden h-full flex flex-col ${
                  plan.highlighted 
                    ? 'ring-2 ring-accent shadow-lg transform scale-105 relative z-10' 
                    : 'border border-border shadow-sm'
                }`}>
                  {plan.highlighted && (
                    <div className="bg-accent text-white text-xs text-center py-1">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className={`p-8 flex-grow ${plan.highlighted ? 'bg-accent/5' : ''}`}>
                    <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                    <p className="text-xl font-serif text-accent mb-3">{plan.price}</p>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-6 border-t border-border">
                    <a 
                      href="/contact" 
                      className={`w-full py-2.5 px-4 rounded-md text-center block ${
                        plan.highlighted
                          ? 'bg-accent text-white hover:bg-accent/90'
                          : 'bg-secondary hover:bg-secondary/70'
                      } transition-colors`}
                    >
                      Request Information
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-sm">
            All packages can be customized to meet your specific needs and preferences. Please contact our events team for detailed information and availability.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="What Our Clients Say"
              tag="h2"
              className="text-3xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The experiences of those who have enjoyed our specialized services
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="Frequently Asked Questions"
              tag="h2"
              className="text-3xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our services and event planning process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book my event?",
                answer: "We recommend booking at least 2-3 months in advance for private dining and 4-6 months for larger events, especially during peak seasons. However, we can sometimes accommodate last-minute requests."
              },
              {
                question: "Can you accommodate dietary restrictions and allergies?",
                answer: "Absolutely. Our chefs are experienced in creating exceptional dishes for guests with various dietary needs. Please inform us of any requirements during the planning process."
              },
              {
                question: "Is there a minimum guest count for private events?",
                answer: "Minimum guest counts vary by venue space and day of the week. Our smallest private dining room requires a minimum of 8 guests, while our largest space can accommodate up to 120 people."
              },
              {
                question: "Do you offer tastings before booking?",
                answer: "Yes, we offer menu tastings for events with 30 or more guests. Tastings are scheduled approximately 2-3 months before your event and include sample selections from your proposed menu."
              },
              {
                question: "Can we bring our own cake for a special occasion?",
                answer: "Yes, you may bring your own cake for special celebrations. There is a cake cutting fee of $5 per person. Alternatively, our pastry chef can create a custom cake for your event."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Our cancellation policy varies based on the size of the event and timing. Generally, cancellations made 30+ days before receive a full deposit refund, while those made 14-29 days before receive a 50% refund. Cancellations with less than 14 days' notice forfeit the deposit."
              }
            ].map((faq, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="glass-card p-6 h-full">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1622866306856-25f8e6022656?q=80&w=1974&auto=format&fit=crop"
            alt="Table setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedText
              text="Create Your Perfect Event"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-6"
            />
            <p className="text-white/80 mb-8 text-lg">
              Contact our specialized events team to begin planning your next memorable experience. From intimate gatherings to grand celebrations, we're here to bring your vision to life.
            </p>
            <a href="/contact" className="btn-primary bg-accent hover:bg-accent/90 text-white">
              Contact Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
