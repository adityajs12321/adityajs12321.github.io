
import { Eye } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="vision">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 p-4 bg-dreamspace-100 rounded-full">
            <Eye size={32} className="text-dreamspace-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">VISION</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            We're Changing the Way the World Designs Homes. This technology transforms 
            home design by converting 2D plans into interactive 3D models, reducing regret,
            costly revisions, and design flaws. It makes visualization accessible, enables 
            real-time customization, enhances real estate sales, and integrates VR for immersive 
            previews—ensuring smarter, more confident decisions before construction begins.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-dreamspace-500 to-dreamspace-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
