import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTech] = useState(['NodeJS', 'ReactJs']);
  const [newtch, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...techs, newtch]);
    setNewTech('');
  }, [newtch, techs]);

  function handleChange(e) {
    setNewTech(e.target.value);
  }

  useEffect(() => {
    const localTechs = localStorage.getItem('techs');

    if (localTechs) {
      setTech(JSON.parse(localTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <strong>Quantidade de tecnologias: {techSize} </strong> <br />
      <input type="text" onChange={handleChange} value={newtch} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
