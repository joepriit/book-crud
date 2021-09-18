import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Layout
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

// Pages
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Book from "./pages/book/Book";

const App = () => {
  return (
    <main className="page-wrapper">
      <Router>
        <Header />
        <section className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/book/:id" component={Book} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
