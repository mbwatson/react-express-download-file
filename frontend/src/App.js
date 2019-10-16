import React from 'react'
import logo from './logo.svg'
import axios from 'axios'
import download from 'downloadjs'
import './App.css'

function App() {
    const handleStartDownload = async () => {
        await axios.get('http://localhost:3030/download')
            .then(response => download(response.data, 'data.csv'))
            .then(error => console.log(error))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <button onClick={ handleStartDownload }>Download File</button>
                </p>
            </header>
        </div>
    )
}

export default App
