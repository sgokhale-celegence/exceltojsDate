import React from "react";
import "./styles.css";
import Select from 'react-select'


//   { value: '1', label: 'YYYY-MM-DD' },
const options = [
  { value: '1', label: 'DD-MM-YYYY' },
]

export default function App() {
  var [excelDate, setExcelDate ] = React.useState(44073);
  var [finalDate, setFinalDate ] = React.useState();

  function pad(s) { return (s < 10) ? '0' + s : s; }

  const getDateValue = ()=> {
    var inputDate = new Date((excelDate - (25567 + 1)) * 86400 * 1000);
    setFinalDate([pad(inputDate.getDate()), pad(inputDate.getMonth()+1), inputDate.getFullYear()].join('/'));

  }

  return (
    <div className="App">
      <h1>Excel Dates and Converting to Javascript</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        Excel Input Date Format 
        <Select options={options} />
      Enter Excel Date value : <input type = "text" value = {excelDate} onChange = {(e)=>setExcelDate(e.target.value)}
      />
      <button onClick = {getDateValue}>
      Get Actual Date
        </button>
      <h1>Final date : {finalDate}</h1>
      </div>

    </div>
  );
}
