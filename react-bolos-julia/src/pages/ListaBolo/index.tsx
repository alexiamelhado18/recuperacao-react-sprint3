//estilização
import "./style.css";

//componentes
import CardBolo from "../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";



function ListaBolo() {

    //js
    //const listaBolo = [];

    //atribuindo valor
    //bolos = [1, 2, 3];


    //react
    //bolos => ver o valor que está armazenado
    //setBolos => atribuir um novo valor

    //useState<any[]> => o tipo do valor que pode receber
    //([]) => é o valor inicial
    //atribuindo valor react
    //setBolos([1, 2, 3]);

    //visualizar valor em js e react
    //bolos

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {

        //http://localhost:3000/bolos
        api.get("bolos")
            .then((response) => {
                /*then é quando api da retorno positivo*/

                //atualiza o valor da variavel bolos 
                //pelo retorno da api
                setBolos(response.data);

                console.log(response.data);
            })
            .catch((error) => {
                /*catch é quando api da retorno negativo*/

                console.log(error);
            })

    }

    //que useEffect é acionado quando o componente é inicializado e/ou modifica
    useEffect(() => {

        //listarBolos() é acionada quando meu componente é inicializado
        listarBolos();
    }, [
        /*monitora*/
    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;