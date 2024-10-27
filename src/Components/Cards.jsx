import styled from "styled-components"
import Card from "./Card"
import { useEffect, useState } from "react"


const Cards = ({api}) => {

    const [cards, setCards] = useState([])

    console.log(api)
    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => setCards(data.products));
    }, [api])
  return (

   <Container>
   
    {cards.map(data => (
        <Card key={data.id} img={data.thumbnail} name={data.title} rating={data.rating} desc={data.description} category={data.category}/>
    ))}
   </Container>
  )
}

export default Cards

const Container = styled.div`
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    padding: 50px;
    gap: 50px;
    width: 1300px;
`
