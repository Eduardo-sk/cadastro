import { useState } from "react";

function Condicional(){

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] =useState()
    const[senha, setSenha] = useState()

    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
        setSenha(senha)
        alert('Tentando')
    }

    return(
        <div>

            <h2>Cadastre seu email</h2>

            <form>
                <input type="email"
                placeholder="DIGITE SEU EMAIL"
                onChange={(event)=> setEmail(event.target.value)}
                />
                
                <input type="senha" 
                placeholder="DIGITE SUA SUA SENHA"
                onChange={(event)=> setSenha(event.target.value)}
                />
                
                <button type="submit" onClick={enviarEmail}>CADASTRAR</button>
                {userEmail}

                {userEmail &&(
                    <div>
                        <p>O email do user é: {userEmail}</p>
                    </div>
                )
                }

            </form>

        </div>
    )
}
export default Condicional;