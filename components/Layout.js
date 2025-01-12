import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="dark font-mono">
      <Head>
        <title>Jaouad Chakir - Software Engineer & ML Developer</title>
        <meta name="description" content="Portfolio of Jaouad Chakir, a Software Engineer and Machine Learning Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 py-10 scroll-smooth">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
