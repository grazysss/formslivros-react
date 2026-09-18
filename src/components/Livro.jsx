function Livro(props) {
    return (
        <li className="livro">
            <p><b>{props.livro.titulo}</b> - {props.livro.autor} ({props.livro.ano}) | Gênero: {props.livro.genero}</p>
        </li>
    )
}

export default Livro