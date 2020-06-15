import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CutsomDrawer from './Components/Drawer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddMyDevotion from './Components/AddMyDevotion'
import EditDevotion from './Components/EditDevotion';
import DeleteDevotion from './Components/DeleteDevotion';
import ViewDevotion from './Components/ViewDevotion';
import Search_Query from './Components/Search_Query';
import FullPage from './Components/FullPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ViewDevotion} />
        <Route exact path='/viewDevotion' component={ViewDevotion}/>
        <Route exact path="/add" component={AddMyDevotion} />
        <Route  path='/edit/:id/:date' component={EditDevotion} />
        <Route exact path='/deleteDevotion' component={DeleteDevotion} />
        <Route exact path='/query' component={Search_Query} />
        <Route exact path='/fullPage/:date' component={FullPage}/> 
      </Switch>
      <CutsomDrawer/>
    </Router>
  )
}

export default App






// import React from 'react';
// import './App.css'
// import 'element-theme-default';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// // import Drawerfile from './Components/Drawerfile';
// // import AddMyDevotion from './Components/AddMyDevotion';
// import Navigation from './Components/Navigation';
// import SideNav from './Components/SideNav';


// const App = () => {
//   return (
//     <div className='container-fluid'>
//       <main>
//           <Router>
//           <Switch>
//             <Navigation />
//           </Switch>
//           </Router>
//         </main>
//     </div>
//   );
// }

// export default App;

// // style={{ maxWidth: '30rem', margin: '4rem auto' }}