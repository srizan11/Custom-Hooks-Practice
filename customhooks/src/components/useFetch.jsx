import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch(url)
        .then((data) => data.json())
        .then(data => setData(data))
    }, [url])

    return [data]
}

export default useFetch