import { useState, useEffect,useRef } from "react";

import "./App.css";
import { Planes } from "./Planes";
import { Servicios } from "./Servicios";
import { ServiciosDos } from "./ServiciosDos";
import { Futer } from "./Futer";
import { Porque } from "./Porque";
import { Preguntas } from "./Preguntas";
import { Banner } from "./Banner";
import { Element, scroller } from "react-scroll";

function App() {



  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;

    if (e.deltaY > 0 && scrollLeft + containerWidth < scrollWidth) {
      container.scrollTo({
        duration:5000,
        left: scrollLeft + containerWidth,
        behavior: 'smooth',
      });
    } else if (e.deltaY < 0 && scrollLeft > 0) {
      container.scrollTo({
        left: scrollLeft - containerWidth,
        duration:5000,
        behavior: 'smooth',
      });
    }
  };
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const delay = 200; // Retardo entre cada letra (en milisegundos)
  const fullText = "En tu propia pagina Web.";

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

  // const [navbarColor, setNavbarColor] = useState("transparent");
  // const [textColor, setTextColor] = useState("white");
  // const [sombra, setSombra] = useState("");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTop > 0) {
  //       setNavbarColor("transparent");
  //       setTextColor("black");
  //       setSombra(
  //         " 0px 2px 4px rgba(0, 0, 0, 0.2)"
  //       ); /* Cambia a tu color deseado */
  //     } else {
  //       setNavbarColor("transparent");
  //       setTextColor("white");
  //       setSombra(""); /* Vuelve al color de fondo inicial */
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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
    <div  className="total"     ref={containerRef} style={{overflowX: 'scroll', scrollSnapType: 'x mandatory' }} onWheel={handleScroll}>
      {/* <nav style={{ backgroundColor: navbarColor, boxShadow: sombra, backdropFilter: 'blur(10px)' }}>
        <div className="logo" style={{ color: textColor }}>
        
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
      </nav> */}
    
      <Element id="div1" name="section1" style={{ scrollSnapAlign: 'start' }}>
        <div  className="containerr">
          <div className="titulo">
            <h1>Le damos vida<br />a tus proyectos</h1>
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
      </Element>
      <Element id="div2" name="section2" style={{ scrollSnapAlign: 'start' }}>
        <Planes ></Planes>
      </Element>

      <Element id="div3" style={{ scrollSnapAlign: 'start' }}><ServiciosDos></ServiciosDos></Element>
      <Element id="div5" style={{ scrollSnapAlign: 'start' }}>  <Porque></Porque></Element>
      <Element id="div4" style={{ scrollSnapAlign: 'start' }}> <Preguntas></Preguntas></Element>
 
      <Element id="div7" style={{ scrollSnapAlign: 'start' }}>   <Futer></Futer></Element>
      <a href="#"><img className="logowpp" src="/wpp.png"></img></a>
    </div>
  );
}

export default App;
