import { BlurFilter, Point } from 'pixi.js';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import PlayerIMG from '../../img/Player.png';

export const Player = () => {
  const [position, setPosition] = useState(new Point(0, 0)); // Используем Point для задания начальной позиции
  const [isJumping, setIsJumping] = useState(false);
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  const handleKeyPress = useCallback((e) => {
    console.log(position);
    
    if (e.key === 'ArrowRight') {
      setPosition((prevPosition) => new Point(prevPosition.x + 10, prevPosition.y));
    } else if (e.key === 'ArrowLeft') {
      setPosition((prevPosition) => new Point(prevPosition.x - 10, prevPosition.y));
    } else if (e.key === 'ArrowUp') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y - 10));
    } else if (e.key === 'ArrowDown') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 10));
    } else if (e.key === ' ') {
      if (!isJumping) {
        setIsJumping(true);
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y - 100));
      }
    } else if (e.key === 'Shift') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 5));
    }
  }, [position, isJumping]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    let jumpInterval;

    if (isJumping) {
      jumpInterval = setInterval(() => {
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 2));
      }, 16);

      setTimeout(() => {
        setIsJumping(false);
      }, 1000);
    }

    return () => {
      clearInterval(jumpInterval);
    };
  }, [isJumping]);

  return (
    <Stage width={1920} height={1250}  style={{
      position: 'absolute',
      top: -67,
      backgroundColor: 'transparent '
    }} >
      <Sprite
        image={PlayerIMG}
        x={20}
        position={position} // Используем объект Point для установки позиции
        y={220}
        anchor={{ x: 0.1, y: 2 }}
      />
    </Stage>
  );
};
