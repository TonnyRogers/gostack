import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProjectList,
  PorjectContainer,
  ProjectTitle,
  NewProjectButton,
} from './styles';
import { getProjectsRequest } from '../../store/modules/projects/actions';
import NewProject from '../NewProject';
import Can from '../Can';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const activeTeam = useSelector((state) => state.teams.active);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [activeTeam]);

  function toggleModalOpen() {
    setIsModalOpen(true);
  }

  function toggleModalClose() {
    setIsModalOpen(false);
  }

  if (!activeTeam) return null;

  return (
    <Container>
      <ProjectList
        data={projects.data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PorjectContainer>
            <ProjectTitle>{item.title}</ProjectTitle>
          </PorjectContainer>
        )}
      />

      <Can checkPermission="projects_create">
        <NewProjectButton onPress={toggleModalOpen}>
          <Icon name="add" size={24} color="#FFF" />
        </NewProjectButton>
      </Can>

      <Can checkPermission="projects_create">
        <NewProject visible={isModalOpen} onRequestClose={toggleModalClose} />
      </Can>
    </Container>
  );
};

export default Projects;
