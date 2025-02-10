"use client";

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex bg-gray-800 rounded-lg p-4 text-white  w-full items-center justify-center">
      <div className="space-y-4">
        <div className="bg-gray-900 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-green-400" />
            <span>jchakir@student.1337.ma</span>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Contact;
