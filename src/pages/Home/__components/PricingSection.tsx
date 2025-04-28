import PricingCard from "../../../components/PricingCard";
import { pricingPlans } from "../../../data/demoData";



const PricingSection = () => {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-wrap gap-10 justify-center">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            billing={plan.billing}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
