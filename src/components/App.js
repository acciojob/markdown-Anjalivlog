import React, { useEffect, useState } from 'react'
import Markdown from "markdown-to-jsx";
import "../styles/App.css";


const App = () => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    const MarkdownPreview = () => <Markdown>{value}</Markdown>
    const handleChange= (e) => {
        setValue(e.target.value);
    }

    const Loading = () => <h1 className='loading'>Loading...</h1>

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [value]);
  return (
    <div className='app'>
        <textarea className='textarea' value={value} onChange={handleChange}></textarea>
        <div className='preview'>
            {loading ? <Loading/> : <MarkdownPreview/>}
        </div>
    </div>
  )
}

export default App
