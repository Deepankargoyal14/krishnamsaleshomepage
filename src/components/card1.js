import React from 'react'
import './css/slider.css'

export default function Card(props) {
    return (
        <>
        <h2 className="hea">{props.heading}</h2>
        <div className="cards">
        <div className="card">
            <img src="/images/tshirt.jpg" alt="" />
            <h2 className="productname">Contour Tshirts</h2>  
          </div>
          <div className="card">
            <img src="/images/tshirt-2.jpg" alt="" />
            <h2 className="productname">Jockey Tshirts</h2> 
            </div>
        <div className="card">
            <img src="/images/tshirt-3.jpg" alt="" />
            <h2 className="productname">Cool Tshirts</h2> 
            </div>
        <div className="card">
            <img src="/images/levis.png" alt="" />
            <h2 className="productname">Levis Jeans</h2> 
        </div>
        <div className="card">
            <img src="/images/denim.png" alt="" />
            <h2 className="productname">Denim Jeans</h2> 
        </div>
        <div className="card">
            <img src="/images/being human.png" alt="" />
            <h2 className="productname">Being Human Jerkin</h2> 
        </div>
        <div className="card">
            <img src="/images/peter england.png" alt="" />
            <h2 className="productname">Peter England Jerkins</h2> 
        </div>
      </div>
      </>
    )
}
