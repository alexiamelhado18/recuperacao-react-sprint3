//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

//images
import imgLogo from "../../assets/img/logo 1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">
                    {/* tag unitária */}
                    {/* Imagem sempre precisa ser importada */}
                    <img src={imgLogo} alt="logo bolos julia" />
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/cadastro/bolo"}>Cadastrar</Link>
                        <Link to={"/lista/bolo"}>Bolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>
    );
}

// O componente header pode ser chamado em outros lugares pelo export
export default Header;