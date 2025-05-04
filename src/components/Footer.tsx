
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gradient">Dream</span>Space
            </h3>
            <p className="text-gray-600 mb-4 max-w-sm">
              Transform your 2D plans into interactive 3D models instantly.
              Design with confidence and eliminate guesswork.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-dreamspace-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-dreamspace-600">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-dreamspace-600">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                contact@dreamspace.ai
              </li>
              <li className="text-gray-600">
                +1 (555) 123-4567
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-dreamspace-600">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} DreamSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
