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

    const novoLivro = { id: Date.now(), titulo, autor, ano, genero }
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
          type="text"
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="Ex: O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          type="text"
          value={autor}
          onChange={(evento) => setAutor(evento.target.value)}
          placeholder="Ex: J.R.R. Tolkien"
        />

        <CampoTexto
          label="Ano de Publicação"
          name="ano"
          value={ano}
          onChange={(evento) => setAno(evento.target.value)}
          placeholder="1954"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          value={genero}
          onChange={(evento) => setGenero(evento.target.value)}
          placeholder="Ex: Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <br />

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 && <p>Nenhum livro cadastrado ainda.</p>}

        <ul>
          {livros.map((livro) => (
            <Livro key={livro.id} livro={livro} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioLivro
