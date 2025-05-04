
import { Home, Settings, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="features">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transforming how homeowners, buyers, and professionals visualize, customize, and experience spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-dreamspace-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="text-dreamspace-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Homeowners & Buyers</h3>
              <p className="text-gray-600">
                Visualizing your dream home has never been easier. Our advanced 2D-to-3D conversion 
                technology instantly transforms floor plans into immersive 3D models, eliminating 
                guesswork and ensuring accuracy.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-dreamspace-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="text-dreamspace-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive VR Walkthroughs</h3>
              <p className="text-gray-600">
                With interactive VR walkthroughs, you can explore every detail before construction begins, 
                making confident design choices. Experience your space in immersive virtual reality.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-dreamspace-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="text-dreamspace-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Customization</h3>
              <p className="text-gray-600">
                The platform is built for both homeowners and professionals, offering seamless customization 
                to modify layouts in real-time. No technical expertise is required—just upload your plan 
                and bring your vision to life.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
