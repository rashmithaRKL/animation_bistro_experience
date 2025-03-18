
import React from 'react';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1567696153798-9111f9bab1ad?q=80&w=2069&auto=format&fit=crop"
            alt="Restaurant contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container relative z-10 text-center px-6 md:px-12">
          <AnimatedText
            text="Contact Us"
            tag="h1"
            className="text-4xl md:text-6xl font-serif text-white mb-4"
          />
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeInSection direction="right">
              <div className="space-y-8">
                <div>
                  <AnimatedText
                    text="Get in Touch"
                    tag="h2"
                    className="text-3xl font-serif font-medium mb-6"
                  />
                  <p className="text-muted-foreground">
                    We welcome your inquiries, feedback, and reservation requests. Our team is ready to assist you with any questions you may have.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">123 Gourmet Avenue, Culinary District, City, ZIP</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline inline-block mt-1"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">Reservations: <a href="tel:+15551234567" className="hover:text-accent">+1 (555) 123-4567</a></p>
                      <p className="text-muted-foreground">General Inquiries: <a href="tel:+15559876543" className="hover:text-accent">+1 (555) 987-6543</a></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">Reservations: <a href="mailto:reservations@bistroelegance.com" className="hover:text-accent">reservations@bistroelegance.com</a></p>
                      <p className="text-muted-foreground">General Inquiries: <a href="mailto:info@bistroelegance.com" className="hover:text-accent">info@bistroelegance.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full text-accent">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                      <p className="text-muted-foreground">Bar: Open until midnight daily</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent/10 p-3 rounded-full text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent/10 p-3 rounded-full text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-accent/10 p-3 rounded-full text-accent hover:bg-accent hover:text-white transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={0.2}>
              <ContactForm />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48376.20193961321!2d-74.0300011914063!3d40.74380275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1624452901584!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
          title="Restaurant location"
        ></iframe>

        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent z-10"></div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <AnimatedText
              text="Frequently Asked Questions"
              tag="h2"
              className="text-3xl font-serif font-medium mb-4"
            />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about reservations, dining, and special events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "Do you take reservations?",
                answer: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can reserve through our website, by phone, or via email."
              },
              {
                question: "Is there a dress code?",
                answer: "We suggest smart casual attire. While we don't enforce a strict dress code, we ask that guests refrain from wearing athletic wear, beachwear, or overly casual attire."
              },
              {
                question: "Do you accommodate dietary restrictions?",
                answer: "Absolutely. Please inform us of any dietary restrictions when making your reservation, and our chefs will be happy to accommodate your needs."
              },
              {
                question: "Can you host private events?",
                answer: "Yes, we offer private dining options for special occasions, corporate events, and celebrations. Please contact our events team for more information."
              },
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
    </div>
  );
};

export default Contact;
