import React from 'react';
import Card from '../Components/Card';

const Datascience = ({data}) => {
    let dsData = data.filter((ele) => ele.head === 'Data Science');
    return (
        <div className='container'>
            <h3>Data Science</h3>
            <Card data={dsData} />
        </div>
    );
};

export default Datascience;