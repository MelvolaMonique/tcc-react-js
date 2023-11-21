import React, { useState } from 'react';

const InfoBar = ({ onInfoChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onInfoChange(e.target.value); // Atualiza a informação no componente pai
  };

  return (
    <div className="info-bar">
      <input
        type="text"
        placeholder="Escreva algo..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InfoBar;
