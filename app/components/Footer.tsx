import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:text-blue-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:text-blue-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:text-blue-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-4 hover:text-blue-300"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Computer Science and Engineering
          Club, Adama Science and Technology University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
