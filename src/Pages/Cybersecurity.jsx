import React from 'react';
import Card from '../Components/Card';

const Cybersecurity = ({data}) => {
    let csData = data.filter((ele) => ele.head === 'Cyber Security')
    return (
        <div className='container'>
            <h3>Cyber Security</h3>
            <Card data={csData}/>
        </div>
    );
};

export default Cybersecurity;