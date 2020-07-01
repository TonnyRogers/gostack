import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getProjectsRequest } from '~/store/modules/projects/actions';

import Button from '~/styles/components/Button';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.teams.active);
  const projects = useSelector((state) => state.projects.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [dispatch, activeTeam]);

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

      {projects.map((project) => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}
    </Container>
  );
};

export default Projects;

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
