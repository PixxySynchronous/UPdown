    import React from 'react'
    const Touppercase= (word) =>{
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }
          

    export default function ALERT(props) {
    return (
    <div style={{height : '50px'}}>
     {props.alert&&
       <div>
            
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{Touppercase(props.alert.type)}</strong> {props.alert.msg}
    </div>
        
        </div>}
        </div>
)
    }
