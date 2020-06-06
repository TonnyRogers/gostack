import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native',
      'Flutter'
    ]
  };

  /* arrow => functions tem acesso ao this diferente de function() */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
        techs: [...this.state.techs, this.state.newTech], 
        newTech: ''
    });
  }  

  handleDelete = (index) => {
    this.setState({ 
        techs: this.state.techs.filter( (tech,tIndex) => tIndex !== index ) 
      });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <ul>
            {
              this.state.techs.map( (tech,index) => (
              <li key={index}> {tech} - <i onClick={() => this.handleDelete(index)}>Remover</i> </li>
              ))
            }
          </ul>
          <input 
            type="text" 
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Salvar</button>
        </form>
    );
  }
}

export default TechList;