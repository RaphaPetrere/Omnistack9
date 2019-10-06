import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

export default function Dashboard(){

    const [spots, setSpots] = useState([]); //visto q ele retorna um array
    //ele recebe 2 param, uma função e um array de dependencias, quando as variaveis sofrerem alteração
    //essa função será executada
    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers : { user_id }
            });

            setSpots(response.data);
        }

        loadSpots();
    }, []); 
    return (
        //isso aqui é um fragment
    <>
        <ul className="spot-list">
            {/* usamos a estrutura map para percorrer o array 
                o React precisa de uma key para achar + facil*/}
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
        </ul>
        <Link to="/new">
            <button className="btn">Cadastrar novo Spot</button>
        </Link>
    </>
    )
}