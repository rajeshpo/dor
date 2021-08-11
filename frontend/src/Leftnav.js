import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {ThreeDRotation,Home,Computer,AccountBalance,AccessibilityNew,LibraryBooks} from '@material-ui/icons';
import React from 'react'
import {Link} from "react-router-dom";



export default function Leftnav() {
   
    return (
        <span>
         <div className="sidebar">
         <ProSidebar >
  <Menu iconShape="square">
 
  <MenuItem> <h1 className="title">FFUN</h1></MenuItem>
  <SubMenu title="FFUN">
      <MenuItem>Motor Group</MenuItem>
      <MenuItem>D.O.R</MenuItem>
      
    </SubMenu>
    <MenuItem icon={<Home/>}><Link to="/">Home</Link></MenuItem>
     <SubMenu title="Data Entry" icon={<Computer />}>
      <MenuItem><Link to="/dataentry">OEM</Link></MenuItem>
      <MenuItem>TS</MenuItem>
      <MenuItem>RS</MenuItem>
    </SubMenu>
    <MenuItem icon={<AccountBalance />}><Link to="/budget">Budget</Link></MenuItem>
    <MenuItem icon={<AccessibilityNew />}><Link to="/holidays">Holidays</Link></MenuItem>
    <SubMenu title="Dealer Reports" icon={<LibraryBooks />}>
    <SubMenu title="Automative Reports" icon={<ThreeDRotation />}>
      <MenuItem>Summary by Category</MenuItem>
      <MenuItem>Group Recap</MenuItem>
      <MenuItem>MTD Dealer Comparision</MenuItem>
      <MenuItem>Daily Dealer Comparision</MenuItem>
    </SubMenu>
    <SubMenu title="Drive Nation Reports" icon={<ThreeDRotation />}>
    <MenuItem>Summary by Category DN</MenuItem>
      <MenuItem>Group Recap DN</MenuItem>
      <MenuItem>MTD Dealer Comparision DN</MenuItem>
      <MenuItem>Daily Dealer Comparision DN</MenuItem>
    </SubMenu>
    <SubMenu title="Recreational Reports" icon={<ThreeDRotation />}>
      <MenuItem>Summary by Category Rec</MenuItem>
      <MenuItem>Group Recap Rec</MenuItem>
      <MenuItem>MTD Dealer Comparision Rec</MenuItem>
      <MenuItem>Daily Dealer Comparision Rec</MenuItem>
    </SubMenu>
    </SubMenu>
    <SubMenu title="SummaryReports" icon={<LibraryBooks />}>
      <MenuItem>Summary Report Gross</MenuItem>
      <MenuItem>Summary Report Sold Units</MenuItem>
      <MenuItem>Summary Report Budget</MenuItem>
     
    </SubMenu>
  </Menu>
</ProSidebar>
         </div>  
        </span>
    )
}
