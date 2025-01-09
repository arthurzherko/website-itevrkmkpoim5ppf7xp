import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter",
    price: "$999/mo",
    description: "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Basic SEO optimization",
      "Social media management (2 platforms)",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$2,499/mo",
    description: "Ideal for growing businesses looking to expand their online presence.",
    features: [
      "Advanced SEO strategies",
      "Social media management (4 platforms)",
      "Content marketing (2 blog posts/mo)",
      "PPC campaign management",
      "Bi-weekly performance reports",
      "Priority email and phone support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large businesses with complex digital marketing needs.",
    features: [
      "Comprehensive SEO and content strategy",
      "Full-service social media management",
      "Custom content creation",
      "Advanced PPC and retargeting campaigns",
      "Conversion rate optimization",
      "24/7 dedicated support",
    ],
  },
];

const PricingPackages = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
