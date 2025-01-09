import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience through in-depth consultations.",
  },
  {
    title: "Strategy Development",
    description: "Our team creates a customized digital marketing strategy tailored to your specific needs and objectives.",
  },
  {
    title: "Implementation",
    description: "We execute the strategy across various channels, optimizing your online presence and campaigns.",
  },
  {
    title: "Monitoring & Analysis",
    description: "Continuous monitoring of performance metrics allows us to make data-driven decisions and adjustments.",
  },
  {
    title: "Reporting & Optimization",
    description: "Regular reports keep you informed of progress, and we continuously optimize for better results.",
  },
];

const ProcessTimeline = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <Card className="ml-4 flex-grow">
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
