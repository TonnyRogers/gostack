import React, { useEffect, useState } from 'react';
import { Container, Title, List } from './styles';
import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }

    getAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, canceled_at: response.data.canceled_at }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
};