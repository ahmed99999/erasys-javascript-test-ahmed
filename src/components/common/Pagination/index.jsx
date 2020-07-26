import React from 'react';
import './style.css';

const Pagination = ({ currentPage, totalPages, handlePage, NumberOfPages }) => {

    const previousClass = ((currentPage - 1) < 1) ? "page-item disabled" : "page-item";
    const nextClass = (currentPage > (totalPages / NumberOfPages)) ? "page-item disabled" : "page-item";
    return (
        <nav aria-label="..." className="pagination-class">
            <ul className="pagination">
                <li className={previousClass}>
                    <a className="page-link" onClick={() => handlePage(currentPage - 1)}>Previous</a>
                </li>
                {((currentPage - 1) >= 1) && <li className="page-item">
                    <a className="page-link" onClick={() => handlePage(currentPage - 1)}>{currentPage - 1}</a>
                </li>}
                <li className="page-item active">
                    <a className="page-link" onClick={() => handlePage(currentPage)}>{currentPage}<span className="sr-only">(current)</span></a>
                </li>
                {(currentPage < (totalPages / NumberOfPages)) && <li className="page-item">
                    <a className="page-link" onClick={() => handlePage(currentPage + 1)}>{currentPage + 1}</a>
                </li>}
                <li className={nextClass}>
                    <a className="page-link" onClick={() => handlePage(currentPage + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;