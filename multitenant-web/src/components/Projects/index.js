import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getProjectsRequest,
  openProjectModal,
  closeProjectModal,
  createProjectRequest,
} from '~/store/modules/projects/actions';
import { openMembersModal } from '~/store/modules/members/actions';

import Can from '~/components/Can';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import Members from '~/components/Members';
import { Container, Project } from './styles';

const Projects = () => {
  const activeTeam = useSelector((state) => state.teams.active);
  const projects = useSelector((state) => state.projects);
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [dispatch, activeTeam]);

  function handleCreateProject(e) {
    e.preventDefault();

    dispatch(createProjectRequest(newProject));
    dispatch(closeProjectModal());
  }

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1> Projetos em: {activeTeam.name}</h1>
        <div>
          <Can checkPermission="projects_create">
            <Button type="button" onClick={() => dispatch(openProjectModal())}>
              + Novo
            </Button>
          </Can>
          <Button type="button" onClick={() => dispatch(openMembersModal())}>
            Membros
          </Button>
        </div>
      </header>

      {projects.data.map((project) => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar Projeto</h1>

          <form onSubmit={(e) => handleCreateProject(e)}>
            <span>NOME</span>
            <input
              type="text"
              name="newProject"
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
            />
            <Button type="submit" size="big" onClick={() => {}}>
              Salvar
            </Button>
            <Button
              type="button"
              size="small"
              color="gray"
              onClick={() => dispatch(closeProjectModal())}
            >
              Cancelar
            </Button>
          </form>
        </Modal>
      )}

      {members.membersModalOpen && <Members />}
    </Container>
  );
};

export default Projects;

Projects.propTypes = {
  activeTeam: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Projects.defaultProps = {
  activeTeam: null,
};
