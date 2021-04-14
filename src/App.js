import SearchScreen from "./components/search-page/search-screen";
import DetailsScreen from "./components/search-page/details-page/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
import Register from "./components/login-register-page/register-page";
import Login from "./components/login-register-page/login-page";
import Profile from "./components/profile-page/profile-page";


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Route path="/" exact={true}>
                <HomeScreen/>
            </Route>
            <Route path={["/search", "/search/:race"]}
                   exact={true}>
                <SearchScreen/>
            </Route>
            <Route path="/details/:race_id" exact={true}>
                <DetailsScreen/>
            </Route>
            <Route path="/register" exact={true}>
                <Register/>
            </Route>
            <Route path={["/profile", "/profile/:profileId"]} exact={true}>
                <Profile/>
            </Route>
            <Route path="/login" exact={true}>
                <Login/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
