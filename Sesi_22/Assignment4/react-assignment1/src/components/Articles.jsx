import React, { useEffect, useState } from "react"


function Articles() {

const [articles, setArticles] = useState([])

useEffect(() => {
    fetch('http://127.0.0.1:5000/articles')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setArticles(data)
    })
}, [])
    
return(
    articles.map(article => {
        return(
            <>

            <div key={article.id} className="artikel">
                <span id="title">Title : {article.title} </span> <br /> <br />
                <span>Body : {article.body} </span> <br />
                <span>Date : {article.date} </span> <br /> <br /> <br /> 

            </div>
            </>
        )
    })
)
}

export default Articles;