import React, { useState } from "react";
import Formulario from "./formulario.jsx";

const ListaTarea = (props) => {
	return <div>
		{props.tareas.map((tarea) => {
			return <div className="d-flex mb-3">
				{tarea.texto}
				<button className="ms-auto p-2 btn btn-outline-secondary btn-sm pt-0 pb-0 " onClick={() => props.removerTarea(tarea.id)}>X</button>
			</div>
		})}
	</div>
};

const Home = () => {
		
		const [contador,actualizarContador] = useState(1);
		const [tarea,actualizarTarea] = useState("");
		const [tareas,actualizarTareas] = useState([]);
		
		const hacerNada = () => {
			let nada = "No hay tareas por hacer, añade algunas tareas!";
			if(contador>1){
				nada = "";
		 	}
			return nada;
		}
		
		const onClick = () => {
			const auxTareas = [...tareas];
			
			auxTareas.push({
				id: contador,
				texto: tarea,
			})
			
			actualizarTareas(auxTareas);
			actualizarContador(contador + 1);
			actualizarTarea("");
			
			
		}
		
		const removerTarea = (id) => {
			const resultado = tareas.filter((tarea) => tarea.id !== id)
			actualizarTareas(resultado);
			actualizarContador(contador-1);
		
		}
		
		return <div className="text-center container card-body border border-info rounded border-2 col-5">
					<Formulario
						value={tarea}
						actualizarTarea={actualizarTarea}
						placeholder="Ingrese texto"
						text="Agregar Tarea"
						onClick={onClick}	
					/>
						<ul className="list-group"  >
							<li className="list-group-item text-start text-capitalize mt-1 mb-0 fst-italic fw-semibold text-nowrap bg-light border">{hacerNada()}<ListaTarea tareas={tareas} removerTarea={removerTarea}/></li>
						</ul>

				</div>
		
	
};

export default Home;
