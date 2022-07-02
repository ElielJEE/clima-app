import { Route, Switch, Router } from "wouter";
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
      </Switch>
    </Router>
  )
}