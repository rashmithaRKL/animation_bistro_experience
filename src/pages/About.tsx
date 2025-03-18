
import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight } from 'lucide-react';

const About = () => {
  // Team data
  const teamMembers = [
    {
      name: "Chef Michel Laurent",
      role: "Executive Chef",
      bio: "With over 20 years of experience across Europe's finest restaurants, Chef Michel brings his passion for French cuisine with a modern twist to Bistro Elegance.",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Sofia Rossi",
      role: "Pastry Chef",
      bio: "Trained in Italy and France, Sofia creates desserts that are visual masterpieces with perfectly balanced flavors and innovative techniques.",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "James Wilson",
      role: "Sommelier",
      bio: "James' extensive knowledge of wines and passion for perfect pairings ensures that each dish is complemented by the ideal vintage.",
      image: "https://images.unsplash.com/photo-1542178243-bc20204b769f?q=80&w=2080&auto=format&fit=crop"
    }
  ];

  // Values data
  const values = [
    {
      title: "Quality",
      description: "We source only the freshest, seasonal ingredients from local producers committed to sustainable practices."
    },
    {
      title: "Craftsmanship",
      description: "Our team approaches each dish with meticulous attention to detail and a commitment to culinary excellence."
    },
    {
      title: "Experience",
      description: "We believe dining is more than just food—it's an immersive experience that engages all the senses."
    },
    {
      title: "Community",
      description: "We're proud to be part of our local community, supporting regional producers and participating in community events."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container relative z-10 text-center px-6 md:px-12">
          <AnimatedText
            text="Our Story"
            tag="h1"
            className="text-4xl md:text-6xl font-serif text-white mb-4"
          />
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Discover the passion, craftsmanship, and vision behind Bistro Elegance
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeInSection direction="right">
              <div className="space-y-6">
                <AnimatedText
                  text="The Beginning"
                  tag="h2"
                  className="text-3xl md:text-4xl font-serif font-medium"
                />
                <p className="text-muted-foreground">
                  Founded in 2010 by Chef Michel Laurent and restaurateur Elena Moretti, Bistro Elegance began with a simple vision: to create a dining establishment that honored traditional techniques while embracing innovation.
                </p>
                <p className="text-muted-foreground">
                  What started as an intimate 30-seat bistro has evolved into one of the city's most acclaimed culinary destinations, without ever losing sight of our founding principles: exceptional ingredients, meticulous preparation, and warm hospitality.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={0.2}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560624052-3759a3f1656c?q=80&w=2070&auto=format&fit=crop"
                  alt="Bistro beginnings"
                  className="w-full h-auto"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedText
              text="Our Philosophy"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-6"
            />
            <p className="text-muted-foreground">
              At Bistro Elegance, we believe that exceptional dining experiences arise from a perfect harmony of flavors, presentation, and atmosphere. Our approach combines respect for traditional techniques with a willingness to innovate and surprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="glass-card p-8 h-full">
                  <h3 className="text-xl font-medium mb-3 text-accent">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <AnimatedText
              text="Meet Our Team"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals who bring creativity, expertise, and dedication to Bistro Elegance every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <FadeInSection key={index} delay={0.2 * index}>
                <div className="group">
                  <div className="overflow-hidden rounded-xl mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-accent mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <AnimatedText
              text="Awards & Recognition"
              tag="h2"
              className="text-3xl md:text-4xl font-serif font-medium mb-4"
            />
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              We're honored to have received recognition for our commitment to culinary excellence and exceptional dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: "2023", award: "Restaurant of the Year", organization: "City Culinary Awards" },
              { year: "2022", award: "Best Fine Dining Experience", organization: "Gourmet Magazine" },
              { year: "2021", award: "Outstanding Wine Program", organization: "Wine Enthusiast Awards" },
              { year: "2020", award: "Chef of the Year - Michel Laurent", organization: "National Chef Association" },
              { year: "2019", award: "Excellence in Service", organization: "Hospitality Guild" },
              { year: "2018", award: "Most Innovative Menu", organization: "Food Innovation Awards" },
            ].map((award, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <div className="border border-primary-foreground/10 rounded-lg p-6 transition-all duration-300 hover:bg-primary-foreground/5">
                  <div className="text-accent mb-2">{award.year}</div>
                  <h3 className="text-xl font-medium mb-1">{award.award}</h3>
                  <p className="text-primary-foreground/70 text-sm">{award.organization}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedText
            text="Experience Bistro Elegance"
            tag="h2"
            className="text-3xl md:text-4xl font-serif font-medium mb-6"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us for an unforgettable dining experience where passion meets precision and every meal tells a story.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
