import  './card.css'
import type { ReactNode } from "react";
 type Props = {
   img: string;
   nombre?: string;
    ocupacion?: string;
   children?: ReactNode;
 };
const card = (props: Props) => {
 
  return (
    <div className="card">
      <div className="extra">Foto del usuario</div>
      <img src={props.img} alt="" />
      <p className="extra">Nombre: {props.nombre}</p>
      <p className="extra">Ocupacion: {props.ocupacion}</p>
      <p className="extra">{props.children}</p>
    </div>
  );
};

export default card;