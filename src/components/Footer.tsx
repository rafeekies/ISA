import { Link } from 'react-router-dom'
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary-400" />
              <span className="font-bold text-xl">Islamic Schools Association</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Islamic education across New York and beyond. We support schools in providing 
              quality education rooted in Islamic values and academic excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400">About Us</Link></li>
              <li><Link to="/member-schools" className="text-gray-300 hover:text-primary-400">Member Schools</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-primary-400">Become a Member</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400">Blog</Link></li>
              <li><Link to="/qa" className="text-gray-300 hover:text-primary-400">Q&A</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">info@islamicschools.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Islamic Schools Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
