import React, {useState} from 'react';

import MonthYearPicker from 'react-month-year-picker';

export default function Holidays(){

  const [month,setMonth]=useState(10);
  const [year,setYear]=useState(2018);
 
    return (
      <div>
        <MonthYearPicker
          selectedMonth={month}
          selectedYear={year}
          minYear={2000}
          maxYear={2030}
          onChangeYear={year =>setYear(year)}
          onChangeMonth={month =>setMonth(month)}
        />
        
      </div>
    );
  }
