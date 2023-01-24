import React from 'react'
import './css/slider.css'

export default function Card(props) {
    return (
        <>
        <h2 className="hea">{props.heading}</h2>
        <div className="cards">
        <div className="card">
            <img src="/images/beds.png" alt="" />
            <h2 className="productname">Beds</h2>  
          </div>
          <div className="card">
            <img src="/images/cleaning supplies.png" alt="" />
            <h2 className="productname">Cleaning Supplies</h2> 
            </div>
        <div className="card">
            <img src="/images/kitchen equipments.png" alt="" />
            <h2 className="productname">Kitchen equipments</h2> 
            </div>
        <div className="card">
            <img src="/images/screw drivers.png" alt="" />
            <h2 className="productname">Screw drivers</h2> 
        </div>
        <div className="card">
            <img src="/images/storage items.png" alt="" />
            <h2 className="productname">Storage Items</h2> 
        </div>
        <div className="card">
            <img src="/images/emergency items.png" alt="" />
            <h2 className="productname">Emergency items</h2> 
        </div>
      </div>
      </>
    )
}
