import React,{useState,useEffect} from 'react'
import Select from 'react-select'
import Holidays from './Holidays'
export default function DataEntry() {

  let countryList= [
    {
    value:1,
    label:"Audi"
  },
  {value:2,
  label:"Benz"}
  ]
  const [month, setMonth] = useState(null);

  const getMonth=(e)=>{
    console.log("Hii");
    setMonth(e.value)
  }
  console.log(month);
    return (
     <div className="data-entry">
   <div className="choose">
   <Holidays/>
   <label style={{"margin":"10px"}}>Select Dealer</label>
   <Select className="select" options={countryList} onChange={getMonth}></Select>
   </div>
    <table class="table table-bordered border-black">
  <thead>
  <tr className="text-center">
  <th colspan="10" style={{"background-color":"orange"}} >New Vehicles</th>
  <th colspan="7" style={{"background-color":"green"}}>Used Vehicles</th>
  <th colspan="7" style={{"background-color":"yellow"}}>Service</th>
  <th colspan="3" style={{"background-color":"blue"}}>Parts</th>
  </tr>
    <tr>
      <th scope="col"  style={{"background-color":"black","color":"white"}}>Date</th>
      <th scope="col" style={{"background-color":"orange"}}>Appt</th>
      <th scope="col" style={{"background-color":"orange"}}>Retail Sold</th>
      <th scope="col" style={{"background-color":"orange"}}>Retail Delivered</th>
      <th scope="col" style={{"background-color":"orange"}}>Retail Front gross</th>
      <th scope="col" style={{"background-color":"orange"}}>Retail Back gross</th>
      <th scope="col" style={{"background-color":"orange"}}>Retail Pending</th>
      <th scope="col" style={{"background-color":"orange"}}>Fleet Delivered</th>
      <th scope="col" style={{"background-color":"orange"}}>Fleet Gross Delivered</th>
      <th scope="col" style={{"background-color":"orange"}}>CSI</th>
      <th scope="col" style={{"background-color":"green"}}>Appt</th>
      <th scope="col" style={{"background-color":"green"}}>Credit</th>
      <th scope="col" style={{"background-color":"green"}}>Retail Sold</th>
      <th scope="col" style={{"background-color":"green"}}>Retail Delivered</th>
      <th scope="col" style={{"background-color":"green"}}>Retail Front gross</th>
      <th scope="col" style={{"background-color":"green"}}>Retail Back gross</th>
      <th scope="col" style={{"background-color":"green"}}>Retail Pending</th>
      <th scope="col" style={{"background-color":"yellow"}}>Total Hours</th>
      <th scope="col" style={{"background-color":"yellow"}}>Sales $</th>
      <th scope="col" style={{"background-color":"yellow"}}>CP Hours</th>
      <th scope="col" style={{"background-color":"yellow"}}>#CP RO's</th>
      <th scope="col" style={{"background-color":"yellow"}}>CP HR/RO</th>
      <th scope="col" style={{"background-color":"yellow"}}>Total Gross</th>
      <th scope="col" style={{"background-color":"yellow"}}>CSI</th>
      <th scope="col" style={{"background-color":"blue"}}>Sales</th>
      <th scope="col" style={{"background-color":"blue"}}>Total Gross</th>
      <th scope="col" style={{"background-color":"blue"}}>Whole Sale Gross</th>
      <th scope="col">Total Store Gross</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="button">Edit</button></td>
      <td><button className="button">Delete</button></td>
    </tr>
   <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="button">Edit</button></td>
      <td><button className="button">Delete</button></td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="button">Edit</button></td>
      <td><button className="button">Delete</button></td>
    </tr>
    <tr>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td><input type="number" style={{"width":"50px"}}></input></td>
      <td></td>
     <td ><button className="button">Add</button></td>
     </tr>
    <tr>
      <th scope="row">Total</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">Forecast</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
