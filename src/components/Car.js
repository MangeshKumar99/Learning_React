import React from 'react'
import './myStyles.css'
function Car(props) {
    console.log(props)
    let styleObj={
        fontSize:'72px',
        color:'blue'
    }
    let className
   if(props.primary==true) className='primary'
   else className=''
    return (
        <div>
            <h1 className={className}>Dodge Viper</h1>
            <h2 style={styleObj}>Inline style</h2>
        </div>
    )
}

export default Car
