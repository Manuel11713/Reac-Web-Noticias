import React, {Component} from 'react';
import Noticia from './Noticia';
import Formulario from './Formulario';
import '../css/noticias.css';
class Noticias extends Component{
    render(){
        const noticias =this.props.noticias;
        return(
            <div className="container contenedorNoticias">
                <Formulario
                    consultarNoticias={this.props.consultarNoticias}
                />
                <div className="row">
                    {Object.keys(noticias).map(key=>{
                        return(
                        <Noticia
                            key={key}
                            noticia={noticias[key]}
                        />)
                    })} 
                </div>
            </div>
        )
    }
}

export default Noticias;