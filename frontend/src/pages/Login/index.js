import React, { useState } from 'react';
import api from '../../services/api';


export default function Login({ history }){ //esse history é utilizado para a navegação
    const [email, setEmail] = useState(''); //retorna um vetor em 2 valores (vai retornar o estado em tempo real)
    //a função setEmail serve para atualizar o valor da variavel email
      async function handleSubmit(event){
        event.preventDefault();
        //assim o form n atualiza para aparecer o hello world
        const response = await api.post('/sessions', { email });
    
        const { _id } = response.data; //aqui vc vai pegar só o id da resposta
        // console.log(response); da os mesmo resultado doq apareceria no Insomnia
    
        localStorage.setItem('user', _id); //é o banco de dados do nosso navegador
        //agr estamos adicionando o react-router-dom para criar o sistema de rotas no react
        history.push('/dashboard'); //assim ele é redirecionado para a dashboard
      }

    return ( //criamos a tag vazia pq o React precisa de uma coisa por fora do HTML e uma Div podia zoar a estilização
        <> 
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail" value = {email}
          onChange={event => setEmail(event.target.value)}></input>
          <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}