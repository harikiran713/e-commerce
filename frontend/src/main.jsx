
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
//wrap your entire app with the BrowserRouter it listen to the browsers address bar and desides which component to render based on the current url

createRoot(document.getElementById('root')).render(
<Router> 
    <App />
</Router>
   
)
