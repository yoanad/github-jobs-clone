/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate, page }) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination" role="navigation" aria-label="pagination">
            <Link to={`/search/${page - 1}`}>Previous</Link>
            <Link to={`/search/${page + 1}`}>Next page</Link>
            <ul className="pagination-list">
                {pageNumbers.map((number) =>
                    <li key={number}>
                        <Link
                            className="pagination-link"
                            to={`/search/${number}`}
                            onClick={() => paginate(number)}>
                            {number}
                        </Link>
                    </li>
                )}
            </ul>
        </nav >
    );
}

export default Pagination;