import { FaCheckCircle } from "react-icons/fa";
import GetStartedButton from "./GetStartedButton";

type PricingCardProps = {
  title: string;
  subtitle: string;
  price: string;
  billing: string;
  features: string[];
};

const PricingCard = ({
  title,
  subtitle,
  price,
  billing,
  features,
}: PricingCardProps) => {
  return (
    <div className="border border-primary rounded-3xl p-8 w-full max-w-[400px] flex flex-col justify-between">
      <div>
        <h3 className="text-primary font-heading text-2xl mb-2">{title}</h3>
        <p className="text-[15px] leading-tight font-bold text-primary mb-6">
          {subtitle}
        </p>

        <div className="flex items-end gap-2 mb-4">
          <span className="text-primary font-bold text-5xl ">{price}</span>
          <span className="text-primary text-xl font-bold">{billing}</span>
        </div>

        <hr className="border-light my-6" />

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-primary text-sm font-bold"
            >
              <FaCheckCircle className="text-green-500 mt-1" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <GetStartedButton text="Get Started" />
      </div>
    </div>
  );
};

export default PricingCard;
