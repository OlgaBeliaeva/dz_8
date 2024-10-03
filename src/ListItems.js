import React, { useState, useEffect } from 'react';
const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  // useEffect(() => {
  //   console.log('Компонент ListItems обновлен');
  // }, [items]);

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, [items]); // Теперь компонент не будет перерисовываться при каждом изменении массива items

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Введите элемент"
      />
      <button onClick={addItem}>Добавить элемент</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;