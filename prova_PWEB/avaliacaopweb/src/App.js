
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // CRIAR UM ESTADO
  const [personagens, setPersonagens] = useState([]);
  
  //FUNÇAO DE INICIALIZACAO
  useEffect(
    ()=>{
      const listaDePersonagens = async()=>{
        try{
        
          const resposta = await axios.get("https://api.disneyapi.dev/character");
          setPersonagens(resposta.data.data);
        }catch(error){
          console.log(error);
        }
      }
      listaDePersonagens();
  }, []

  );

  return (
    <>
    <h1>API DA DISNEY</h1>
    {
      personagens.map((objeto)=> (
        <main>
  <div>
<li key={objeto.name}>
          <h2 >{objeto.name}</h2>
          <h3>{objeto._id}</h3>
          <img className='img' src={objeto.imageUrl} />
          < a href={objeto.url}></a>
          </li>
        </div>
        </main>
      
          
      ))}
    </>
  )
}

export default App;