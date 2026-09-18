import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro'
import './FormularioLivro.css'

function FormularioLivro() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [ano, setAno] = useState('')
    const [genero, setGenero] = useState('')

    const [livros, setLivros] = useState([])

  function enviarRespostas(evento) {
    evento.preventDefault()

    const novoLivro = { titulo, autor, ano, genero }
    setLivros([...livros, novoLivro])

    setTitulo('')
    setAutor('')
    setAno('')
    setGenero('')
  }

  return (
    <section className="formulario-aluno">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={enviarRespostas}>
        <CampoTexto
          label="Título"
          name="titulo"
          value={titulo}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex: O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          type="name"
          value={autor}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Ex: J.R.R. Tolkien"
        />

        <CampoTexto
          label="Ano de Publicação"
          name="ano"
          value={ano}
          onChange={(evento) => setCpf(evento.target.value)}
          placeholder="1954"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          value={genero}
          onChange={(evento) => setCidade(evento.target.value)}
          placeholder="Ex: Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Alunos cadastrados</h2>

        {alunos.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}

        <ul>
          {alunos.map((aluno) => (
            <Aluno key={aluno.cpf} aluno={aluno} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioLivro
