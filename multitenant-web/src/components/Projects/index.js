import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '~/styles/components/Button';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.teams.active);

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button type="button" onClick={() => {}}>
            + Novo
          </Button>
          <Button type="button" onClick={() => {}}>
            Membros
          </Button>
        </div>
      </header>

      <Project>
        <p>Aplicação com React</p>
      </Project>

      <Project>
        <p>Aplicação com React</p>
      </Project>

      <Project>
        <p>Aplicação com React</p>
      </Project>

      <Project>
        <p>Aplicação com React</p>
      </Project>
    </Container>
  );
};

export default Projects;

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
