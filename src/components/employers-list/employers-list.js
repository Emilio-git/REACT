import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const Employerslist = ({data, onDelete}) => {

   const elements = data.map(elem => {
      const {id, ...elemProps} = elem
      return (
         <EmployersListItem 
            key={id} 
            {...elemProps}
            onDelete={() => onDelete(id)}
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