//aqui é a criação de um novo spotimport React from 'react';
import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

export default function New({ history }){
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    //useMemo fica observando o valor de uma variavel e toda vez q ela mudar, ele gera um outro valor pra essa variavel
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },
        [thumbnail] //funciona igual ao useEffect
    );

    async function handleSubmit(event){
        event.preventDefault();
        
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);
        
        await api.post('/spots', data, {
            headers : { user_id }
        });

        history.push('/dashboard');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label 
            id="thumbnail" 
            style={{backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
            >
                {/* visto que é um vetor, vc pega a posição 0 q é a imagem q o usuario selecionou */}
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} /> 
                <img src={camera} alt="Select img" />
            </label>
            <label htmlFor="company">EMPRESA *</label>
            <input 
            id="company"
            placeholder="Sua empresa incrível"
            value={company}
            onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
            <input 
            id="techs"
            placeholder="Quais técnologias usam?"
            value={techs}
            onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input 
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
        )
}