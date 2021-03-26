import React from "react";
import "./styleCurriculum.scss";
import Photo from "../../resources/photo.jpeg";

const Curriculo = () => {
  return (
    <div id="cv">
      <h1 className="titleCV">Germán Nicolás Rodríguez</h1>
      <div className="images">
        <img src={Photo} className="foto"></img>
        {/*<hr className="hrFoto"/>*/
        }
      </div>
      
      <hr className="shadows"/>
      <hr/>

      <div className="container">
        <h3 className="principle">FORMACIÓN</h3>
        <div className="row">
          <div className="col-sm">
            <p className="leftTitle">Instituto Sudamericano</p>
            <p className="leftSubtitle">Merlo</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">Bachiller en Ciencias Sociales</p>
            <p className="rightSubtitle">
              Secundario completo con especialización en Ciencias Sociales
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="leftTitle">
              Universidad Nacional del <br /> Oeste (UNO)
            </p>
            <p className="leftSubtitle">Merlo</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">
              Tecnicatura en Informática / Agosto 2016 - Actualidad
            </p>
            <p className="rightSubtitle">
              30% de carrera completa (15 materias)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <p className="leftTitle">Huenei</p>
            <p className="leftSubtitle">Padua</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">Capacitación virtual Fullstack</p>
            <p className="rightSubtitle">
              Visual Basic, C#, HTML, CSS3, Javascript, Bootstrap, Jquery
            </p>
          </div>
        </div>
      </div>

      <hr className="shadows"/>
      <hr />

      <div className="container">
        <h3 className="principle">EXPERIENCIA LABORAL</h3>
        <div className="row">
          <div div className="col-sm">
            <p className="leftTitle">Randstad</p>
            <p className="leftSubtitle">Merlo</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">Data Entry / Octubre 2017</p>
            <p className="rightSubtitle">
              Entrada de datos de votantes durante las elecciones del 2017{" "}
              <br /> Categoría A (+10.000 caractéres por hora)
            </p>
          </div>
        </div>
        <div className="row">
          <div div className="col-sm">
            <p className="leftTitle">Emprendimiento</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">
              Servicio Técnico / Junio 2018 - Actualidad
            </p>
            <p className="rightSubtitle">
              Solución de problemas generales en equipos informáticos, con
              atención personalizada
            </p>
          </div>
        </div>
        <div className="row">
          <div div className="col-sm">
            <p className="leftTitle">Emprendimiento</p>
          </div>
          <div className="col-sm-8">
            <p className="rightTitle">
              Profesor de computación / Mayo 2020 - Actualidad
            </p>
            <p className="rightSubtitle">
              Clases de forma virtual. Dí clases de lo más básicas como aprender
              a utilizar una pc <br /> hasta Paquete Office avanzado ya
              actualmente a programar webs.
            </p>
          </div>
        </div>
      </div>

      <hr className="shadows"/>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-md">
            <h3 className="principle">IDIOMAS</h3>
            <ul className="leftList">
              <li>Español (nativo)</li>
              <li>Inglés (intermedio)</li>
            </ul>
          </div>
          <div className="col-md">
            <h3 className="principle">CONOCIMIENTOS</h3>
            <div className="row">
              <div className="col-sm">
                <ul>
                  <li>JAVA</li>
                  <li>C#</li>
                  <li>.NET</li>
                  <li>Bootstrap</li>
                  <li>SQL Server</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="col-sm">
                <ul>
                  <li>HTML5</li>
                  <li>Js</li>
                  <li>MongoDB</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>Sass</li>
                </ul>
              </div>
              <div className="col-sm">
                <ul>
                  <li>Soporte técnico</li>
                  <li>Data Entry</li>
                  <li>Microsoft Office</li>
                  <li>Edición de video</li>
                  <li>
                    Dictado y preparado <br /> de clases
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculo;
