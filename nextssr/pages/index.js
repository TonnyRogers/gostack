import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`;

const Home = () => {
  return (
    <div> 
      <Head>
        <title>Home</title>
      </Head>
      <img src="/static/open-peeps.png" alt="main image" width="200"/>
      <Title>Hello Tony!</Title>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}

export default withAnalytics()(Home);