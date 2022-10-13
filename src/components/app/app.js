import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employerslist from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            {name: 'Эмиль', salary: 100, increase: true, liked: true, id: 1},
            {name: 'Антон', salary: 5000, increase: true, liked: false, id: 2},
            {name: 'Карл', salary: 1100, increase: false, liked: true, id: 3},
         ],
         term: '',
         filter: 'all',
         id: 3,
      }
   }
   
   deleteItem = (id) => {
      this.setState(({data}) => ({
         data: data.filter(item => item.id !== id)
      }))
   }

   addItem = (e, name, salary) => {
      e.preventDefault();
      this.setState(({id}) => ({
         id: id + 1
      }))
      this.setState(({data, id}) => {
         return {
            data: data.concat([{name, salary, id}])
         }
      })
   }

   onToggleIncrease = (id) => {
      this.setState(({data}) => ({
         data: data.map(item => {
            if(item.id === id) {
               return {...item, increase: !item.increase}
            }
            return item
         })
      }))
   }

   onToggleLiked = (id) => {
      this.setState(({data}) => ({
         data: data.map(item => {
            if(item.id === id) {
               return {...item, liked: !item.liked}
            }
            return item
         })
      }))
   }

   onSearchChange = (items, term) => {
      if (term.length === 0) {
         return items;
      }

      return items.filter(item => {
         return item.name.indexOf(term) > -1;
      })
   }

   onValueChange = (term) => {
      this.setState({term: term})
   }

   filterChange = (items, filter) => {
      switch(filter) {
         case 'rise': 
            return items.filter(item => item.liked);
         case 'moreThan1000':
            return items.filter(item => item.salary > 1000);
         default: 
            return items
      }
   }

   onFilterChange = (filter) => {
      this.setState({filter})
   }

   render() {
      const {data, term, filter} = this.state;
      const newData = this.filterChange(this.onSearchChange(data, term), filter);
      return (
         <div className="app">
            <AppInfo 
               employees={this.state.data.length}
               getMoney={this.state.data.filter(item => item.increase).length}
            />
            <div className="search-panel">
               <SearchPanel
                  onValueChange={this.onValueChange}/>
               <AppFilter
                  filter={filter}
                  onFilterChange={this.onFilterChange}/>
            </div>
            <Employerslist 
               data={newData} 
               onDelete={this.deleteItem}
               onToggleIncrease={this.onToggleIncrease}
               onToggleLiked={this.onToggleLiked}/>
            <EmployersAddForm onAdd={this.addItem}/>
         </div>
      );
   }

}

export default App;