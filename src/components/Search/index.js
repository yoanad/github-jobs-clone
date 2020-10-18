import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList';
import Pagination from '../Pagination';

const Search = () => {
    let { page = 1 } = useParams();
    const [currentPage, setCurrentPage] = useState(page);
    const [postsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [position, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [currentJobs, setCurrentJobs] = useState([]);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        const apiUrl = `https://jobs.github.com/positions.json`;
        setLoading(true);
        fetch(proxyUrl + apiUrl)
            .then((response) => { return response.json() })
            .then((data) => { return setJobs(data); })
            .then(() => setLoading(false));
    }, []);

    useEffect(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        setCurrentJobs(jobs.slice(indexOfFirstPost, indexOfLastPost))
    }, [jobs, currentPage, postsPerPage])

    const onPositionChange = useCallback((event) => {
        setPosition(event.currentTarget.value);
    }, []);

    const onLocationChange = useCallback((event) => {
        setLocation(event.currentTarget.value);
    }, []);

    const onSearchClick = useCallback((event) => {
        const apiUrl = `https://jobs.github.com/positions.json?description=${position}&location=${location}`;
        setLoading(true);

        fetch(proxyUrl + apiUrl)
            .then((response) => { return response.json() })
            .then((data) => { return setJobs(data); })
            .then(() => setLoading(false));
    }, [position, location])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="Search">
            <label>
                Position
                <input type="text" onChange={onPositionChange} />
            </label>
            <label>
                Location
                <input type="text" onChange={onLocationChange} />
            </label>
            <button onClick={onSearchClick}>Search</button>
            <ItemList
                isLoading={loading}
                items={currentJobs} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={jobs.length}
                paginate={paginate} />
        </div>
    )
}

export default Search;