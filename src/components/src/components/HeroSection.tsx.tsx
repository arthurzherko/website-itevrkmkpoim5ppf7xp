import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Transform Your Digital Presence</h1>
        <p className="text-xl mb-8">Innovative strategies to elevate your brand and drive growth</p>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
};

export default HeroSection;
