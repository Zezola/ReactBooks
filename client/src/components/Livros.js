import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Livros extends React.Component {
    state = {
        livros: []
    }
    
    componentDidMount() {
        axios.get(`http://localhost:5000/livros/`)
            .then(res => {
                const livros = res.data;
                this.setState({livros});
            })
    }

    renderTableData() {
        return this.state.livros.map((livro, livro_id) => {
            const {id, titulo, autor} = livro
            return (
              
                    <tr key={livro_id}>
                        <td>{id}</td>
                        <td><Link to={`/livros/editar/${id}`}>{titulo}</Link></td>
                        <td>{autor}</td>
                    </tr>
                
                
            )
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}                                     
                </tbody>
            </table>
        )
    }
}
