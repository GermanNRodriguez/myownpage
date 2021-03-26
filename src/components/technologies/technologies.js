import React from 'react';
import Container from '../container/Container';
import ContainerMd from '../container/ContainerMd';

import jquery from '../../resources/jquery.png';
import bootstrap from '../../resources/bootstrap.png'
import csharp from '../../resources/csharp.png'
import css from '../../resources/css.png'
import express from '../../resources/express.png'
import html from '../../resources/html.png'
import js from '../../resources/js.png'
import mongodb from '../../resources/mongodb.png'
import mysql from '../../resources/mysql.png'
import net from '../../resources/net.png'
import nodejs from '../../resources/nodejs.png'
import react from '../../resources/react.png'
import sass from '../../resources/sass.png'
import spring from '../../resources/spring-boot.png'
import sqlser from '../../resources/sql-server.png'


import './styleTechnologies.scss'

const Technologies = () => {
    return ( 
        <div className="container everyTech">
            <div className="row">
                <div className="col-md my-front-end">
                    <span className="textTech">Front-End</span>
                    <ul>
                        <li><img src={html} className="icon"></img> <span className="tech">HTML5</span></li>
                        <li><img src={css} className="icon"></img><span className="tech">CSS3</span></li>
                        <li><img src={js} className="icon"></img> <span className="tech">JS</span></li>
                        <li><img src={jquery} className="icon"></img><span className="tech">JQuery</span></li>
                    </ul>
                    <ul>
                        <li><img src={react} className="icon"></img><span className="tech">React</span></li>
                        <li><img src={bootstrap} className="icon"></img> <span className="tech">Bootstrap</span></li>
                        <li><img src={sass} className="icon"></img> <span className="tech">SCSS</span></li>
                    </ul>

                </div>

                <div className="col-md my-backend-end">
                    <span className="textTech">Back-End</span>
                    <ul>
                        <li><img src={net} className="icon"></img> <span className="tech">.NET</span></li>
                        <li><img src={spring} className="icon"></img> <span className="tech">Spring</span></li>
                        <li><img src={express} className="icon"></img><span className="tech">Express</span></li>
                    </ul>
                    <ul>
                        <li><img src={csharp} className="icon"></img><span className="tech">C#</span></li>
                        <li><img src={nodejs} className="icon"></img><span className="tech">NodeJS</span></li>
                    </ul>   
                </div>
                <div className="col-md my-databases">
                    <span className="textTech"s>Database</span>
                    <li>
                        <img src={sqlser} className="icon"></img><span className="tech">SQLServer</span></li><li>
                        <img src={mysql} className="icon"></img><span className="tech">MySQL</span></li>
                        <li><img src={mongodb} className="icon"></img><span className="tech">MongoDB</span></li>
                </div>
            </div>
        </div> 
    );
}
 
export default Technologies;