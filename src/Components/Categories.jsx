import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import { useState, useEffect } from "react";

const Categories = ({ setApi }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(""); 

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <Container>
      <h1>Categories</h1>
      {categories.map((category) => (
        <CategoryCard
          key={category.id} 
          name={category.name}
          url={category.url} 
          setApi={setApi}
          isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)} 
        />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  width: 20%;
  margin-top: 50px;
  text-align: center;
  height: 500px;
  overflow-y: scroll;
  h1 {
    margin-bottom: 20px;
    position: sticky;
    top: 0;
    background-color: lightgray;
  }
`;