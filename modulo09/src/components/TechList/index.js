import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs,setTechs] = useState([]);
  const [newtech,setNewTech] = useState('');

  useEffect( () => {
      const techList = localStorage.getItem('techs');
      if(techList) {
        setTechs(JSON.parse(techList));
      }    
  }, [])

  useEffect( () => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  function handleAddTech() {
    setTechs([...techs,newtech]);
    setNewTech('');
  }

  return (
    <div>
      <ul data-testid="tech-list">{
        techs.map( tech => ( <li key={tech}>{tech}</li> ))
      }</ul>
      <form onSubmit={handleAddTech} data-testid="tech-form">
        <label htmlFor="tech">Tech</label>
        <input type="text" id="tech" value={newtech} onChange={e => setNewTech(e.target.value)}/>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
