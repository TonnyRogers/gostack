import styled from 'styled-components';

export const Container = styled.aside`
  background: #202225;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  overflow-y: scroll;
  padding: 8px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Team = styled.button`
  background: transparent;
  margin: 0 0 8px;

  img {
    transition: all 0.2s;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: ${(props) => (props.current ? '0 3px 8px #59c18b' : '0')};
  }

  &:hover img {
    border-radius: 30%;
  }
`;

export const NewTeam = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 8px;
  background: transparent;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border: 1px dashed rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Logout = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px dashed #a43d3d;
  color: #a43d3d;
  font-weight: bold;
  transition: all 0.2s;
  background: transparent;

  &:hover {
    border: 1px dashed #e04848;
    color: #e04848;
  }
`;
