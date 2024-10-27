import styled from "styled-components"


const Card = ({img, name, rating, desc, category}) => {
  return (
    <Box >
        <img src={img} alt="" />
        <h2>{name.slice(0, 20)}{name.length > 20 &&  '...'}</h2>
        <div className="rating">
            <p>{rating}</p>
        </div>
        <p>{desc.slice(0, 95)}{desc.length > 95 && '...'}</p>
        <p className="cat">{category}</p>
    </Box>
  )
}

export default Card

const Box = styled.div`
    width: 250px;
    height: 400px;
    background-color: lightgray;
    padding: 10px;
    border-radius: 10px;
    img{
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }
    h2{
        font-size: 18px;
    }
    div p{
        font-size: 14px;
    }
    p{
        font-size: 12px;
    }
    .cat{
        background-color: white;
        padding: 5px 10px;
        margin: 10px;
        border-radius: 20px;
        border: 1px solid black;
        width: fit-content;
        
    }

`