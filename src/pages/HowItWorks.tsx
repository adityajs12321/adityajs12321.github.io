
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileUp, Layers, MousePointer, Settings, VrHeadset } from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileUp className="h-8 w-8" />,
      title: "Upload your 2D floor plan",
      description: "Upload your floor plan in JPG, PDF, or DWG format."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "AI Detection",
      description: "Our AI detects rooms, walls, windows, and furniture layouts automatically."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "3D Generation",
      description: "Instantly generates a detailed 3D model with default textures."
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Customize",
      description: "Customize the layout, furnishings, and finishes to match your vision."
    },
    {
      icon: <Vr className="h-8 w-8" />,
      title: "Explore",
      description: "Explore your home using interactive VR or desktop 3D walkthrough."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
              Turn your home plan into a walkable 3D experience in minutes.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-1 gap-16 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 items-start md:items-center"
                >
                  <div className="bg-dreamspace-100 p-5 rounded-full text-dreamspace-600">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                      <span className="bg-dreamspace-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Illustration */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white p-6 max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-8">
                <div className="flex items-center justify-center h-full bg-dreamspace-100 text-dreamspace-600">
                  <p className="text-lg font-medium">Process Illustration</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Our advanced AI platform bridges the gap between traditional 2D planning and 
                  real-world visualization, saving time, reducing costly design errors, and ensuring 
                  every detail aligns with your vision.
                </p>
                <Button 
                  size="lg" 
                  className="bg-dreamspace-500 hover:bg-dreamspace-600"
                >
                  Start Designing Now <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
