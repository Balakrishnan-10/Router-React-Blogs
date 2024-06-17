import React from 'react';
import Card from '../Components/Card';

const Career = ({data}) => {
    let careerData = data.filter((element) => element.head === 'Career');
    return (
        <div className='container'>
            <h3>Career</h3>
            <Card data={careerData} />
        </div>
    );
};

export default Career;