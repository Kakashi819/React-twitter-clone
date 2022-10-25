import React from 'react';
import './SidebarOption.css';


export default function SidebarOptioin({text,Icon,active}) {
  return (
    <div className={`sidebarOption  ${active && "sidebarOption--active"}`}>
      <Icon/>
      <h2>{text}</h2>
    </div>
  );
};
