import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import Contact from '../components/sections/Contact';
import HeroBanner from '../components/sections/HeroBanner';
import Languages from '../components/sections/Languages';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import { getRecentPosts } from '../services';

const Home: NextPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-main text-white font-secondary">
      <Head>
        <title>Merkim | Software engineering</title>
        <meta
          name="description"
          content="Merdi Kim is a software engineer with experience in building secure and scalable software "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner posts={posts} />
      <Skills />
      <Projects />
      <Languages />
      <Contact />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getRecentPosts();

  return {
    props: {
      posts,
    },
  };
};
