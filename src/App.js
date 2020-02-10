import React from 'react';
import Menu from './Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const PAGES = [
  { id: 'home', title: 'Home', path: '/' },
  { id: 'about', title: 'About', path: '/about' },
  { id: 'blog', title: 'Blog', path: '/blog' },
  { id: 'portfolio', title: 'Portfolio', path: '/portfolio' },
  { id: 'conttact', title: 'Contact', path: '/contact' }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Menu items={PAGES}></Menu>
        <Switch>
          {PAGES.map(({ id,  title, path }) => (
            <Route key={id} exact path={path}>
              <h1>{title}</h1>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
