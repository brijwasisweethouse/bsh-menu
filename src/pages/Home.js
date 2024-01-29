import React from "react";
import { motion } from "framer-motion"; 
import menu from "../data/menu.json"
import { Link } from "react-router-dom";
import {styled} from "styled-components";

const HomeStyles = styled(motion.div)`
    .categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        flex-wrap: wrap;
        justify-content: center;
        a {
            text-decoration: none;
            font-size: 1.2rem;
            color: maroon;
        }
    }
    .category {
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: wheat;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
        &:click {
            transform: scale(1.05);
        }

    }
`;
const Home = () => {
    const categories = Object.keys(menu);

    return (
        <HomeStyles>
        <div className="home">
            <div className="container">
                <div className="categories">

                    {categories.map((category, index) => (
                        <Link to={`/menu/${category}`}>
                        <motion.div 
                            className="category" 
                            key={index}
                            initial={{ opacity: 0, x: function() { return index % 2 === 0 ? -100 : 100 }()}}
                            whileInView={{ opacity: 1, x: 0}}
                            exit={{ opacity: 0, x: function() { return index % 2 === 0 ? -100 : 100 }()}}
                        >
                                <h3>{category}</h3>
                        </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </HomeStyles>
    )
};

export default Home;