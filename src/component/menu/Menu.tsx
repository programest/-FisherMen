
import React, { useState, useEffect, useCallback, useMemo, useRef, FC } from 'react';

import './Menu.css'
import ComponentsContent from './UX/ComponentsContent/Components';
import InventoryContent from './UX/InventoryContent/Inventory'
import FishingRodsContent from './UX/FishingRodsContent/FishingRods'
import EquipmentContent from './UX/EquipmentContent/Equipment'
interface MenuItem {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
        modal: boolean
}
const Menu: FC<MenuItem> = ({setModal, modal}) => {
    const tabs = ['Инвентарь', 'Удочки', 'Компоненты', 'Снаряжение'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
  
    // Функция для изменения активного таба
    const handleTabClick = (tab: any) => {
      setActiveTab(tab);
    };
  
    return (
        <>
        {modal ?
            <div className="inventory__block">
                <div className="inventory__content">
                {/* <button className="inventory-close" > onClick={onClose}
                  &times;
                </button> */}
            
                <div className="menu__tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`menu__tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              <h2 className="menu__item-text">{tab}</h2>
            </div>
          ))}
                </div>
                <div className="menu__content">
                  {/* Здесь в зависимости от activeTab можно отображать разное содержимое */}
                  {activeTab === 'Инвентарь' && <InventoryContent setModal={setModal} modal={modal} />}
                  {activeTab === 'Удочки' && <FishingRodsContent />}
                  {activeTab === 'Компоненты' && <ComponentsContent />}
                  {activeTab === 'Снаряжение' && <EquipmentContent />}
                </div>
                </div> 
          
        }: <></>
      </>

    );
}

export default Menu;
