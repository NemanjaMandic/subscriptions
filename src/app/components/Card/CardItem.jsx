import React from 'react';
import './style.css';

const CardItem = props => {
    const { item, selected } = props;

    return (
        <div className="col s12 m4">
            <div className="card no-padding card-panel hoverable">
                <div className="card-header">
                    <span className="card-title">{item.name}</span>
                </div>

                <div className="card-content">
                    <p>{item.description}</p>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-action content">
                    <p className="price">{item.price}</p>
                    <a className="waves-effect blue darken-3 btn round-btn" onClick={selected}>
                        select
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
