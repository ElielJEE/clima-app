import { Route, Switch, Router } from "wouter";
import Home from "../Components/Pages/Home";
import MainPage from "../Components/Pages/Regions";
import SearchResults from "../Components/Pages/SearchResults"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  )
}