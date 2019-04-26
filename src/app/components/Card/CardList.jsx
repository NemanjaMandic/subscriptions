import React, {useContext} from 'react';
import CardItem from './CardItem';
import AppContext from '../../context/AppContext';

const CardList = ({items}) => {
   
    const { onSelectProduct } = useContext(AppContext);

        if (items.length === 0) {
            return <h4>Loading...</h4>
        }
        return (
            <div className="row">
                {items.map(item => (
                    <CardItem key={item._id} item={item} selected={onSelectProduct} />
                ))}
            </div>
        )
    
   
}

export default CardList;
