import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-primary text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
        <p className="text-xl mb-8">Let's create a tailored strategy to help you achieve your business goals.</p>
        <Button size="lg" variant="secondary">Schedule a Consultation</Button>
      </div>
    </div>
  );
};

export default CallToAction;
