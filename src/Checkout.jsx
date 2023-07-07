import React, { useState } from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Checkout = () => {
  const items = useSelector((state) => state.cart);
  const [check,setcheck]=useState('')

  
const getTotal=()=>{
  let total=0;
  
  items.map((item)=>{
    total=total + item.quantity *item.price
  })
  return total

}
const handleClick=()=>{
setcheck("Your order has been placed")
}

  return (
    <div>
      <>
        {/*Main layout*/}
        <main className="mt-5 pt-4">
          <div className="container">
            {/* Heading */}
            <h2 className="my-5 text-center">Checkout form</h2>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-8 mb-4">
                {/*Card*/}
                <div className="card p-4">
                  {/*Grid row*/}
                  <div className="row mb-3">
                    {/*Grid column*/}
                    <div className="col-md-6 mb-2">
                      {/*firstName*/}
                      <div >
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                        />
                        <label  htmlFor="typeText">
                          First name
                        </label>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-6 mb-2">
                      {/*lastName*/}
                      <div >
                        <input
                          type="text"
                          id="typeText"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="typeText">
                          Last name
                        </label>
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                  {/*Username*/}
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/*email*/}
                  <p className="mb-0">Email (optional)</p>
                  <div className=" mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="youremail@example.com"
                      aria-label="youremail@example.com"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/*address*/}
                  <p className="mb-0">Address</p>
                  <div className=" mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="1234 Main St"
                      aria-label="1234 Main St"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/*address-2*/}
                  <p className="mb-0">Address 2 (optional)</p>
                  <div className=" mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Apartment or suite"
                      aria-label="Apartment or suite"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4">
                      <p className="mb-0">Country</p>
                      <div className=" mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="India"
                          aria-label="United States"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4">
                      <p className="mb-0">State</p>
                      <div className=" mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Gujarat"
                          aria-label="California"
                          aria-describedby="basic-addon1"
                        />
                        
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4">
                      <p className="mb-0">Zip</p>
                      <div >
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                  <hr />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Save this information for next time
                    </label>
                  </div>
                  <hr />
                  <div className="my-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                      
                        Credit card{" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        {" "}
                        Debit card{" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
                      >
                        {" "}
                        Paypal{" "}
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                      <p className="mb-0">Name on card</p>
                      <div >
                        <input type="text" className="form-control" />
                        <div className="form-helper">
                          Full name as displayed on card
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <p className="mb-0">Credit card number</p>
                      <div >
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <p className="mb-0">Expiration</p>
                      <div >
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <p className="mb-0">CVV</p>
                      <div >
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4" />
                  
                  <button className="btn btn-primary" type="button"  onClick={handleClick}>
                   Place your order
                  </button>
                  
                </div>
                {/*/.Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-4 mb-4">
                {/* Heading */}
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <Link className="link-secondary me-3" to="/Cart">
                <i className="fas fa-shopping-cart" />
                <a href="">
                  <span className="badge rounded-pill badge-notification bg-danger">
                    {items.length}
                  </span>
                </a>
              </Link>
                </h4>
                {/* Cart */}
                <ul className="list-group mb-3">
                 
                  <li className="list-group-item d-flex justify-content-between">
                    <div>
                      <h6 className="my-0">Delivery Charge</h6>
                      {/* <small className="text-muted">Brief description</small> */}
                    </div>
                    <span className="text-muted">$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">-$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>{getTotal()}</strong>
                  </li>
                </ul>
                {/* Cart */}
                {/* Promo code */}
                <form className="card p-2">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                      aria-label="Promo code"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="button-addon2"
                      data-mdb-ripple-color="dark"
                    >
                      redeem
                    </button>
                  </div>
                </form>
                {/* Promo code */}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          
        </main>
        {/*Main layout*/}
        {/* footer */}
        <Footer />
      </>
    </div>
  );
};

export default Checkout;
