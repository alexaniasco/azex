import { useState, useEffect } from "react";

import "./App.css";
import { Planes } from "./Planes";
import { Servicios } from "./Servicios";
import { ServiciosDos } from "./ServiciosDos";
import { Futer } from "./Futer";
import { Porque } from "./Porque";

function App() {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const delay = 200; // Retardo entre cada letra (en milisegundos)
  const fullText = "Emprende en el lugar correcto.";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }, delay);
    } else {
      // Reiniciar el proceso de escritura
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, delay * fullText.length);
    }
  }, [index, text]);

  const [navbarColor, setNavbarColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [sombra, setSombra] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setNavbarColor("#ffffff");
        setTextColor("black");
        setSombra(
          " 0px 2px 4px rgba(0, 0, 0, 0.2)"
        ); /* Cambia a tu color deseado */
      } else {
        setNavbarColor("transparent");
        setTextColor("white");
        setSombra(""); /* Vuelve al color de fondo inicial */
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallax = (e) => {
    document.querySelectorAll(".objet").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 300;
      var y = (e.clientY * moving_value) / 250;
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  };
  document.addEventListener("mousemove", parallax);

  return (
    <div className="total">
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
            Contacto
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="titulo">
          <h1>Creando la nueva generación de desarrollo web.</h1>
          {text !== "" ? <p className="maquina">{text}</p> : <p> </p>}
        </div>

        <div className="img_landing">
          <img src="/img1.png" className="objet" data-value="-2" alt="" />
          <img src="/img2.png" className="objet" data-value="6" alt="" />
          <img src="/img3.png" className="objet" data-value="4" alt="" />
          <img src="/img4.png" className="objet" data-value="-6" alt="" />
          <img src="/img5.png" className="objet" data-value="8" alt="" />
          <img src="/img6.png" className="objet" data-value="-4" alt="" />
          <img src="/img7.png" className="objet cere" data-value="5" alt="" />
        </div>
      </div>
      <Planes></Planes>
      <ServiciosDos></ServiciosDos>
      <Porque></Porque>
       <Futer></Futer>

    </div>
  );
}

export default App;
