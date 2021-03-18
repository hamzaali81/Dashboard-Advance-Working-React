import React from 'react';

interface Props {
    title: string
}

const Test:React.FC<Props>=(props)=> {
    console.log(props);
    
    return (
        <div>
           <p>Component {props.title}</p> 
        </div>
    )
}

export default Test
