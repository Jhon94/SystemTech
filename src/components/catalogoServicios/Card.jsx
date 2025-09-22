import React from 'react'
import '../../styles/catalogoServicios/card.css'

export const Card = ({imgService, nameService}) => {
    return (
        <>
            <div className="serviceCard">
                <img src={imgService} alt={nameService} />
                <div className="serviceInfo">
                    <h2>{nameService}</h2>
                    <p>$ 3.000.000</p>
                </div>
            </div>

        </>
    )
}
