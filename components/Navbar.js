import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const activeSection = router.asPath.split('#')[1] || 'about'; // Default to 'about'

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50 text-green-400">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">jchakir@portfolio:~$</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`hover:text-white transition-colors ${
                  activeSection === section ? 'text-white' : ''
                }`}
              >
                ./{section}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
