import React, { Fragment, useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Repository from './layout/repository/Repository'
import Presentation from './layout/basic/presentation'
import Contacto from './layout/contact/Contact'
import Curriculum from './layout/curriculum/Curriculo'
import "./styleBody.scss";

function App() {
  //Crear listado de productos
  /*const [productos, setProductos] = useState([
    {id: 1, nombre:'camisa', precio: 50},
    {id: 2, nombre:'remera', precio: 30},
    {id: 3, nombre:'chomba', precio: 10},
    {id: 4, nombre:'pantalon', precio: 10},
  ]);

 //Obtener fecha
  const fecha = new Date().getFullYear();*/
  return (
    <Fragment>
      <Router>
      <Header />
      <Switch>
        <Route path="/repositorio">
          <Repository />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/curriculum">
          <Curriculum/>
        </Route>
        <Route path="/">
          <Presentation />
        </Route>
      </Switch>
      </Router>
      <Footer/>
    </Fragment>
  );
}

export default App;
