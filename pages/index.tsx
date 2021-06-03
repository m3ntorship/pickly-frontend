import Head from 'next/head';
import { getPosts } from '@modules/shared/api/getPosts.api';
import type { FC, ReactElement } from 'react';
import { Fragment } from 'react';
import type { GetStaticProps } from 'next';
import type { IPostFeed } from '@modules/shared/types/postFeed/IPostFeed';
import withErrorHandler from '@modules/shared/components/HOC/WithErrorHandler/WithErrorHandler';

const TempTextPoll = ({ post }: { post: IPostFeed.IPost }): ReactElement => {
  return <h2>{post.id}</h2>;
};
const TempTextPollFeed = ({ data }: IPostFeed.IPosts): ReactElement => {
  return (
    <>
      {data.posts.map((post: IPostFeed.IPost) => {
        if (post.type === 'text poll') {
          return <TempTextPoll key={post.id} post={post} />;
        }
        return <Fragment key={post.id} />;
      })}
    </>
  );
};
const TempTextPollFeedWithError = withErrorHandler(TempTextPollFeed);

const Home: FC<IPostFeed.IPosts> = ({ data }): ReactElement => {
  return (
    <>
      <Head>
        <title>Pickify | Pick your choice</title>
      </Head>

      <TempTextPollFeedWithError data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data }: IPostFeed.IPosts = await getPosts();
    return {
      props: { data },
    };
  } catch (error: unknown) {
    return {
      props: { data: error },
    };
  }
};

export default Home;
