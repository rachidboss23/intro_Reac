// Grilla.jsx
import React from 'react';
import MyCard from "./MyCard";

const Grilla = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <MyCard
                        cardImg='https://placedog.net/400/221?id=92'
                        cardTitle='Max'
                        cardText='¡Conoce a Bucky! Este pequeño amigo está lleno de energía y ansioso por jugar. ¡Dale a Bucky el hogar que se merece hoy mismo!'
                        badgeColor='primary'
                        badgeText='mestizo'
                    />
                </div>
                <div className="col-md-4">
                    <MyCard
                        cardImg='https://placedog.net/400/261?id=58'
                        cardTitle='Luna'
                        cardText='¡Conoce a Luna! Esta adorable bolita de pelo busca un hogar donde recibir amor. ¡Adóptala hoy y haz realidad su sueño!'
                        badgeColor='secondary'
                        badgeText='mestizo'
                    />
                </div>
                <div className="col-md-4">
                    <MyCard
                        cardImg='https://placedog.net/400/382?id=136'
                        cardTitle='Alma'
                        cardText='¡Conoce a Max! Este travieso perrito está lleno de vida y busca un compañero para sus travesuras. ¡Hazlo feliz hoy!'
                        badgeColor='success'
                        badgeText='Milo'
                    />
                </div>
                <div className="col-md-4">
                    <MyCard
                        cardImg='https://placedog.net/400/213?id=13'
                        cardTitle=''
                        cardText='¡Conoce a Milo! Este tierno perrito espera con ansias encontrar un hogar lleno de amor. ¡Hazlo parte de tu familia hoy mismo!'
                        badgeColor='danger'
                        badgeText='cocker spaniel'
                    />
                </div>
            </div>
        </div>
    );
};

export default Grilla;
