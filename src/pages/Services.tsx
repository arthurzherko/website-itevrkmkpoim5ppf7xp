import ServicesList from "../components/ServicesList";
import PricingPackages from "../components/PricingPackages";
import ProcessTimeline from "../components/ProcessTimeline";
import CallToAction from "../components/CallToAction";

const Services = () => {
  return (
    <div>
      <ServicesList />
      <PricingPackages />
      <ProcessTimeline />
      <CallToAction />
    </div>
  );
};

export default Services;
