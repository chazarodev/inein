import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='bg-darkAccent text-backGround flex flex-col md:flex-row text-center'>
                <div className='mx-10 md:my-10 p-4 md:p-10'>
                    <p className='text-xl'>Infraestructura Médica</p>
                </div>
                <div className='mx-10 md:my-10 p-4 md:p-10'>
                    <p>
                        <span className='font-bold'>
                            MTY Moll del Valle:
                        </span>
                        <br />
                        Calz. Del Valle 400, Int. N6 08A, Del Valle, SN. Pedro Garza.NL, México, CP 66220
                        Tel: (81) 2261 4860
                    </p>
                </div>
                <div className='mx-10 md:my-10 p-4 md:p-10'>
                    <p>
                        <span className='font-bold'>
                            CDMX:
                        </span>
                        <br />
                        Yacatas #86 Piso 1B, Narvarte Poniente, Benito Juárez, CDMX, México, CP 03020
                        Tel: (55) 8662 1100
                    </p>
                </div>
                <div className='mx-10 mb-4 md:my-10 p-4 md:p-10'>
                    <p>
                        <span className='font-bold'>
                            Guadalajara:
                        </span>
                        <br />
                        Av. Empresarios 135, Puerta de Hierro, Zapopan Jal., CP 66220
                        Tel: (33) 1292 0041
                    </p>
                </div>
            </div>
            <div className='bg-lightShades text-center py-4 text-backGround text-base md:text-xl font-bold'>
                <p>Copyright © 2022 Infraestructura Médica</p>
            </div>
        </footer>
    )
}

export default Footer