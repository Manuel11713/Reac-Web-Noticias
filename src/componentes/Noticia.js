import React from 'react';


const Noticia = props =>{
    const {description,title,url,urlToImage}=props.noticia ;
    return(
        <div className="col-6 col-md-4 col-xl-3">
            <div className="card" >
                <img src={urlToImage} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a target="_blank" href={url} className="btn btn-outline-danger" rel="noopener noreferrer" >Leer Noticia</a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;