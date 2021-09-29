import React from "react"
import "./Customer.css"

// this is a component
// export const CustomerCard = () => (
//     <section className="customer">
//         <h3 className="customer__name">Hannah Hall</h3>
//         <div className="customer__address">Address: 100 Infinity Way</div>
//     </section>
// )

export const CustomerCard = ({ customer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../../images/blonde-puppy.jpeg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-customername">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <p>Phone: {customer.phone}</p>
        </div>
      </div>
    );
  }