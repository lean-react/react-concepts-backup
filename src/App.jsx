import React from 'react';

import './App.css';
import KanbanBoard from './components/KanbanBoard.jsx';
import PageHeader from './components/PageHeader.jsx';

const App = () => (
  <>
    <PageHeader />
    <main className="container">
      <KanbanBoard />
    </main>
  </>
);

export default App;
