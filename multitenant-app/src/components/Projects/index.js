import React, { useEffect } from 'react';
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

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const activeTeam = useSelector((state) => state.teams.active);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [activeTeam]);

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

      <NewProjectButton onPress={() => {}}>
        <Icon name="add" size={24} color="#FFF" />
      </NewProjectButton>
    </Container>
  );
};

export default Projects;
