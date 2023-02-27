import React from 'react'
import { useEffect, useState } from 'react'
import "./getApi.css"

const GetApi = () => {
const [data, setData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [postPerPage, setPostPerPage] = useState(10);

   useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos')
.then((result)=>{
    result.json().then((resp)=>{
        setData(resp);
    })
})}
)
const lastPostIndex= currentPage * postPerPage;
const firstPostindex = lastPostIndex - postPerPage;
const currentPost = data.slice(firstPostindex, lastPostIndex)
const totalPosts = data.length;
let pages = [];
for (let i = 1; i<= Math.ceil(totalPosts/ postPerPage);i++){
    pages.push(i)
}

  return (
    <div>
       
    <div>{
        currentPost.map((item)=>{
        return <div key={item.id}>
        <p className={`${item.completed ? "bgGreen" : "bgRed"}`}>{item.title}</p>
        </div>

        }
        )}
    </div>

     <div style={{textAlign:"center",}}>{
        pages.map((page, index)=>{
            return <button key={index} className="btn" onClick={()=> setCurrentPage(page)}>{page}</button>
        })}
     </div>
    </div>
  )
}

export default GetApi;