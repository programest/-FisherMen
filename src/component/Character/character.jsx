import React, { useState, useEffect, useCallback } from 'react';
import './character.css';

function Character() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
 
  const handleKeyPress = useCallback((e) => {
    // Обработка нажатий клавиш для движения персонажа
    if (e.key === 'ArrowRight') {
      setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
    } else if (e.key === 'ArrowLeft') {
      setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
    }
  }, []);

  useEffect(() => {
    // Запускаем анимацию при монтировании компонента
    

    // Добавляем слушатель событий для клавиш
    window.addEventListener('keydown', handleKeyPress);

    // Очищаем слушатель событий при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        width: '50px',
        height: '50px',
        background: 'red',
      }}
    ></div>
  );
}

export default Character;
