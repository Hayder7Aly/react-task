import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = ({id,title,cover,authorName}) => {
  const navigate = useNavigate()
  return (
    <li className="cards_item">
    <div className="card">
      <div className="card_image"><img src={cover} alt="" /></div>
      <div className="card_content">
        <h2 className="card_title">{title}</h2>
        <p className="card_text">{authorName}</p>
        <button className="btn card_btn" onClick={() => navigate(`/blog/${id}`)}>Read More</button>
      </div>
    </div>
  </li>
  )
}

export default Blog