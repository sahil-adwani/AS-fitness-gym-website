import React from 'react'
import { Link } from "react-router-dom";
const Packages = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 5500,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEAR",
      price: 9000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 12000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>AS FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  Equipment
                </p>
                <p>
                  All Day Fre Training
                </p>
                <p>
                  Free Restroom
                </p>
                <p>
                   24/7 Skilled Support
                </p>
                <p>
                  20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Packages