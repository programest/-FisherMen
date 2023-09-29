
import { BlurFilter, Point } from 'pixi.js';
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import './Game.css'
// import Rod from './rod/Rod';
import Calculation from './calculation/Calculation';
import Menu from './menu/Menu';
import  Player  from './player/Player';
import Audio from './audio/Audio';
import BarrierIMG from '../img/фы.png'
import Earth from './earth/Earth';
import BC from '../img/background.png'
import Water from './water/Water';
function Game() {
    const refWater = useRef(null);
    const [modal , setModal] = useState(false)
  return (
    <div className="game__container">
       <Stage  height={1080}  width={1920}     >
        
       <Sprite
        image={BC}
        x={0}
        y={0}
        width={1920}
        height={1080}
        anchor={{ x: 0, y: 0 }}
      />
      <Container position={[0, 600]}>
            <Water refWater={refWater} />
            <Earth />
            <Player refWater={refWater} modal={modal} />
           
            {/* <Rod /> */}
      </Container>
    </Stage>
    <Audio />
    <Menu setModal={setModal} modal={modal}/>
  
    </div>
  );
}

export default Game;
