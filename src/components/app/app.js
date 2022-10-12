import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

const data = [
   {name: 'Эмиль', salary: 3000, increase: true, id: 1},
   {name: 'Антон', salary: 5000, increase: true, id: 2},
   {name: 'Карл', salary: 1100, increase: false, id: 3},
]

function App() {
   return (
      <div className="app">
         <AppInfo/>
         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>
         <Employerslist data={data}/>
         <EmployersAddForm/>
      </div>
   );
}

export default App;