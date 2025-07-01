import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import AppRoutes from './Navigate';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;