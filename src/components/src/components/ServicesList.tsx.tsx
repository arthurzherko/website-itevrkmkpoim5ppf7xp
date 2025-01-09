import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your website's visibility in search engine results pages. Our SEO experts use the latest techniques to improve your rankings and drive organic traffic.",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description: "Maximize your ROI with targeted PPC campaigns. We create and manage ads that appear at the top of search results, driving immediate traffic to your site.",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across social platforms. Our team creates compelling content and manages your social presence to increase followers and conversions.",
  },
  {
    title: "Content Marketing",
    description: "Attract and retain customers with valuable, relevant content. From blog posts to infographics, we create content that resonates with your target audience and drives engagement.",
  },
  {
    title: "Email Marketing",
    description: "Nurture leads and drive sales with targeted email campaigns. We design and implement email strategies that keep your brand top-of-mind and encourage customer action.",
  },
  {
    title: "Web Design and Development",
    description: "Create a stunning online presence with our custom web design services. We build responsive, user-friendly websites that convert visitors into customers.",
  },
];

const ServicesList = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
