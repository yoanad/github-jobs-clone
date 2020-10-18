import React from 'react';
import './Item.css'

const Item = ({ title, description }) => {

    return (
        <div className="Item card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    {description}
                    <br />
                    <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
        </div>
    );
}

export default Item;