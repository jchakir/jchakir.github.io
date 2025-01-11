import React from 'react';
import { Brain, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tech }) => (
  <div className="bg-gray-800 p-6 rounded-lg text-white"> {/* Removed hover:bg-gray-700 */}
    <h3 className="text-xl font-bold mb-2 text-green-400">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="px-2 py-1 bg-gray-900 rounded text-sm">
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4">
      <a href="#" className="flex items-center text-blue-400 hover:text-blue-300">
        <ExternalLink className="w-4 h-4 mr-1" />
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  const allProjects = [
    {
      title: "Tagma: Automated Tag Prediction",
      description: "Developed a model to predict project tags using XGBoost",
      tech: ["XGBoost", "Python", "ML"],
    },
    {
      title: "Transcendence: Online Ping-Pong",
      description: "Real-time multiplayer game with chat features",
      tech: ["TypeScript", "NestJS", "WebSocket"],
    },
    {
      title: "MLP: Multi-Layer Perceptron",
      description: "Built a neural network from scratch for classification tasks, optimizing parameters for enhanced efficiency.",
      tech: ['Neural Networks', 'NumPy', 'Python'],
    },
    {
      title: "Tweets: NLP and Sentiment Analysis",
      description: "Processed tweet data to classify sentiment and employed various ML algorithms for analysis.",
      tech: ['Decision-Tree', 'Naive-Bayes', 'NLTK', 'TFIDF', 'Python'],
    },
    {
      title: "Inception: Microservices Architecture",
      description: "Built a microservices architecture with Docker, implementing Nginx for load balancing.",
      tech: ['Docker', 'Nginx'],
    },
    {
      title: "Containers: STL-like Container Implementation",
      description: "Recreated STL containers like vector and map using C++ templates and Red-Black Trees.",
      tech: ['C++', 'Templates', 'Data Structures'],
    },
    {
      title: "WebServ: HTTP Server",
      description: "Developed a reliable HTTP server using C++ sockets and Linux syscalls for connection management.",
      tech: ['C++', 'Linux Networking Syscalls'],
    },
  ];

  return (
    <section id="projects" className="py-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-green-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {allProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
