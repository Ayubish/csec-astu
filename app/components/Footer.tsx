// Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between">
        {/* Logo & Description */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h3 className="text-3xl font-semibold">CSEC ASTU</h3>
          <p className="text-gray-400 mt-4">
            Empowering the next generation of tech leaders through education and
            community engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400">
            <li className="mb-2">
              <a href="#">Home</a>
            </li>
            <li className="mb-2">
              <a href="#">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#">Divisions</a>
            </li>
            <li className="mb-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Email: info@csecastu.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>
        </div>

        {/* Social Media Links */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 text-center py-4">
        <p className="text-gray-500 text-sm">
          &copy; 2024 CSEC ASTU. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
