import React,{Component} from 'react';
import Header from './Header';
import Noticias from './Noticias';

class App extends Component{
  state={
    noticias:[]
  }
  componentDidMount(){
    this.consultarNoticias();
  }
  consultarNoticias=(categoria='general')=>{  
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=0696f3572a184c59b624c5118511e0e9`
  
    fetch(url)
              .then(respuesta=>{
                return respuesta.json();
              })
              .then(noticias=>{
                this.setState({
                  noticias: noticias.articles
                })
              })
              .catch(error=>{
                console.log(error);
              });

  }
  render(){ 
    return (
      <div className="App">
        <Header titulo="Noticias de la ultima semana"/>
        <Noticias
          noticias={this.state.noticias}
          consultarNoticias={this.consultarNoticias}

        />
      </div>
    );
  }
}

export default App;

