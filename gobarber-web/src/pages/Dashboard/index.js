import React from 'react';

import api from '~/services/api';

export default function Dashboard() {
  api.get('schedules');

  return <h1>Dashboad</h1>;
}
