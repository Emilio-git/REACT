import './app-info.css';

const AppInfo = (props) => {
   const {employees, getMoney} = props;
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании Emil and Co</h1>
         <h2>Общее число сотрудников: {employees}</h2>
         <h2>Премию получат: {getMoney}</h2>
      </div>
   );
};

export default AppInfo;