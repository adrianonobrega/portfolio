import { TecnologiasStyles } from "./styles";

const Tecnologia = ({img,title,tec1,tec2,tec3,tec4}) => {

return (
    <TecnologiasStyles>
        <img src={img}></img>
        <h1>{title}</h1>
        <h3>{tec1}</h3>
        <h3>{tec2}</h3>
        <h3>{tec3}</h3>
        <h3>{tec4}</h3>
    </TecnologiasStyles>
)

}

export default Tecnologia