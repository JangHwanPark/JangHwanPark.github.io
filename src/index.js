import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import reportWebVitals from './reportWebVitals';

// Dependencies
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Components
import App from './App';
import Home from "./components/pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('blog'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();