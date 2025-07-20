import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chef Marcus Weber",
      role: "Executive Chef",
      company: "The Golden Spoon Restaurant",
      rating: 5,
      content: "PRIME GREENS has revolutionized our kitchen. The quality and freshness of their produce is unmatched. Our guests constantly compliment the flavors, and knowing it's grown sustainably makes it even better.",
      avatar: "MW"
    },
    {
      name: "Sarah Thompson",
      role: "General Manager",
      company: "Azure Luxury Resort",
      rating: 5,
      content: "The consistency and reliability of PRIME GREENS has transformed our dining operations. We've reduced food waste by 40% and improved our sustainability ratings significantly.",
      avatar: "ST"
    },
    {
      name: "James Anderson",
      role: "Homeowner",
      company: "Private Residence",
      rating: 5,
      content: "Having a PRIME GREENS system in our home has been incredible. Fresh herbs and vegetables at our fingertips, and the kids love learning about how food grows. It's like having a farm in our kitchen!",
      avatar: "JA"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied customers who have transformed their approach to fresh produce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-primary transition-all duration-300 transform hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-primary mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;