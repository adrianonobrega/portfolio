import styled from "styled-components"
import { divCar } from "./styles"
import Caroulsel from "react-elastic-carousel"
import { useState } from "react"
import frondEnd from "../../assets/Adriano Nóbrega Costa_page-0001.jpg"
import rede from "../../assets/CERTIFICADOS OESTE REDE - Adriano_page-0001.jpg"
import { Item } from "./styles"

const SectionCaroulsel = () => {
    
    const breakPoints = 
    [
    {width:1,itemToShow:1},
    {width:550,itemToShow:2},
    {width:768,itemToShow:3},
    {width:1200,itemToShow:4},
    
    
    ]
    
    const [items,setItems] = useState([frondEnd])

    const addItem = () => {
        const nextItem = Math.max(1,items.length + 1)
        setItems([...items,nextItem])
    }

    const removeItem = () => {
        const endRange = Math.max(0,items.length - 1)
        setItems(items.slice(0,endRange))
    }

    
    return (
        <divCar>
           <h1>qualificações</h1>
            <Caroulsel breakPoints={breakPoints}>

          <Item src={frondEnd}/>
          <Item src={rede}/>
            </Caroulsel>
        </divCar>
    )
}

export default SectionCaroulsel