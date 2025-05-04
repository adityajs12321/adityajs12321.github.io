
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Cloud, Layers3, Headset } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                We Transform the Future of{" "}
                <span className="text-gradient">House Design</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Our powerful platform bridges the gap between traditional 2D planning and real-world visualization, 
                saving time and reducing costly design errors.
              </p>
              <Button className="bg-dreamspace-500 hover:bg-dreamspace-600 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 mx-auto">
                Explore Features
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            {/* Feature 1: AI-Powered 2D-to-3D Conversion */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="mb-4 p-4 bg-dreamspace-100 rounded-full inline-block">
                  <Layers3 size={32} className="text-dreamspace-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  AI-Powered 2D-to-3D Conversion
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our advanced system intelligently reads blueprints, detects room layouts, dimensions, 
                  and openings to instantly generate interactive 3D models. This technology eliminates 
                  time-consuming manual modeling processes while ensuring precision in every detail.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Instant blueprint interpretation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Accurate dimensions and proportions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Smart detection of architectural elements</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1536483154339-4e35b2d14371?auto=format&fit=crop&w=800&q=80" 
                    alt="AI Blueprint Conversion" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: Interactive Design Tools */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="mb-4 p-4 bg-dreamspace-100 rounded-full inline-block">
                  <BookOpen size={32} className="text-dreamspace-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Interactive Design Tools
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Take full control of your design with our intuitive tools that allow you to adjust wall 
                  placements, experiment with different layouts, and visualize furniture arrangements in real-time. 
                  Our platform facilitates seamless customization for both homeowners and professional designers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Drag-and-drop furniture placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Real-time layout adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Material and finish visualization</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80" 
                    alt="Interactive Design Tools" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature 3: VR Walkthrough */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
              <div className="md:w-1/2">
                <div className="mb-4 p-4 bg-dreamspace-100 rounded-full inline-block">
                  <Headset size={32} className="text-dreamspace-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Virtual Reality (VR) Walkthrough
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Experience your future home like never before with our immersive VR technology. Navigate through 
                  each room, get a real sense of space and proportions, and make changes on the go. This powerful 
                  tool aids in confident design finalization and eliminates unwelcome surprises.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Immersive spatial experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Real-time lighting simulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Interactive design adjustments in VR</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80" 
                    alt="VR Walkthrough Experience" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Feature 4: Cloud-Based Accessibility */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <div className="mb-4 p-4 bg-dreamspace-100 rounded-full inline-block">
                  <Cloud size={32} className="text-dreamspace-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Cloud-Based Accessibility
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Access your designs anytime, anywhere with our secure cloud storage solution. Share your 
                  3D models with contractors, designers, or family members with ease, ensuring effortless 
                  collaboration across all devices and streamlining the entire home design process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Secure project storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Cross-device synchronization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-dreamspace-500"></div>
                    <span>Collaborative sharing capabilities</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                    alt="Cloud Accessibility" 
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why It <span className="text-gradient">Matters</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                DreamSpace bridges the gap between traditional 2D planning and real-world visualization,
                saving time, reducing costly design errors, and ensuring every detail aligns with your vision.
                By experiencing your space before it's built, you make confident decisions that avoid expensive
                revisions and create the perfect home environment for your needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-dreamspace-500 to-dreamspace-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-dreamspace-100 to-dreamspace-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Design Process?
                </h3>
                <p className="text-lg text-gray-700">
                  Join thousands of homeowners and designers who've revolutionized their approach to home design.
                </p>
              </div>
              <Button className="bg-dreamspace-500 hover:bg-dreamspace-600 text-white px-8 py-6 text-lg rounded-md flex items-center gap-2 whitespace-nowrap">
                Get Started Today
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
