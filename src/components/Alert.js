import React from "react";

export default function Alert(props) {
  const capatilize = (word)=>{
    const str = word.toLowerCase();
    return(str.charAt(0).toUpperCase()+str.slice(1));
  }
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
      {/* we don't want the cross button */}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>}
    </div>
  );
}
