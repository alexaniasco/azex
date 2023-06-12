import React from 'react'

export const Porque = () => {
    return (
        <div className='porque_main'>
            <div>
                <h1 className='porque_title' style={{ fontSize: "52px", margin: "0" }}>Tener tu sitio en la web</h1>
                <h4 style={{ fontSize: "22px", margin: "0px", fontWeight: "400" }}>!= tener exito en la web</h4>
            </div>

            <div className='porque_flex'>
                <div className='porque_text'>
                    <p>
                        Por eso, diseñamos servicios que optimizaran  los puntos clave para tu pagina.
                        Destaca entre la competencia, aumenta tu visibilidad y brinda una experiencia excepcional a tus usuarios.
                    </p>
                    <p>¿Listo para destacar?</p>
                    <button>Empieza el cambio!</button>
                  
                </div>
                <div className='porque_grid'>
                    <div className='porque_card'>
                        <h4>Redes y planeamiento</h4>
                        <p> Maximiza tu presencia en línea y convierte visitantes en clientes leales con una estrategia acorde a tu publico.</p>
                        
                        <img src="/p1.png" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Posicionamiento en Google
                        </h4>
                        <p>Aumenta la visibilidad de tu página web. Destaca en los resultados de búsqueda y atrae a más clientes.</p>
                        <img src="/p2.png" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Mantenimiento y optimizacion.
                        </h4>
                        <p>Las tecnologias avanzan constantemente. No te quedes atras! Mejora su rendimiento, velocidad y seguridad.</p>
                        <img src="/p3.png" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Adaptacion a todo dispositivo
                        </h4>
                        <p>Haz que tu página web se adapte a todos los dispositivos. Brinda una experiencia perfecta a tus usuarios en computadoras, tablets y smartphones.</p>
                        <img src="/p4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
