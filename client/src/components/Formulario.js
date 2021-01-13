import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario ()
{
    return (
        <div>
            <form>
                <div className="mt-2 ml-2 mr-2 mb-3">
                    <label for="titulo" className="form-label">Titulo</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div class="mt-2 ml-2 mr-2 mb-3">
                    <label for="autor" className="form-label">Autor</label>
                    <input type="text" className="form-control"></input>
                </div>
                <button type="submit" className="btn btn-primary ml-2">Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;