import React, {useState} from 'react';
import CarouselBt from '../../components/carousel/Carousel'
import photo from './photo.jpeg'
import Technologies from '../../components/technologies/technologies'
import 'styled-components'
import './stylePresentation.scss'


const Presentation = () => {
    

    /*const [phrases, changePhrases] = useState ([
        {id:1 , ph:phrase1},
        {id:2 , ph:phrase2},
        {id:3 , ph:phrase3}
    ]);*/

    return ( 
        <div>
            <div className="header">
                <h1 class="myTitle">¡Bienvenido a mi Web!</h1>
            </div>
            <div className="inicio">
                <div className="aboutMe">
                    <span className="lineAboutMe">-</span>
                    <span>Sobre mí</span>
                    <span className="lineAboutMe">-</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={photo} className="photo" alt='GermanNR'></img>
                        </div>
                        <div className="col-xl ">
                            <CarouselBt/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="presentationText">
                <div className="colorBox">
                    <div className="textBox">
                        <p className="greatText">¡Hola! Soy un joven de 24 años en busca de su primer trabajo en el mundo IT. Soy estudiante
                        de Lic. en Informática, apasionado por la creación se aplicaciones y el aprendizaje.<br/>
                        En los que más me he enfocado estos últimos tiempos es en la Programación Web y la
                        enseñanza de mis conocimientos como usuario de alto nivel. <br/> Si mi perfil le parece
                        interesante, por favor ¡Contáctese conmigo! ¡Estoy ansioso por escuchar su propuesta!<br/>
                        ¡Y muchas gracias por visitar esta web!</p>
                    </div>
                </div>
            </div>
            <div className="myTechnologies">
                <div className="aboutMe">
                    <span className="lineAboutMe">-</span>
                    <span>Tecnolgías</span>
                    <span className="lineAboutMe">-</span>
                    <Technologies/>
                </div>
               
            </div>
            <div>
                <div className="wave wavePr"></div>
                <div className="wave wavePr"></div>
            </div>
            

        </div>
    )
}

export default Presentation;