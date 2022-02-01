import { useState } from 'react';
import './app.css';

export default function App() {

  const [peso, setPeso] = useState(''); // Armazena o peso digitado no input
  const [altura, setAltura] = useState(''); // Armazena a altura digitada no input
  const [mensagem, setMensagem] = useState(''); // Armazena a mensagem declarada no IMC

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      document.getElementById('msg').style.color = '#dc3545';
      document.getElementById('msg').style.border = '1px solid';
      setMensagem('Você está abaixo do peso! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      document.getElementById('msg').style.color = '#198754';
      document.getElementById('msg').style.border = '1px solid';
      setMensagem('Peso Ideal! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      document.getElementById('msg').style.color = '#ffc107';
      document.getElementById('msg').style.border = '1px solid';
      setMensagem('Você está levemente acima do peso! Seu IMC é: ' + imc.toFixed(2));
    }else if(imc > 34.9){
      document.getElementById('msg').style.color = '#dc3545';
      document.getElementById('msg').style.border = '1px solid';
      setMensagem('Cuidado, risco de obesidade! Seu IMC é: ' + imc.toFixed(2));
    }
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC?</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso (kg)"
          value={peso}
          onChange={ (e) => setPeso(e.target.value) }
        />

        <input 
          type="text"
          placeholder="Altura (cm)"
          value={altura}
          onChange={ (e) => setAltura(e.target.value) }
        />

        <button onClick={calcularIMC}>Calcular</button>
      </div>

      <h3 id="msg">{mensagem}</h3>
    </div>
  );
}