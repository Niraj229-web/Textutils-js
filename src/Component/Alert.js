import React from 'react'

const Alert = (props) => {
  return (
    <div style={{height:'70px'}}>
   { props.alert && <div className="alert alert-success" role="alert">
       <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
