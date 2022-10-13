import './app-filter.css';

const AppFilter = (props) => {
   const btns = [
      {name: 'all', label: 'Все сотрудники'},
      {name: 'rise', label: 'На повышение'},
      {name: 'moreThan1000', label: 'З/П больше 1000$'},
   ]

   const buttons = btns.map(item => {
      const clazz = item.name === props.filter ? 'btn-light' : 'btn-outline-light';
      return (
         <button 
            className={`btn ${clazz}`}
            type="button"
            name={item.name}
            onClick={() => props.onFilterChange(item.name)}>
            {item.label}
         </button>
      )
   })

   return (
      <div className="btn-group">
         {buttons}
      </div>
   );
}

export default AppFilter;