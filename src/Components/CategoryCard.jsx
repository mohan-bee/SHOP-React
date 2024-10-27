import styled from "styled-components";

const CategoryCard = ({ name, url, setApi, isActive, onClick }) => {
  const handleClick = () => {
    setApi(url);
    onClick();
  };

  return <Card isActive={isActive} onClick={handleClick}>{name}</Card>;
};

export default CategoryCard;

const Card = styled.div`
  background-color: ${(props) => (props.isActive ? "black" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  width: 80%;
  margin: 10px auto;
  font-size: 12px;
  padding: 10px 5px;
  padding-left: 20px;
  text-align: left;
  border-radius: 10px;
  cursor: pointer;
`;