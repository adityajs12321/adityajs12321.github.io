
import { Check } from "lucide-react";

const WhyDreamSpace = () => {
  const benefits = [
    "AI-powered 2D to 3D conversion ensures accuracy",
    "Real-time customization to modify layouts instantly",
    "VR walkthroughs for immersive experience",
    "Cloud access from any device, anywhere",
    "Seamless integrations with design software",
    "Smart home design recommendations",
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="how-it-works">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WHY <span className="text-gradient">DREAMSPACE</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              DreamSpace transforms the way you design, visualize, and experience homes 
              before construction begins. Our AI-powered 2D to 3D conversion ensures accuracy, 
              while real-time customization lets you modify layouts instantly. With VR walkthroughs, 
              cloud access, and seamless integrations, DreamSpace makes home design smarter, 
              faster, and regret-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check 
                      className="text-dreamspace-500" 
                      size={20}
                    />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                alt="DreamSpace visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDreamSpace;
