import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {
    default: 'Prop padrão',
  };

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
            <h5>{this.props.default}</h5>
            <ul>
              {
                this.state.techs.map( (tech,index) => (
                    <TechItem 
                      key={index} 
                      tech={tech} 
                      index={index} 
                      onDelete={() => this.handleDelete(index)} 
                    />
                  ) 
                )
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