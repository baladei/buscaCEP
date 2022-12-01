import { FiSearch } from 'react-icons/fi'
import './styles/styles.css'

function App() {
  
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        
        <input
        type="text"
        placeholder="Digite o CEP"
        />

        <button className='searchButton'>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 04349280</h2>

        <span>Rua das Aningas</span>
        <span>Complemento: não tem</span>
        <span>Jardim Oriental</span>
        <span>São Paulo - SP</span>

      </main>

    </div>
  );
}

export default App