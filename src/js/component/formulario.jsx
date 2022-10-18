import React from "react";


const formulario = (props) => {
	return (
		<div>
			<h1 className="fw-light display-1 text-muted">to.Do</h1>
			<ul className="list-group">
 			       <input type="text" 
                                   value={props.value}
                                   placeholder={props.placeholder}
                                   onChange={(e) => props.actualizarTarea(e.target.value)} 
                                   className="p-2 border"
                            />
                            <button onClick={props.onClick} className="btn btn-outline-info mt-2">{props.text}</button>
                      </ul>
              </div>
	);
};

export default formulario;