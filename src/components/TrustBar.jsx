import { ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function TrustBar() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 " />,
      title: "7-day Money-Back Guarantee ",
      description: "Risk-free botanical upgrades"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Climate-Safe Delivery",
      description: "Ensuring health from us to you"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Botanical Experts",
      description: "24/7 care support via chat"
    }
  ];

  return (
    <section className="bg-[#f2f4f2] py-8 ">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className=" text-[#1B3B22] bg-[#D1E7D1] p-3 rounded-full ">
              {feature.icon}
            </div>
            <div>
              <p className=" text-black font-bold">{feature.title}</p>
              <p className=" text-sm  text-[#08080880]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
