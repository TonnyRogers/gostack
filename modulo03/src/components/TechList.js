import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  static defaultProps = {
    default: 'Prop padrão',
  };

  state = {
    newTech: '',
    techs: []
  };

  /**
   * Cliclo de vida dos componentes
   * 
   * Executado assim que o componente aparece em tela
   * componentDidMount()
   * 
   * Executado assim que houver alteração no state ou props
   * - prevPros & prevState: estado e prop anteriores p/ comparação
   * componentDidUpdate(prevProps,prevState)
   * 
   * Executado quando o componente deixa de existir
   * - ideal para remover eventos relacionados ao componente
   *   quando ele ainda existia
   * componentWillUnmount()
   * 
   */

   componentDidMount(){
     const techs = localStorage.getItem('techs');

     if(techs){
        this.setState({ techs: JSON.parse(techs)});
     }
   }

   componentDidUpdate(_,prevState){
     if(prevState.techs !== this.state.techs){
       localStorage.setItem('techs', JSON.stringify(this.state.techs));
     }
   }

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