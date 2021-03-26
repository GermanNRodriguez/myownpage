import React from 'react';

const Container = ({col}) => {
    return ( 
    <div className="container">
        <div className="row">
            {col}
        </div>
    </div> );
}
 
export default Container;