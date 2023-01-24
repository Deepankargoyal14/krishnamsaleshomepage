import React from 'react'
import './css/slider.css'

export default function Card(props) {
    return (
        <>
        <h2 className="hea">{props.heading}</h2>
        <div className="cards">
        <div className="card">
            <img src="/images/tshirt.jpg" alt="" />
            <h2 className="productname">Contour Tshirt</h2>  
            <h3 className="price">Price: 200</h3>
          </div>
          <div className="card">
            <img src="/images/tshirt-2.jpg" alt="" />
            <h2 className="productname">Jockey Tshirt</h2> 
            <h3 className="price">Price: 300</h3>
            </div>
        <div className="card">
            <img src="/images/tshirt-3.jpg" alt="" />
            <h2 className="productname">Cool Tshirt</h2> 
            <h3 className="price">Price: 250</h3>
            </div>
        <div className="card">
            <img src="/images/levis.png" alt="" />
            <h2 className="productname">Levis Jeans</h2> 
            <h3 className="price">Price: 500</h3>
        </div>
        <div className="card">
            <img src="/images/denim.png" alt="" />
            <h2 className="productname">Denim Jeans</h2> 
            <h3 className="price">Price: 600</h3>
        </div>
        <div className="card">
            <img src="/images/being human.png" alt="" />
            <h2 className="productname">Being Human Jerkin</h2>
            <h3 className="price">Price: 1500</h3> 
        </div>
        <div className="card">
            <img src="/images/peter england.png" alt="" />
            <h2 className="productname">Peter England Jerkins</h2> 
            <h3 className="price">Price: 2000</h3>
        </div>
        <div className="card">
            <img src="/images/oppo.jpg" alt="" />
            <h2 className="productname">Oppo Reno6pro</h2>  
            <h3 className="price">Price: 25000</h3>
          </div>
        <div className="card">
            <img src="/images/redmi.jpg" alt="" />
            <h2 className="productname">Redmi k11pro</h2>  
            <h3 className="price">Price: 30000</h3>
          </div>
        <div className="card">
            <img src="/images/mobiles.png" alt="" />
            <h2 className="productname">Samsung note8 pro</h2>  
            <h3 className="price">Price: 50000</h3>
          </div>
          <div className="card">
            <img src="/images/oneplus.png" alt="" />
            <h2 className="productname">Oneplus 10pro</h2>  
            <h3 className="price">Price: 50000</h3>
          </div>
          <div className="card">
            <img src="/images/apple.png" alt="" />
            <h2 className="productname">Apple 14 pro max</h2>  
            <h3 className="price">Price: 150000</h3>
          </div>
          <div className="card">
            <img src="/images/macbook.png" alt="" />
            <h2 className="productname">Apple Macbook</h2>  
            <h3 className="price">Price: 80000</h3>
          </div>
          <div className="card">
            <img src="/images/dell.png" alt="" />
            <h2 className="productname">Dell inspiron i5</h2>  
            <h3 className="price">Price: 50000 </h3>
          </div>
          <div className="card">
            <img src="/images/hp.png" alt="" />
            <h2 className="productname">hp rygen5 5600H</h2>  
            <h3 className="price">Price: 50000</h3>
          </div>
      </div>
      </>
    )
}
