import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Invoice from './components/Invoice';
import InvoiceExample from './components/InvoiceExample';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={Invoice} />
        <Route path="/example" component={InvoiceExample} />
        {/* Add a route for the invoice page with a dynamic parameter, for example /invoices/:id */}
      </Routes>
    </Router>
  );
};

export default App;
