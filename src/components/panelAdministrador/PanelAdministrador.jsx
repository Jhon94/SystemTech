import React from 'react'
import '../../styles/panelAdministrador/panelAdministrador.css';
import Header from '../Header'
import { Link } from 'react-router-dom';
import { MenuAdmin } from './MenuAdmin';

export const PanelAdministrador = () => {
    return (
        <>
            <Header />
            <div className='containerPanelAdmin'>
                <div className='panelAdmin'>
                    <MenuAdmin />
                    <div className='infoAdmin'>
                        <div className='infoAdminText'>
                            <h1>Panel Administrativo</h1>
                            <p>
                                Bienvenido al panel de administración de
                                servicios de Zen Tech.
                                Aquí tienes el control total
                                sobre la gestión de cada
                                uno de los servicios que ofreces.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
