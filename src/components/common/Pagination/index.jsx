import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePage, NumberOfPages }) => {

    const previous = ((currentPage - 1) < 1) ? "page-item disabled" : "page-item";
    const next = (currentPage > (totalPages / NumberOfPages)) ? "page-item disabled" : "page-item";
    return (
        <nav aria-label="..." style={{ margin: "13px" }}>
            <ul className="pagination">
                <li className={previous}>
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
                <li className={next}>
                    <a className="page-link" onClick={() => handlePage(currentPage + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;