import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doLogin } from './login-service';

export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [data, setData] = useState({});
    
    function onChangeInput(event) {
        setData(data => ({ ...data , [event.target.id]: event.target.value }))
    }

    
    function onSubmit(event) {
        event.preventDefault();
        doLogin(data)
            .then(response => {
                if (response) {
                    localStorage.setItem('token', response.token)
                    navigate('/dashboard')
                }
            })
            .catch(error => {
                console.error(error);
                setError(`${error.message}`);
            })
    }

    return (
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
            <div className="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                        <div className="text-center text-md-center mb-4 mt-md-0">
                            <h1 className="mb-0 h3">Login</h1>
                        </div>
                        <form action="#" className="mt-4" onSubmit={onSubmit}>
                            <div className="form-group mb-4">
                                <label for="email">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">
                                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </span>
                                    <input type="email" className="form-control" placeholder="digite aqui seu email..." id="email" onChange={onChangeInput} autofocus required />
                                </div>  
                            </div>
                           
                            <div className="form-group">
                                
                                <div className="form-group mb-4">
                                    <label for="password">Senha</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon2">
                                            <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                        </span>
                                        <input type="password" placeholder="digite sua senha" className="form-control" id="password" onChange={onChangeInput} minLength="8" required />
                                    </div>  
                                </div>
                                
                                <div className="d-flex justify-content-between align-items-top mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="remember"/>
                                        <label className="form-check-label mb-0" for="remember">
                                          Lembrar
                                        </label>
                                    </div>
                                    <div><Link to="/forgot-password" className="small text-right">Esqueceu a senha?</Link></div>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-gray-800" >Entrar</button>
                            </div>
                            {
                                error
                                ? <div className="alert alert-danger mt-2">{error}</div>
                                : <React.Fragment></React.Fragment>
                            }
                        </form>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <span className="fw-normal">
                                <Link to="/signup" className="fw-bold">Criar nova conta</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      );
}