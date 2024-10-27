import styled from "styled-components"
import Cards from "./Components/Cards"
import Categories from "./Components/Categories"
import Navbar from "./Components/Navbar"
import { useState } from "react"


const App = () => {
  const [api, setApi] = useState('https://dummyjson.com/products')
  
  return (
    <>
    <Navbar setApi={setApi}/>
    <Main>
      <Cards api={api} />
      <Categories setApi={setApi} />
    </Main>
    </>
  )
}

export default App

const Main = styled.div`
  display: flex;
`