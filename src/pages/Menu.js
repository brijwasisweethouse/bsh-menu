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
    h2{
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
    }
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
        &-description {
            font-size: 1rem;
            font-weight: 400;
            text-align: left;
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
        <motion.h2
            initial={{ opacity: 0, x: -100}}
            animate={{ opacity: 1 , x: 0}}
            transition={{ delay: 0.1}}
            exit={{ opacity: 0 , x:100}}
        >{category}</motion.h2>
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
                        <div className='item-description'>{item.description}</div>
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

                {/* Back icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="wheat" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {/* Back icon */}

                </Link> 
        </motion.div>
        </MenuStyles>
    )
};

export default Menu;