
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card rounded-xl p-8 md:p-10 w-full max-w-xl">
      <h3 className="text-2xl font-serif mb-6">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input bg-background/60 focus:ring-1 focus:ring-accent focus:border-accent transition-all"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input bg-background/60 focus:ring-1 focus:ring-accent focus:border-accent transition-all"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
              Phone (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input bg-background/60 focus:ring-1 focus:ring-accent focus:border-accent transition-all"
              placeholder="+1 (123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-input bg-background/60 focus:ring-1 focus:ring-accent focus:border-accent transition-all"
              required
            >
              <option value="">Select a subject</option>
              <option value="reservation">Reservation Inquiry</option>
              <option value="catering">Catering Services</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-md border border-input bg-background/60 focus:ring-1 focus:ring-accent focus:border-accent transition-all resize-none"
            placeholder="How can we help you?"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary bg-accent text-white w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>Sending...</>
          ) : (
            <>
              Send Message <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
