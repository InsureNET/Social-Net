import React, { useState, Component } from 'react'
import axios from 'axios'

function FetchData(url, timeout) {
    // Create some state variables
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Initialize
    function init() {
        setData([]);
        setLoading(true);
        setLoading(false);
    }

    // Load
    async function load() {
        init();
        setLoading(true);
        try {
            const result = await axios.fetch(url, { timeout: timeout }).data;
        } catch (error) {
            setError(error);
        }

        setLoading(false);
    }


    return { data, loading, error, load };
}

export default FetchData;