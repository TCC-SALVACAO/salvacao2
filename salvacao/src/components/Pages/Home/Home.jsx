import React from 'react';
import './style/Home.css';

function Home(){

    return(
        <div className="container">
            <div className="card">
                <div className="cardHead">
                    <img srcSet="/images/logosalvacao.png" alt=""/>
                </div>

                <div className="cardBody">
                    <div className="home">
                        <h1>Bem-Vindos ao Salvacão!</h1>
                    </div>
                    <div className="description">
                        <p>
                            Nós somos um serviço de geolocalização para animais domésticos perdidos e abandonados.
                            <br/>
                            Se você está procurando por ajuda com seu animal ou até mesmo quer oferecer ajuda, venha conhecer nosso sistema.
                        </p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home;