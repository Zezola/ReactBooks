import React from 'react';
import axios from 'axios';

export default class EditarLivro extends React.Component {

    constructor(props)
    {
        super(props)

        this.state = {
            old_titulo: '',
            old_autor: '',
            titulo: '',
            autor: ''
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params
        axios.get(`http://localhost:5000/livros/${id}`)
            .then(res => {
                this.setState({
                    old_titulo: res.data.titulo,
                    old_autor: res.data.autor
                })
            })
    }

    handleTituloChange = (e) => {
        console.log(this.state.titulo)
        this.setState({
            titulo: e.target.value
          
        })
    }

    handleAutorChange = (e) => {
        this.setState({
            autor:   e.target.value
        })
    }

    handleDelete = (e) => {
        e.preventDefault()
        const {id} = this.props.match.params
        axios.delete(`http://localhost:5000/livros/deletar/${id}`)
        .then(() => {
            alert("Livro deletado")
        })
        .then(() => {
            this.props.history.push('/')
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {id} = this.props.match.params
        axios.patch(`http://localhost:5000/livros/editar/${id}`, {
            titulo: this.state.titulo,
            autor: this.state.autor
        })
        .then(() => {
            alert("Livro modificado")
        })
        .then(() => {
            this.props.history.push('/')
        })
    }



    render () {
        return (
            <div>
                <div>
                    <h2>Modificar livro</h2>
                </div>
                 <form onSubmit = {this.handleSubmit}>
                    <div className="mt-2 ml-2 mr-2 mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input
                     type="text"
                     className="form-control"
                     required
                     name = "titulo"
                     value={this.state.titulo}
                     placeholder={this.state.old_titulo}
                     onChange={this.handleTituloChange}></input>
                    </div>
                    <div class="mt-2 ml-2 mr-2 mb-3">
                    <label htmlFor="autor" className="form-label">Autor</label>
                    <input
                    type="text"
                    className="form-control"
                    required
                    name = "autor"
                    placeholder={this.state.old_autor}
                    value={this.state.autor}
                    onChange={this.handleAutorChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary ml-2">Enviar</button>
                    <button onClick={this.handleDelete}type="submit" className="btn btn-danger ml-2">Deletar</button>

                </form>
            </div>
           
        )
        
    }
}