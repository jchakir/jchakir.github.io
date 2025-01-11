import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import About from '../components/About';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Languages from '../components/Languages';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="md:w-6/10">
          <ImageSection />
        </div>
        <div className="md:w-6/10">
          <Contact />
        </div>
        <div className="md:w-6/10">
          <Hero />
        </div>
      </div>
      <About />
      <div className="flex flex-col md:flex-row gap-8 py-8">
        <div className="md:w-1/2">
          <Education />
        </div>
        <div className="md:w-1/2">
          <Experience />
        </div>
      </div>
      <Projects />
      <Skills />
      <Languages />
    </Layout>
  );
}
