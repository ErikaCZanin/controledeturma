import './App.css'

const alunos = [
  { foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180', nome: 'Aluno 1' },
  { foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180', nome: 'Aluno 1' },
  { foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180', nome: 'Aluno 1' },
  { foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180', nome: 'Aluno 1' },



]

function App() {
  return (
    <div className='container'>
      <div className='containernaveg'>
        <h1>Menu</h1>
      </div>
      <div className='contanerdash'>
        <div className='listalunos'>
          <h1 className='titulo'>Alunos</h1>
          <div className='alunos-list'>
            {alunos.map((aluno, index) => (
              <div key={index} className='aluno-item'>
                <img src={aluno.foto} alt={aluno.nome} className='aluno-foto' />
                <p className='aluno-nome'>{aluno.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='containerstatic'>
        <h1>Grafico</h1>
      </div>
    </div>
  )
}

export default App
