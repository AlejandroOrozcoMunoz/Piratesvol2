import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ViewPirate from './Componentes/ViewPirate';
import UpdatePirate from './Componentes/UpdatePirate';
import AllPirates from './Componentes/AllPirates';
import NewPirate from './Componentes/NewPirate';






const App = () => {
  return (

    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <AllPirates/>}/>
          <Route path="/new" render={() => <NewPirate />} />
          <Route path="/pirate/edit/:id"  render={() => <UpdatePirate />} />
          <Route path="/pirate/view/:id" exact render={() => <ViewPirate/>}/>
        
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
