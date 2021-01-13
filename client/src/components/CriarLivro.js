import axios from 'axios';
import React from 'react';
import {Redirect} from 'react-router-dom';


export default class CriarLivro extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            titulo: '',
            autor: ''
        }
    }

    handleTituloChange = (e) => {
        this.setState({
            titulo: e.target.value
        })
    }

    handleAutorChange = (e) => {
        this.setState({
            autor: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/livros/store', {
            titulo: this.state.titulo,
            autor: this.state.autor
        }).then(() => alert("Livro inserido"))
          .then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        const { redirect } = this.state; 

        if (redirect) {
            return <Redirect to="/"></Redirect>
        } else {
            return (
                <form onSubmit = {this.handleSubmit}>
                    <div className="mt-2 ml-2 mr-2 mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input
                     type="text"
                     className="form-control"
                     required
                     name = "titulo"
                     value={this.state.titulo}
                     onChange={this.handleTituloChange}></input>
                    </div>
                    <div class="mt-2 ml-2 mr-2 mb-3">
                    <label htmlFor="autor" className="form-label">Autor</label>
                    <input
                    type="text"
                    className="form-control"
                    required
                    name = "autor"
                    value={this.state.autor}
                    onChange={this.handleAutorChange}></input>
                    </div>
                    <button type="submit" className="btn btn-primary ml-2">Enviar</button>

                </form>
            )
        }
    }

    
}