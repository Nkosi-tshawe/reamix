import React from 'react';
import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [data,setData] = useState(null);
    const furl = `https://zamusic.org/wp-json/wp/v2/${url}`;

    useEffect(() =>  {
        async function loadData() {
            const response = await fetch(furl);
            if(!response.ok) {
                return;
            }
            const posts = await response.json();
            setData(posts);
        }
        loadData();
    },[url]);
    return data;
}