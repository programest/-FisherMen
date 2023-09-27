import { BlurFilter, Point } from 'pixi.js';
import React, { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { Stage, Container, Sprite, Text, useTick } from '@pixi/react';
import PlayerIMG from '../../img/Player.png';
import FloatIMG from '../../img/float.png';
import RodIMG from '../../img/rod.png';
import { Spring } from '@react-spring/web';
interface PlayerItem{
  refWater: any
}


const Player: FC<PlayerItem> = ({ refWater }) => {
  const [positionFloat, setPositionFloat] = useState(new Point(-40, 20));
  const [positionRod, setPositionRod] = useState(new Point(0, 0));
  const [position, setPosition] = useState(new Point(1000, 240)); // Используем Point для задания начальной позиции
  const [isJumping, setIsJumping] = useState(false);
  let i = 0;


  const handleKeyPress = useCallback((e) => {
    console.log(position);

    if (e.key === 'ArrowRight') {
      setPosition((prevPosition) => new Point(prevPosition.x + 10, prevPosition.y));
    } else if (e.key === 'ArrowLeft'){
      const nextPlayerPosition =((prevPosition) => new Point(prevPosition.x - 10, prevPosition.y)) ;
      if (!isColliding(position, refWater.current)) {
        setPosition(nextPlayerPosition);
      }
    } else if (e.key === 'ArrowUp') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y - 10));
    } else if (e.key === 'ArrowDown') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 10));
    } else if (e.key === ' ') {
      if (!isJumping) {
        setIsJumping(true);
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y - 200));
      }
    } else if (e.key === 'Shift') {
      setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 5));
    }else if (e.key  === '1') {
      FishingAnimation()
    }
  }, [position, isJumping]);
  const isColliding = (point1, point2) => {
    // point1 это Игрок
    // point2 это Вода
    const playerSize = { width: 100, height:100 };
    console.log(point1.x)
    console.log(point2.x)
    return (
      point1.x < point2.x + point2.width &&
      point1.x + playerSize.width > point2.x &&
      point1.y < point2.y +  point2.height &&
      point1.y + playerSize.height > point2.y
    );
  };
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
      }, 10);

      setTimeout(() => {
        setIsJumping(false);
      }, 1000);
    }

    return () => {
      clearInterval(jumpInterval);
    };
  }, [isJumping]);

  const FishingAnimation = () => {
    
   
  }



  
  return (
    <>
      <Sprite
        width={100}
        height={100}
        image={PlayerIMG}
        x={position.x}
        y={position.y}
        anchor={{ x: 0.5, y: 0.5 }}
      /> 
      <Sprite
        width={100}
        height={100}
        image={RodIMG}
        x={position.x + positionRod.x}
        y={position.y + positionRod.y}
        
        anchor={{ x: 0.5, y: 0.5 }}
       />
   
   {/* <Spring from={{ x: 100, y: 20 }} to={{ x: 300, y: 40 }}>
  {(props) => ( */}
    <Sprite
      width={60}
      height={60}
      image={FloatIMG}
      x={position.x+ positionFloat.x} // Обновляем x координату
      y={position.y+ positionFloat.y} // Обновляем y координату
      anchor={{ x: 0.5, y: 0.5 }}
    />
  {/* )} */}
{/* </Spring> */}

</>
  );
};
export default Player
