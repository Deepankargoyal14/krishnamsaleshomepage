import React from 'react'
import './css/slider.css'

export default function Card(props) {
    return (
        <>
        <h2 className="hea">{props.heading}</h2>
        <div className="cards">
        
        <div className="card">
            <img src="/images/oppo.jpg" alt="" />
            <h2 className="productname">Oppo Mobiles</h2>  
            
          </div>
        <div className="card">
            <img src="/images/redmi.jpg" alt="" />
            <h2 className="productname">Redmi Mobiles</h2>  

          </div>
        <div className="card">
            <img src="/images/mobiles.png" alt="" />
            <h2 className="productname">Samsung Mobiles</h2>  

          </div>
          <div className="card">
            <img src="/images/oneplus.png" alt="" />
            <h2 className="productname">Oneplus Mobiles</h2>  

          </div>
          <div className="card">
            <img src="/images/apple.png" alt="" />
            <h2 className="productname">Apple Mobiles</h2>  

          </div>
          <div className="card">
            <img src="/images/macbook.png" alt="" />
            <h2 className="productname">Apple Macbook</h2>  

          </div>
          <div className="card">
            <img src="/images/dell.png" alt="" />
            <h2 className="productname">Dell Laptop</h2>  

          </div>
          <div className="card">
            <img src="/images/hp.png" alt="" />
            <h2 className="productname">hp Laptop</h2>  

          </div>
      </div>
      </>
    )
}
