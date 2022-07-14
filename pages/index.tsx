import type { NextPage } from 'next';
import Head from 'next/head';
import HeroBanner from '../components/sections/HeroBanner';
import NavBar from '../components/sections/Navbar';
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
    </div>
  );
};

export default Home;
