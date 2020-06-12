import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState(['NodeJS', 'ReactJs']);
  const [newtch, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newtch]);
    setNewTech('');
  }

  function handleChange(e) {
    setNewTech(e.target.value);
  }

  return (
    <>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input type="text" onChange={handleChange} value={newtch} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
