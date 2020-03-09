import React, { useState } from 'react'

function usePagination(data, itemsPerPage) {
    // Set state variables
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    // Set the current data
    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;

        return data.slice(begin, end);
    };

    // Next Page
    function next() {
        setCurrentPage((currentPage) => {
            return Math.min(currentPage + 1, maxPage);
        });
    };

    // Prev Page
    function prev() {
        setCurrentPage((currentPage) => {
            return Math.max(currentPage - 1, 1);
        });
    };

    // Jump to page
    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => {
            return Math.min(pageNumber, maxPage);
        });
    };

    // Return everything for export and reuse
    return { next, prev, jump, currentData, currentPage, maxPage };

};


export default usePagination;