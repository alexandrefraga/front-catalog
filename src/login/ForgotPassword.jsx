import { Link } from "react-router-dom";
export default function ForgotPassword(props) {
    return (
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
            <div className="row justify-content-center form-bg-image">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="signin-inner my-3 my-lg-0 bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
                        <h1 className="h3">Esqueceu sua senha?</h1>
                        <p className="mb-4">Não se preocupe! Basta digitar seu e-mail e enviaremos um código para redefinir sua senha!</p>
                        <form action="#">
                            <div className="mb-4">
                                <label for="email">Email</label>
                                <div className="input-group">
                                    <input type="email" className="form-control" id="email" placeholder="digite aqui seu email..." required autofocus />
                                </div>  
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-gray-800">Recuperar senha</button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-center align-items-center mt-4">
                            <span className="fw-normal">
                                <Link to="/" className="d-flex align-items-center justify-content-center">
                                <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                                Voltar
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </section> 
    );
}