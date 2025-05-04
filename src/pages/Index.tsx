
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Services from "@/components/Services";
import WhyDreamSpace from "@/components/WhyDreamSpace";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Services />
        <WhyDreamSpace />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
