import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// ...

export default function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/create">
        Nuevo Ingreso
      </a>
      <a className="menu-item" href="/reparaciones">
        Reparaciones
      </a>
      <a className="menu-item" href="/products">
        Productos
      </a>
    </Menu>
  );
};