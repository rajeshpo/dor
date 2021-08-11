import { Switch, Route, BrowserRouter} from "react-router-dom";
import { Component } from "react";
import Main from "./Main";
import Leftnav from "./Leftnav";
import Main1 from "./Main1";


 class App extends Component{

  render(){
    return <BrowserRouter>

          <div className="flex">
            <Leftnav />
           <div className="content">
           <Switch>
       <Route  exact path="/" component={Main} />
       <Route  path="/main1"  component={Main1} />
     
      </Switch>
          </div>
        </div>
        
    </BrowserRouter>
  }
  
 
}
export default App
