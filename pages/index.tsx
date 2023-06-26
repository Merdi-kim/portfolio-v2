import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import HeroBanner from '../components/sections/HeroBanner';
import { getRecentPosts } from '../services';

const Home: NextPage = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="bg-main min-h-screen text-white font-secondary">
      <Head>
        <title>Merdi Kim | Software engineer</title>
        <meta
          name="description"
          content="Merdi Kim is a software engineer with experience in building secure and scalable software"
        />
        <link rel="icon" href="/profile.ico" />
      </Head>
      <HeroBanner posts={posts} />
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
