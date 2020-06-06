import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  handleInputChange = (element) => {
    this.setState({ newRepo: element.target.value });
  };

  handleSubmit = (element) => {
    element.preventDefault();
    console.log(this.state.newRepo);
  };

  render() {
    const { newRepo } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
