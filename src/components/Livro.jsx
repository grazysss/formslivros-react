function Livro({ livro }) {
    return (
        <li className="livro">
            <p><b>{livro.titulo}</b> - {livro.autor} ({livro.ano}) | Gênero: {livro.genero}</p>
        </li>
    )
}

export default Livro