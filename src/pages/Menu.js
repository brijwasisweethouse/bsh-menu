import React from 'react';
import { motion } from 'framer-motion';
import menu from '../data/menu.json';
import { styled } from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const MenuStyles = styled(motion.div)`
    padding: 2rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-family:'Lora', serif;
    font-style: italic;
    @media (min-width: 768px) {
        width: 50%;
    }
    .items {
        display: flex;
        flex-direction: column;
    }
    .item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        margin: 1rem 0;
        font-weight: 600;
        &-name {
            grid-column: 1 / span 1;
            font-size: 1.3rem;
            font-weight: 600;
        }
        &-price {
            grid-column: 2 / span 1;
            font-size: 1.3rem;
            font-weight: 600;
            text-align: right;
        }
    }
    .back{
        text-align: center;
        margin-top: 2rem;
        a {
            text-decoration: none;
            font-size: 1.3rem;
            font-weight: 600;
            color: wheat;
        }
    }
`;
const Menu = () => {
    const {category} = useParams();
    const items = menu[category];
    return (
        <MenuStyles>
        <div className='items'>
            {items.map((item, index) => (
                <motion.div 
                    className='item' 
                    initial={{ opacity: 0, x: -100}}
                    animate={{ opacity: 1 , x: 0}}
                    transition={{ delay: 0.1 + index * 0.05}}
                    exit={{ opacity: 0 , x:100}}
                    key={index}>
                        <div className='item-name'>{item.dish}</div>
                        <div className='item-price'>&#8377;{item.price}</div>
                </motion.div>
            ))}
        </div>
        <motion.div className='back'
            initial={{ opacity: 0, x: -100}}
            animate={{ opacity: 1 , x: 0}}
            transition={{ delay: 0.2}}
            exit={{ opacity: 0 , x:100}}
        >
            <Link to='/'>

                {/* Home icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="wheat" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path 
                        fill="wheat" 
                        d="M12 2L2 12h3v8h6v-6h4v6h6v-8h3L12 2zm3 
                        15v-6h-6v6h6z"
                    />
                </svg>
                </Link> 
        </motion.div>
        </MenuStyles>
    )
};

export default Menu;