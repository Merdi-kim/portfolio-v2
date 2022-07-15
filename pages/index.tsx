import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/sections/Contact';
import HeroBanner from '../components/sections/HeroBanner';
import Languages from '../components/sections/Languages';
import NavBar from '../components/sections/Navbar';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Merkim | Software engineering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroBanner />
      <Skills />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
};

export default Home;
