import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Music, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 border-t border-white/[0.2]'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Brand Section */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <Music className='text-green-500' size={32} />
              <h3 className='text-2xl font-bold text-white'>MusicMaster</h3>
            </div>
            <p className='text-sm text-gray-400 mb-4'>
              Transforming passion into excellence. Master the art of music with our comprehensive courses and expert instructors.
            </p>
            <div className='flex gap-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' 
                 aria-label='Visit our Facebook page'
                 className='hover:text-green-500 transition-colors'>
                <Facebook size={20} />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' 
                 aria-label='Visit our Twitter page'
                 className='hover:text-green-500 transition-colors'>
                <Twitter size={20} />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' 
                 aria-label='Visit our Instagram page'
                 className='hover:text-green-500 transition-colors'>
                <Instagram size={20} />
              </a>
              <a href='https://youtube.com' target='_blank' rel='noopener noreferrer' 
                 aria-label='Visit our YouTube channel'
                 className='hover:text-green-500 transition-colors'>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='hover:text-green-500 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-green-500 transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/courses' className='hover:text-green-500 transition-colors'>
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-green-500 transition-colors'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/blog' className='hover:text-green-500 transition-colors'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Popular Courses</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/courses/basic-theory' className='hover:text-green-500 transition-colors'>
                  Basic Music Theory
                </Link>
              </li>
              <li>
                <Link href='/courses/composition' className='hover:text-green-500 transition-colors'>
                  Advanced Composition
                </Link>
              </li>
              <li>
                <Link href='/courses/songwriting' className='hover:text-green-500 transition-colors'>
                  Songwriting
                </Link>
              </li>
              <li>
                <Link href='/courses/production' className='hover:text-green-500 transition-colors'>
                  Music Production
                </Link>
              </li>
              <li>
                <Link href='/courses/performance' className='hover:text-green-500 transition-colors'>
                  Live Performance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Contact Us</h4>
            <ul className='space-y-3 text-sm'>
              <li className='flex items-start gap-2'>
                <MapPin size={18} className='text-green-500 mt-0.5 flex-shrink-0' />
                <span>123 Music Street, Harmony City, MC 12345</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone size={18} className='text-green-500 flex-shrink-0' />
                <a href='tel:+1234567890' className='hover:text-green-500 transition-colors'>
                  +1 (234) 567-890
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={18} className='text-green-500 flex-shrink-0' />
                <a href='mailto:info@musicmaster.com' className='hover:text-green-500 transition-colors'>
                  info@musicmaster.com
                </a>
              </li>
            </ul>
            <div className='mt-6'>
              <h5 className='text-sm font-semibold text-white mb-2'>Office Hours</h5>
              <p className='text-xs text-gray-400'>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className='text-xs text-gray-400'>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-white/[0.1]'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-400'>
              © {new Date().getFullYear()} MusicMaster. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <Link href='/privacy' className='hover:text-green-500 transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='hover:text-green-500 transition-colors'>
                Terms of Service
              </Link>
              <Link href='/cookies' className='hover:text-green-500 transition-colors'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
