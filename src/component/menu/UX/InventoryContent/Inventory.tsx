
import { BlurFilter, Point } from 'pixi.js';
import React, {FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import './Inventory.css'
import PlayerIMG from '../../../../img/Player.png'
import Fish from '../../../../img/fish1.png'
import Fish1 from '../../../../img/fish.jpg'
interface InventoryItem{
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    modal: boolean
}
const Inventory: FC<InventoryItem> = ({ setModal, modal }) => {
    
    const handleKeyPress = useCallback((e: KeyboardEvent ) => {

        if (e.key === 'Tab'){
            setModal(prev => !prev)
            console.log('2222222')
        }
    }, [])
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [handleKeyPress]);

      const onClose = () =>{
        setModal(false)
      }
      const data = {
        'inventory': [
            {
                'img': Fish,
                'num': 2,
            },
            {
                'img': Fish,
                'num': 2,
            },
            {
                'img': Fish1,
                'num': 3,
            },{
                'img': Fish,
                'num': 2,
            },
           
           
        ],
        'player' : [
            {
                'rod': {
                    'img': '../'
                    }, 
                'backpack': 
                    {
                        'img': '../'
                    }
                ,
                'hands': 
                    {
                        'img': '../'
                    }
                ,
                'head': 
                    {
                        'img': '../'
                    }
                ,
                'body':
                    {
                        'img': '../'
                    }
                ,
                'legs': 
                    {
                        'img': '../'
                    }
                ,
            }
           
        ]
      }
      const [activeCells, setActiveCells] = useState<number[]>([])
      const allCells = new Array(21).fill(null);
      const CellSellect = (index: number) => {
        if (activeCells.includes(index)) {
          setActiveCells(activeCells.filter((i) => i !== index));
        } else {
          setActiveCells([...activeCells, index]);
        }
      };
      const Sell = () => {
            
      }
  return (
    <div className="container">

                <button className="inventory-close" onClick={onClose}>
                  &times;
                </button>
      
                <div className="inventory-wrap">
                <div className="inventory">
                    <h1>Инвентарь</h1>
                    <div className="column__cell">
                    {allCells.map((cell, index) => (
                <div className="" key={index}>
                {data.inventory[index] ? (
                <>
                    <div
                    className={`cell ${activeCells.includes(index) ? 'active' : ''}`}
                    key={index}
                    onClick={() => CellSellect(index)}
                    >
                    {activeCells.includes(index) && (
                        <div className="active-checkmark"></div>
                    )}
                    <img src={data.inventory[index].img} alt="" className="cell__img" />
                    <span className='cell__num'>{data.inventory[index].num}</span>
                    </div>
                </>
                ) : (
                <div className="cell -disabled" key={Date.now()}></div>
                )}
                </div>
))}

                    </div>
                    <div className="cell__buttons">
                        <button className='cell-btn button-sell' onClick={Sell}><p className='cell-btn-text'>Продать</p></button>
                        <button className='cell-btn button-dell'><p className='cell-btn-text'>Выкинуть</p></button>
                    </div>


                </div>
                <div className="avatar">
                    <div className="">
                        <div className="avatar__inventory">
                        {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.rod.img} alt="" className='player__img'  />
                            </div>
                        ))}
                         {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.backpack.img} alt="" className='player__img'  />
                            </div>
                        ))}
                        {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.hands.img} alt="" className='player__img'  />
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="avatar__player">
                        <img src={PlayerIMG} alt=""  className="avatar__img"/>
                    </div>
                    <div className="">
                        <div className="avatar__inventory">
                        {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.head.img} alt="" className='player__img'  />
                            </div>
                        ))}
                        {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.body.img} alt="" className='player__img'  />
                            </div>
                        ))}
                        {data.player.map((cell, index) => (
                            <div className="avatar-cell" key={index}>
                                <img src={cell.legs.img} alt="" className='player__img'  />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                </div>




               
    </div>
  );
}

export default Inventory;
