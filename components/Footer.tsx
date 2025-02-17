import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
              <li><Link href="/our-services" className="hover:text-gray-400">Our Services</Link></li>
              <li><Link href="/sell-art" className="hover:text-gray-400">Sell Art</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Artists & Exhibitions</h3>
            <ul>
              <li><Link href="/artists" className="hover:text-gray-400">Artists</Link></li>
              <li><Link href="/exhibitions" className="hover:text-gray-400">Exhibitions</Link></li>
              <li><Link href="/blog-news" className="hover:text-gray-400">Blog/News</Link></li>
              <li><Link href="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Search</h3>
            <ul>
              <li><Link href="/search-for-products" className="hover:text-gray-400">Search for Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul>
              <li><Link href="/terms-and-conditions" className="hover:text-gray-400">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm">
            Vinceville acknowledges the Traditional Custodians of the country throughout Australia and their connections to land, sea, and community.
          </p>
          <p className="text-sm mt-2">
            We recognise and respect the cultural heritage of Aboriginal and Torres Strait Islander peoples and pay our respect to their Elders past and present.
          </p>
          <p className="text-sm mt-4">
            © 2024 Vinceville. See by <a href="mailto:info@vinceville.com" className="hover:text-gray-400">info@vinceville</a> <a href="http://www.vinceville.com" className="hover:text-gray-400">www.vinceville.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}