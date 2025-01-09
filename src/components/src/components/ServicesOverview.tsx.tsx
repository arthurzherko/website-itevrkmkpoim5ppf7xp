import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RocketIcon, SearchIcon, ShareIcon } from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization",
    description: "Boost your visibility and rank higher in search results",
    icon: SearchIcon,
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across platforms",
    icon: ShareIcon,
  },
  {
    title: "Performance Marketing",
    description: "Drive conversions with data-driven campaigns",
    icon: RocketIcon,
  },
];

const ServicesOverview = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="w-10 h-10 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
