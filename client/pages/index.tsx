import type { NextPage, GetServerSideProps } from 'next';
import useSwr from 'swr';
import fetcher from '../utils/fetcher';
import getGoogleOAuthURL from '../utils/getGoogleUrl';
import styles from '../styles/Home.module.css';

interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  session: string;
  iat: number;
  exp: number;
}

const Home: NextPage<{ fallbackData: User }> = ({ fallbackData }) => {
  const { data } = useSwr<User | null>(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    fetcher,
    { fallbackData }
  );

  if (data) {
    return <div>Welcome, {data.name}!</div>;
  }

  return (
    <div className={styles.container}>
      <a href={getGoogleOAuthURL()}>Login with Google</a>
      <p>Please login!</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
    context.req.headers
  );

  return { props: { fallbackData: data } };
};

export default Home;
