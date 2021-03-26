import React from 'react'
import './styleContact.scss'

const Contact = () => {
    return (
        <div className="principleContact">
            <div className="contactBox">
                <h1 className="titleContact">¡Gracias por llegar hasta acá!</h1>
                <p className="subTitleContact">Por favor, llene este formulario y estaremos en contacto.</p>
                <form >
                    <table className="formTable">
                        <tbody>
                        <tr>
                            <td className="userInfo">
                            <input type="text" placeholder="Su nombre" className="userContact form-control"/>
                            <input type="text" placeholder="Su email" className="userContact form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea placeholder="Envíe un mensaje" className="userText form-control"></textarea>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>
                            <input type="button" value="Enviar" className="userBoton btn btn-primary"/>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default Contact
