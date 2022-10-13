import {Component} from 'react';

import './employers-add-form.css';


class EmployersAddForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         salary: '',
      }
   }

   onValueChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      const {name, salary} = this.state;
      const {onAdd} = this.props;
      return (
         <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
               className="add-form d-flex">
               <input type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  name="name"
                  value={name}
                  onChange={this.onValueChange} />
               <input type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?" 
                  name="salary"
                  value={salary}
                  onChange={this.onValueChange}/>
               <button type="submit"
                        className="btn btn-outline-light"
                        onClick={(e) => onAdd(e, name, salary)}
                        >Добавить</button>
            </form>
         </div>
      )
   }
}
   
export default EmployersAddForm;