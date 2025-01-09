import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Apex Digital transformed our online presence. Our conversions have increased by 150% since working with them!",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "The team at Apex is incredibly knowledgeable and responsive. They've become an invaluable extension of our marketing department.",
    author: "Michael Chen",
    company: "GrowFast Solutions",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "We've seen a significant boost in our social media engagement thanks to Apex Digital's innovative strategies.",
    author: "Emily Rodriguez",
    company: "SocialBoom",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
