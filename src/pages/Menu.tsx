
import React, { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import FadeInSection from '@/components/FadeInSection';
import { ArrowRight } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'wines', name: 'Wines' },
  ];

  const menuItems = [
    // Starters
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and mozzarella, served with truffle aioli",
      price: "$16",
      category: "starters",
      image: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Heritage Tomato Salad",
      description: "Mixed heirloom tomatoes with buffalo mozzarella, basil, and aged balsamic",
      price: "$14",
      category: "starters",
      tags: ["vegetarian"]
    },
    {
      id: 3,
      name: "Seared Foie Gras",
      description: "With caramelized apple, toasted brioche, and port wine reduction",
      price: "$22",
      category: "starters",
      isSpecial: true
    },
    
    // Main Courses
    {
      id: 4,
      name: "Roasted Rack of Lamb",
      description: "With herb crust, pomme purée, seasonal vegetables, and rosemary jus",
      price: "$36",
      category: "mains",
      image: "https://images.unsplash.com/photo-1514516345957-556ca7c90a74?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Duo of Beef",
      description: "Grilled filet and braised short rib with truffled potato, wild mushrooms, and red wine sauce",
      price: "$42",
      category: "mains",
      isSpecial: true
    },
    {
      id: 6,
      name: "Duck Breast",
      description: "Pan-seared duck with cherry sauce, parsnip purée, and glazed vegetables",
      price: "$34",
      category: "mains"
    },
    
    // Seafood
    {
      id: 7,
      name: "Pan-Seared Scallops",
      description: "With cauliflower purée, pancetta, apple, and caper brown butter",
      price: "$32",
      category: "seafood",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?q=80&w=2187&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Grilled Sea Bass",
      description: "With fennel, orange, olive, and saffron sauce",
      price: "$38",
      category: "seafood"
    },
    {
      id: 9,
      name: "Lobster Linguine",
      description: "With cherry tomatoes, chili, garlic, and fresh herbs",
      price: "$40",
      category: "seafood",
      isSpecial: true
    },
    
    // Vegetarian
    {
      id: 10,
      name: "Wild Mushroom Risotto",
      description: "Arborio rice with wild mushrooms, white wine, parmesan, and truffle oil",
      price: "$26",
      category: "vegetarian",
      tags: ["vegetarian"],
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      name: "Roasted Vegetable Tart",
      description: "Seasonal vegetables with goat cheese in a flaky pastry, with herb salad",
      price: "$24",
      category: "vegetarian",
      tags: ["vegetarian"]
    },
    {
      id: 12,
      name: "Butternut Squash Ravioli",
      description: "With sage butter, toasted pine nuts, and aged parmesan",
      price: "$25",
      category: "vegetarian",
      tags: ["vegetarian"]
    },
    
    // Desserts
    {
      id: 13,
      name: "Dark Chocolate Fondant",
      description: "With salted caramel ice cream and honeycomb",
      price: "$14",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: 14,
      name: "Vanilla Crème Brûlée",
      description: "Classic French custard with caramelized sugar crust and shortbread",
      price: "$12",
      category: "desserts"
    },
    {
      id: 15,
      name: "Lemon Tart",
      description: "With Italian meringue, raspberry sorbet, and fresh berries",
      price: "$13",
      category: "desserts"
    },
    
    // Wines
    {
      id: 16,
      name: "Château Margaux 2015",
      description: "Bordeaux, France - Complex and elegant with notes of dark fruit and tobacco",
      price: "$320/bottle",
      category: "wines"
    },
    {
      id: 17,
      name: "Puligny-Montrachet 2018",
      description: "Burgundy, France - Minerality with notes of citrus, white flowers, and honey",
      price: "$180/bottle",
      category: "wines",
      isSpecial: true
    },
    {
      id: 18,
      name: "Tignanello 2017",
      description: "Tuscany, Italy - Super Tuscan with rich black cherries, spices, and vanilla",
      price: "$210/bottle",
      category: "wines"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="Food plating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container relative z-10 text-center px-6 md:px-12">
          <AnimatedText
            text="Our Menu"
            tag="h1"
            className="text-4xl md:text-6xl font-serif text-white mb-4"
          />
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Explore our seasonal offerings crafted with the finest ingredients
          </p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <AnimatedText
            text="A Culinary Journey"
            tag="h2"
            className="text-3xl font-serif font-medium mb-6"
          />
          <p className="text-muted-foreground mb-4">
            Our menu celebrates the finest seasonal ingredients, combining classic techniques with innovative approaches to create dishes that delight and surprise.
          </p>
          <p className="text-muted-foreground">
            Executive Chef Michel Laurent changes our offerings regularly to showcase the best produce from our trusted local suppliers and to reflect the changing seasons.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 sticky top-16 bg-background z-20 border-y border-border/20 shadow-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto pb-3 scrollbar-hide gap-4 md:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-secondary hover:bg-secondary/70'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <FadeInSection key={item.id} delay={0.05 * index} className="h-full">
                <div className={`rounded-lg overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md ${
                  item.isSpecial ? 'border border-gold/20' : 'border border-border/20'
                }`}>
                  {item.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-medium">{item.name}</h3>
                      <span className="text-accent font-medium">{item.price}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags?.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                      
                      {item.isSpecial && (
                        <span className="text-xs px-2 py-1 bg-gold/20 text-gold-dark rounded-full">
                          Chef's Special
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dietary Needs */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText
              text="Special Dietary Requirements"
              tag="h2"
              className="text-3xl font-serif font-medium mb-6"
            />
            <p className="mb-6 text-primary-foreground/80">
              We understand the importance of accommodating dietary restrictions and allergies. Our chefs are happy to modify dishes to meet your needs.
            </p>
            <p className="text-primary-foreground/80">
              Please inform your server of any allergies or dietary requirements when ordering, and we'll ensure your dining experience is both safe and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedText
            text="Join Us for an Unforgettable Meal"
            tag="h2"
            className="text-3xl font-serif font-medium mb-6"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We look forward to welcoming you to Bistro Elegance and providing you with an exceptional dining experience.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Make a Reservation <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
