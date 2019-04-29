import React,{Component} from 'react';

class Formulario extends Component{
    categoriaRef = React.createRef();
    cambiarCategoria = e =>{
        e.preventDefault();
        const categoria = this.categoriaRef.current.value;
        this.props.consultarNoticias(categoria);
    }
    render(){
        return(
            <div className="row">
                <div className="col-12 text-center">
                    <form className="pt-3" onSubmit={this.cambiarCategoria}>
                        <h2>Noticias por categoria</h2>
                        <div className="row">
                            <div className="form-group col col-md-8">
                                <select className="form-control" ref={this.categoriaRef}>
                                    <option value="general" defaultValue>General</option>
                                    <option value="business" defaultValue>Negocios</option>
                                    <option value="entertainment" defaultValue>Entretenimiento</option>
                                    <option value="health" defaultValue>Salud</option>
                                    <option value="science" defaultValue>Ciencia</option>
                                    <option value="sports" defaultValue>Deportes</option>
                                    <option value="technology" defaultValue>Tecnologia</option>
                                </select>
                            </div>

                            <div className="form-group col col-md-4 justify-center" >
                                <input type="submit" className="btn btn-warning w-100 text" value="Enviar"/>
                            </div>  
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Formulario;