import { useState } from 'react'; //useEffect,
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [location, setLocation] = useState({});

  // useEffect(function () {
  //   function getLocation() {
  //     navigator.geolocation.getCurrentPosition(function (position) {
  //       setLocation({ latitude:position.coords.latitude, longitude:position.coords.longitude })
  //     });
  //   }
  //   getLocation()
  // }, []);

  return (
    <main className="App">
      { user ?
      <> 
        {/* <NavBar user={user} setUser={setUser} /> */}
        <Switch>
          <Route path="/orders/new">
            <NewOrderPage user={user} setUser={setUser}/>
          </Route>
          <Route path="/orders">
            <OrderHistoryPage user={user} setUser={setUser}/>
          </Route>
          <Redirect to="/orders" />
        </Switch>
      </>  
        :
        <AuthPage setUser={setUser}  /> //location={location}
        // location.latitude ? <AuthPage setUser={setUser} location={location} /> : <div>loading location</div>
      }
    </main>
  );
}
