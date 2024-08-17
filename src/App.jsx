import './App.css'
import './Naveg.css'
import './Claterais.css'
import './Cprincipal.css'

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
        <h1 className='titulonaveg'>Escola</h1>
        <div className='containermenunaveg'>
        <div className='menunaveg'>
        <h1 className='titulomenunaveg'>Menu principal</h1>
        <h1>Dashboard</h1>
        <h1>Turmas</h1>
        <h1>Cursos</h1>
        <h1>Materias</h1>
        <h1>Incrições</h1>
        </div>
        <div className='menunavegconfig'>
        <h1 className='titulomenunaveg'> Configurações</h1>
        <h1>Perfil</h1>
        <h1>Configurações</h1>
        <h1>Logout</h1>
        </div>
        </div>
      </div>
      <div className='contanerdash'>
        <div className='dashnaveg'>
          <h1>Naveção</h1>
        </div>
        <div className='dashconteudo'>
        <div className='listameterias'>
          <h1>Turma 27</h1>
        <div className='containermaterias'>
         <div className='materias'>
          <h1>Matematica</h1>
         </div>
         <div className='materias'>
          <h1>Biologia</h1>
         </div>
         <div className='materias'>
          <h1>Fisica</h1>
         </div>
         <div className='materias'>
          <h1>Historia</h1>
         </div>
        </div></div>
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
      </div>
      <div className='containerstatic'>
        <h1 className='titulostatic'>Progresso</h1>
      </div>
    </div>
  )
}

export default App
