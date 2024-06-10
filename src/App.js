import React from 'react';
import './App.css';
import Header from './Header';
import Services from './Services';
import Form from './Form';

function App() {
    return (
        <div className="App">
            <div className="content-container">
                <Header />
                <Services />
            </div>
            <Form />
        </div>
    );
}

export default App;
