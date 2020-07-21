import React from 'react';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <section className="topic">
            <h2 id="about">
              <span style={{ color: '#0056b3' }}>#</span> Todo
            </h2>
            <p>Todo application with React and Mobx.</p>
          </section>
        </div>
      </div>
      <Todos />
    </div>
  );
};

export default App;
