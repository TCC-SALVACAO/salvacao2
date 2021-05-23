import React from 'react';
import './style/Login.css';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import {history} from '../../App/history';
import api from '../../../services/api';


const Login = () => {

    const validations = Yup.object().shape({
        email: Yup.string().email().required(),
        senha: Yup.string().min(1).required()
    })

    const handleFormSubmit = values =>{
        
        api.post("/login", values).then(res => {
            const { data } = res
            console.log(data)
            if(data){
                alert("Login efetuado com sucesso")
                sessionStorage.setItem("id", data.id);
                sessionStorage.setItem("nome", data.nome);
                history.push('/map')
                window.location.reload()
            }
        })
        .catch(err => alert(`Login não pôde ser efetuado: ${err}`));
    };

    return(

        <div className="containerLogin">
            <Formik
                initialValues={{}}
                onSubmit={handleFormSubmit}
                validationSchema={validations}
            >
                <Form>
                    <div className="inputs">
                        <div className="user">
                            <Field
                                className="input"
                                placeholder="Digite seu email"
                                name="email"
                            />
                            
                        </div>
                        <div className="passwd">
                            <Field
                                type="password"
                                className="input"
                                placeholder="Digite sua senha"
                                name="senha"
                            />
                        </div>
                    </div>
                    
                    <div className="botoes">
                        <div className="linkcad">
                            <button className="cadastro-login" type="submit">Login</button>
                        </div>
                        
                        <Link className="linkcad" to="/">
                            <button className="cadastro">Esqueci a senha</button>
                        </Link>
                            
                        
                        <Link to="/cadastro" className="linkcad">
                            <button className="cadastro">Cadastrar-se</button>
                        </Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Login;