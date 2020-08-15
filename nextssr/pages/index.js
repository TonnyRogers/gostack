import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Home = () => {
  return (
    <div> 
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/open-peeps.png" alt="main image" width="200"/>
      <h1>Hello Tony!</h1>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}

export default withAnalytics()(Home);