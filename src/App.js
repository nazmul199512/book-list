import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Nav from "./components/Nav";
import BookList from "./components/book/BookList";
import SignUp from "./components/auth/SignUp";
import AddBook from "./components/book/AddBook";
import BookDeatils from "./components/book/BookDetails";

function App() {
    return (
        <div className="App">
            <Router>
            <Nav />
                <div className="container ">
                    <Switch>
                  
                        <Route
                            path="/book-details"
                            exact
                            component={BookDeatils}
                        />
                        <Route path="/add-book" exact component={AddBook} />
                        <Route path="/" exact component={BookList} />

                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
