import { Switch, Route, BrowserRouter} from "react-router-dom";
import { Component } from "react";

import Home from "./Home";
import DataEntry from "./DataEntry";
import Holidays from './Holidays'
import Budget from './Budget'
import Leftnav from "./Leftnav";

 class App extends Component{

  render(){
    return <BrowserRouter>

          <div className="flex">
            <Leftnav />
           <div className="content">
           <Switch>
       <Route  exact path="/" component={Home} />
       <Route  path="/dataentry"  component={DataEntry} />
       <Route  path="/budget"  component={Budget} />
       <Route  path="/holidays"  component={Holidays} />
     
      </Switch>
          </div>
        </div>
        
    </BrowserRouter>
  }
  
 
}
export default App
