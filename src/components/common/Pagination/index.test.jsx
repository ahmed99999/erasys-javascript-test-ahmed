import React from 'react';
import reactDOM from 'react-dom';
import Pagination from './index'
import renderer from 'react-test-renderer';
import './style.css';

it('renders without crashing', () => {
    const nav = document.createElement('nav');
    nav['aira-label'] = "...";
    nav.className = 'pagination-class';
    const ul = document.createElement('ul');
    ul.className = "pagination";
    const lis = ['Previous', 1, 2, 'Next'];
    lis.forEach((value, index) => {
        const li = document.createElement('li');
        li.className = 'page-item' + ((index == 0) ? ' disabled' : '');
        const a = document.createElement('a');
        a.className = "page-link";
        a.value = value;
        if (index == 1) {
            const spam = document.createElement('spam');
            spam.className = "sr-only";
            spam.value = "(current)";
            a.appendChild(spam);
        }
        li.appendChild(a);
    });
    nav.appendChild(ul);
    reactDOM.render(<Pagination currentPage={1} totalPages={4} NumberOfPages={3} />, nav);
});