
import { useEffect } from 'react'
import { useState } from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    const fetchData = (url) => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setLoading(false)
                setData(data)
                setError(false)
            })
            .catch(err => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData(url)
    }, [url])

    return { data, loading, error };
}

export default useFetch