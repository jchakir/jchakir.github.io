import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-terminal-bg border-t border-terminal-muted py-6">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Jaouad Chakir. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/jchakir" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-blue transition-colors">
            <AiFillGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/jchakir" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-blue transition-colors">
            <AiFillLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;