import SearchScreen from "./components/search-page/search-screen";
import DetailsScreen from "./components/search-page/details-page/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import IndexScreen from "./components/index-screen";
import Register from "./components/login-register-page/register-page";
import Login from "./components/login-register-page/login-page";
import Profile from "./components/profile-page/profile-page";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import userReducer from "./reducers/user-reducer";
import NavBar from "./components/home-page/nav-header"
import AdminContentTable from "./components/admin/user-table";
import HomeScreen from "./components/home-page/home-landing";

const reducer = combineReducers({
    userReducer: userReducer,

})

const store = createStore(reducer)


function App() {
  return (
    <div >
        <Provider store={store}>

            <BrowserRouter>
                <Route path={["/", "/home"]} exact={true}>
                    <NavBar/>
                    <HomeScreen/>
                </Route>
               <Route path="/index" exact={true}>
                   <NavBar/>
                    <IndexScreen/>
                </Route>
                <Route path={["/search", "/search/:race"]}
                    exact={true}>
                       <NavBar/> 
                    <SearchScreen/>
                </Route>
                <Route path="/details/:race_id" exact={true}>
                    <NavBar/>

                    <DetailsScreen/>
                </Route>
                <Route path="/register" exact={true}>
                    <Register/>
                </Route>
                <Route path={["/profile", "/profile/:profileId"]} exact={true}>
                    <NavBar/>
                    <Profile/>
                </Route>
                <Route path="/admin-view" exact={true}>
                    <NavBar/>
                    <AdminContentTable/>
                </Route>
                <Route path="/login" exact={true}>
                    <Login/>
                </Route>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
