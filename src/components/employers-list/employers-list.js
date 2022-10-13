import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const Employerslist = ({data, onDelete, onToggleIncrease, onToggleLiked}) => {

   const elements = data.map(elem => {
      const {id, ...elemProps} = elem
      return (
         <EmployersListItem 
            key={id} 
            {...elemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleLiked={() => onToggleLiked(id)}
         />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   );
}

export default Employerslist;