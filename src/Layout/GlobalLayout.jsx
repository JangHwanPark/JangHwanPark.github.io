import React from 'react';
import Header from "../components/Header/Header";

export default function GlobalLayout({ children }) {
    return (
        <div className={'container'}>
            <Header/>
            {children}
        </div>
    );
}