function Livro({ livro }) {
    return (
        <li className="livro">
            <p><strong>{livro.nome}</strong> - {livro.autor} ({livro.ano}) | Gênero: {livro.genero}</p>
        </li>
    )
}

export default Livro