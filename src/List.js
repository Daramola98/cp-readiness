import React from 'react';

const List = props => (
    <div>
        <h2> Todo Items </h2>
        <ul>
            {
                props.items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </div>
);

export default List;