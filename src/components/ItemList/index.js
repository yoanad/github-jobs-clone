import React from 'react';
import Item from '../Item';
import './ItemList.css';

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!items || items.length === 0) {
        return <p>No jobs, sorry.</p>;
    }

    return (
        <div className="ItemList">
            { items
                && items.map((el, i) => {
                    return (
                        <Item
                            key={i}
                            title={el.title}
                            description={el.description}
                        />
                    )
                })
            }
        </div>


    );
}

export default ItemList;