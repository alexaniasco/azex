import React from 'react'

export const Nav = () => {
  return (
    <nav style={{ backgroundColor: navbarColor, boxShadow: sombra }}>
    <div className="logo" style={{ color: textColor }}>
     <img src="../public/logo.png" alt="" />
    </div>
    <div className="menu" style={{ color: textColor }}>
      <li>Cursos</li>
      <li>Planes</li>
      <li>Socios</li>
      <li>About</li>
      <li>Carrier</li>
      <li>Contacto</li>
      <button
        style={{ color: textColor, border: `1px solid ${textColor}` }}
      >
        Ingresar
      </button>
    </div>
  </nav>
  )
}
