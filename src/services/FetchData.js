import React, { useState, Component } from 'react'
import axios from 'axios'

function FetchData(url, timeout) {
    // Create some state variables
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Initialize
    function init() {
        console.group('Initializing')
        setData([]);
        setLoading(true);
        setLoading(false);
        console.groupEnd();
    }

    // Load
    async function load() {
        init();
        setLoading(true);
        try {
            const result = await axios.fetch(url, { timeout: timeout }).data;
            setData(result);
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    }


    return { data, loading, error, load };
}

export default FetchData;