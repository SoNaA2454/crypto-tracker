import { makeStyles } from "@material-ui/core";
import Homepage from "./pages/Homepage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";
import Alert from "./components/Alert";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
