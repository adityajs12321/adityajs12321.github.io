
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Home, Your Vision – {" "}
              <span className="text-gradient">Experience It in 3D First!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Transform 2D floor plans into interactive 3D models instantly. 
              Design with confidence and eliminate guesswork before construction begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dreamspace-500 hover:bg-dreamspace-600 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2">
                Try It Now
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-dreamspace-500 text-dreamspace-700 hover:bg-dreamspace-50 px-8 py-6 text-lg rounded-md">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="3D home visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
