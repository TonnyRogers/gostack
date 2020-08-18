import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import withAnalytics from '~/hocs/withAnalytics';

const Detail = ({ user }) => {
  return(
    <div>
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt="User avatar" width="200"/>
      <br/>
      <Link href="/users">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(`https://api.github.com/users/${query.user}`);

  return { user: response.data };
}

export default withAnalytics()(Detail);

