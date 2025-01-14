"use client";

import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-green-400">
        <Info className="w-6 h-6 mr-2" />
        About
      </h2>
      <div className="bg-gray-900 rounded-md p-4">
        <ul className="list-disc pl-5 space-y-4 text-green-400">
          <li className="leading-relaxed">
            <p className="text-gray-400">
              I am <span className="text-white">Jaouad Chakir</span>,
              a <span className="text-white">software engineer</span> and <span className="text-white">deep learning</span> enthusiast
              based in <span className="text-white">Morocco</span>. I specialize in <span className="text-white">backend development</span> and building scalable,
              efficient systems using <span className="text-white">Python</span>, <span className="text-white">TypeScript</span>,
              and <span className="text-white">C++</span>. My skills include developing <span className="text-white">RESTful APIs</span>,
              working with frameworks like <span className="text-white">Django</span> and <span className="text-white">NestJS</span>,
              and deploying containerized applications with <span className="text-white">Docker</span>.
            </p>
          </li>
          <li className="leading-relaxed">
            <p className="text-gray-400">
              I am also passionate about <span className="text-white">deep learning</span> and enjoy
              solving real-world problems through <span className="text-white">data analysis</span>,
              <span className="text-white"> models fine-tuning</span>, or even <span className="text-white">models selection</span>.
              I have experience with <span className="text-white">neural networks</span>,
              and other <span className="text-white">Deep Learning algorithms</span>,
              using tools like <span className="text-white">NumPy</span>, <span className="text-white">Keras</span>,
              and <span className="text-white">PyTorch</span>.
            </p>
          </li>
          <li className="leading-relaxed">
            <p className="text-gray-400">
              I am currently a student at <span className="text-white">1337 Coding School (42 Network)</span>, where I focus on enhancing my skills
              in <span className="text-white">software engineering</span> and <span className="text-white">deep learning</span>.
              My <span className="text-white">GitHub</span> projects showcase my work in <span className="text-white">backend systems</span>,
              <span className="text-white"> machine learning models</span>, and <span className="text-white">algorithm development</span>.
            </p>
          </li>
          <li className="leading-relaxed">
            <p className="text-gray-400">
              When I’m not coding, I explore <span className="text-white">advanced technologies</span> to
              find <span className="text-white">innovative solutions</span> to everyday challenges,
              or simply play <span className="text-white">football</span>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
