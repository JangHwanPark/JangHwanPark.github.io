import React from 'react';
import {Link} from "react-router-dom";

const path = [
    {title: 'Menu1', path: '/menu1'},
    {title: 'Menu2', path: '/menu2'},
    {title: 'Menu3', path: '/menu3'},
];

export default function Header() {
    return (
        <header>
            <nav>
                {/* *************** 블로그 제목 *************** */}
                <h2>DevDiary</h2>
                {/* *************** 네비게이션 카테고리 *************** */}
                <ul>
                    <li><Link to={'/'}>Menu1</Link></li>
                    <li><Link to={'/'}>Menu2</Link></li>
                    <li><Link to={'/'}>Menu3</Link></li>
                    <li><Link to={'/'}>Menu4</Link></li>
                </ul>
            </nav>
        </header>
    );
}