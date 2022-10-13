import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         term: ''
      }
   }

   onValueChange = (e) => {
      const newValue = e.target.value;
      this.setState({term: newValue})
      this.props.onValueChange(newValue)
   }

   render () {
      const {term} = this.state;
      return ( 
            <input 
               type="text" 
               className="form-control search-input"
               placeholder="Найти сотрудника"
               onChange={this.onValueChange}
               value={term}
            />
      );
   }
}

export default SearchPanel;