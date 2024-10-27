import UserIcon from '/images/icons/Account.png';
import CartIcon from '/images/icons/Cart.png';
import styled from 'styled-components';

const Navbar = ({ setApi }) => {
    const debouncing = (cb, delay = 500) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                cb(...args);
            }, delay);
        };
    };

    const updateDebounce = debouncing(text => setApi(`https://dummyjson.com/products/search?q=${text}`));

    return (
        <Container>
            <h1>SHOP</h1>
            <div className="right__side">
                <input onChange={(e) => updateDebounce(e.target.value)} type="text" placeholder="Search for Products" />
                <img src={UserIcon} alt="User" />
                <img src={CartIcon} alt="Cart" />
            </div>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    background-color: lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0;
    letter-spacing: 2px;
    
    h1 {
        font-size: 32px;
    }
    
    .right__side {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .right__side input {
        height: 30px;
        width: 250px;
        padding-left: 20px;
        font-size: 14px;
        border: 1px solid black;
        border-radius: 5px;
    }
    
    .right__side img {
        width: 40px;
    }
`;