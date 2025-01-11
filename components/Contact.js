import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white h-full">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Contact</h2>
      <div className="space-y-4">
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-green-400" />
            <span>jawadchakir1419@gmail.com</span>
          </div>
        </div>
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+212 6 64 28 42 69</span>
          </div>
        </div>
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-green-400" />
            <span>Ben Guerir, Morocco</span>
          </div>
        </div>
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <Github className="w-5 h-5 text-green-400" />
            <a href="https://github.com/jchakir" target="_blank" rel="noopener noreferrer">jchakir</a>
          </div>
        </div>
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <Linkedin className="w-5 h-5 text-green-400" />
            <a href="https://linkedin.com/in/jchakir" target="_blank" rel="noopener noreferrer">jchakir</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
