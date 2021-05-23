import React from 'react';
import './style/Cadastro.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { history } from '../../App/history';
import api from '../../../services/api';

const Cadastro = () => {

    const validations = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
        senha: Yup.string().min(4).required()
    })

    const handleFormSubmit = values =>{
        
        
        api.post("/create/user", values).then(res => {
            const { data } = res
            console.log(data)
            if(data){
                alert("Cadastro Efetuado com sucesso")
                history.push('/login')
                window.location.reload()
            }
        })
        .catch(err => alert(`Cadastro não pôde ser efetuado: Email já cadastrado`));
    }

    return(
        <div className="containerCad">
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={{}}
                validationSchema={validations}
            >
                <Form>
                    <div className="inputs2">
                        <div className="name2">
                            <Field
                                className="input2"
                                placeholder="Digite seu nome"
                                name="nome"
                            />
                        </div>
                        
                        <div className="email2">
                            <Field
                                className="input2"
                                placeholder="Digite seu email"
                                name="email"
                            />
                        </div>

                        <div className="passwd2">
                            <Field
                                className="input2"
                                placeholder="Digite sua senha"
                                name="senha"
                                type="password"
                            />
                        </div>

                        <div className="passwd2">
                            <Field
                                className="input2"
                                placeholder="Confirme sua senha"
                                name="senha2"
                                type="password"
                            />
                        </div>
                    </div>

                    <div className="botao2">
                        <div className="linkcad2">
                            <button type="submit" className="cadastro-login2"> Cadastrar </button>
                        </div>
                    </div>
                </Form>
                
            </Formik>
        </div>
    )
}

export default Cadastro;