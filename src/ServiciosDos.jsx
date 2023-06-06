import React from 'react'

export const ServiciosDos = () => {
    return (
        <div className='serviciosDos'>
            <div className='serviciosDosHead'>
                <div className='serviciosDosText'>
                    <p style={{ fontSize: "52px", textAlign: "start", fontWeight: "700", margin: "0" }}>Apologia del exito en la  Web</p>
                    <p style={{ marginTop: "20px" }}>Diseñamos servicios para optimizar tu página al máximo enfatizando en los detalles.</p>
                    <button style={{ borderRadius: "2rem", backgroundColor: "#FA72A8", color: "white", marginTop: "70px" }}>Comienza ahora</button>
                </div>
                <div className='servidiosDosImagenCont'>

                    <img className='serviciosDosImagen' src="/pc.png" alt="" />
                </div>
            </div>
            <div className='serviciosDosAbajo'>
                <p>Digital Marketing</p>
                <p>Adaptacion a todo dispositivo</p>
                <p>Posicionamiento en motores de busqueda</p>
                <p>Mantenimiento y optimizacion.</p>
            </div>
        </div>
    )
}
