import React from 'react'

export const ServiciosDos = () => {
    return (
        <div className='serviciosDos'>
            <div className='serviciosDosHead'>
                <div className='serviciosDosText'>
                    <p style={{ fontSize: "52px", textAlign: "start", fontWeight: "700", margin: "0" }}>Apologia del exito en la  Web</p>
                    <p style={{ marginTop: "20px" }}>Somos los únicos desarrolladores comprometidos en hacer que la web sea accesible para todos los usuarios, sin importar su presupuesto.</p>
                    <button style={{ borderRadius: "2rem", backgroundColor: "#FA72A8", color: "white", marginTop: "70px" }}>Comienza ahora</button>
                </div>
                <div className='servidiosDosImagenCont'>

                    <img className='serviciosDosImagen' src="/pc.png" alt="" />
                </div>
            </div>
         
        </div>
    )
}
