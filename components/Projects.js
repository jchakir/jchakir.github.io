"use client";

import React from 'react';
import { Database, ExternalLink, BrainCircuit } from 'lucide-react';

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="bg-gray-900 p-4 rounded-lg text-white">
    <h3 className="text-xl font-bold mb-2 text-green-400">{title}</h3>
    <p className="text-white mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-2 py-1 bg-gray-800 rounded text-sm">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <a href={link} target="_blank" className="flex items-center text-blue-400 hover:text-blue-300">
        <ExternalLink className="w-4 h-4 mr-1" />
        View-Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  // Separate arrays: Software Engineering & Machine Learning
  const softwareEngineeringProjects = [
    {
      title: 'Transcendence: Online Ping-Pong',
      description: 'Real-time multiplayer game with chat features',
      tech: ['TypeScript', 'NestJS', 'WebSocket'],
      link: 'https://github.com/jchakir/ft_transcendence',
    },
    {
      title: 'Inception: Microservices Architecture',
      description: 'Built a microservices architecture with Docker, implementing Nginx for load balancing.',
      tech: ['Docker', 'Nginx'],
      link: 'https://github.com/jchakir/inception',
    },
    {
      title: 'Containers: STL-like Container Implementation',
      description: 'Recreated STL containers like vector and map using C++ templates and Red-Black Trees.',
      tech: ['C++', 'Templates', 'Data Structures'],
      link: 'https://github.com/jchakir/ft_containers',
    },
    {
      title: 'WebServ: HTTP Server',
      description:
        'Developed a reliable HTTP server using C++ sockets and Linux syscalls for connection management.',
      tech: ['C++', 'Linux Networking Syscalls'],
      link: 'https://github.com/jchakir/webserv',
    },
  ];

  const machineLearningProjects = [
    {
      title: 'Tagma: Automated Tag Prediction',
      description: 'Developed a model to predict project tags using XGBoost',
      tech: ['XGBoost', 'Python', 'Machine Learning'],
      link: 'https://github.com/jchakir',
    },
    {
      title: 'MLP: Multi-Layer Perceptron',
      description:
        'Built a neural network from scratch for classification tasks, optimizing parameters for enhanced efficiency.',
      tech: ['Neural Networks', 'NumPy', 'Python'],
      link: 'https://github.com/jchakir/MLP-from-scratch',
    },
    {
      title: 'Tweets: NLP and Sentiment Analysis',
      description:
        'Processed tweet data to classify sentiment and employed various ML algorithms for analysis.',
      tech: ['Decision-Tree', 'Naive-Bayes', 'NLTK', 'TFIDF', 'Python'],
      link: 'https://github.com/jchakir/Tweets-NLP',
    },
    {
      title: "CHURN-Bank-Customers: Banking Data Processing and Model Training",
      description:
        "Built a data pipeline for banking data preprocessing and trained multiple ML models, including Naive Bayes, Random Forest, and MLP.",
      tech: ["Scikit-Learn", "Keras", "TensorFlow", "Machine Learning", "Data Cleaning"],
      link: "https://github.com/jchakir/CHURN-Bank-Customers"
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20 pb-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="flex mb-4 text-2xl font-bold text-green-400 ">
              <Database className="w-6 h-6 mr-2" />
            Projects: Software-Engineering
          </h3>
          <div className="space-y-6">
            {softwareEngineeringProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="flex mb-4 text-2xl font-bold text-green-400">
            <BrainCircuit className="w-6 h-6 mr-2" />
            Projects: Machine-Learning
          </h3>
          <div className="space-y-6">
            {machineLearningProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

