import { FormStyle } from "./styles";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask'



const Form = () => {
    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data,"data")
    }

return(
    <FormStyle>
        <form action="https://api.staticforms.xyz/submit" method="POST">
       <input type="hidden" name="accessKey" value="b44a0089-3ac4-4dc7-bfc8-7741db9e782d"></input>
       <input type="hidden" name="redirectTo" value="https://www.linkedin.com/in/adriano-n%C3%B3brega-05502516a/"/>
    <input  name="name" placeholder="Nome"></input>
    <input  name="email" placeholder="E-mail" ></input>
    
<InputMask placeholder="Telefone" mask="(99)99999-9999"  name="phone"/>
    <textarea  placeholder="Escreva a sua mensagem" name="message" rows="10" cols="40" maxlength="1000"></textarea>
    <button>Enviar</button>
        </form>


    </FormStyle>
   
)


}

export default Form