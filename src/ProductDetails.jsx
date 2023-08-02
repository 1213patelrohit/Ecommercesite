import React, { useEffect } from "react";
import "./project.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Add } from "./store/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [additem, setadditem] = useState([]);
  const location = useLocation();
  const ID = location.state.from;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ID}`).then((res) =>
      res.json().then((results) => {
        setadditem(results);
      })
    );
  }, []);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(Add({ ...additem, quantity: 0 }));
  };
  return (
    <  >
      <main className="mt-5 pt-4">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <img
                src={additem.image}
                height={300}
                width={300}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6 mb-4">
              <div className="p-4">
                <div className="mb-3">
                  <a href="">
                    <span className="badge bg-dark me-1">Category 2</span>
                  </a>
                  <a href="">
                    <span className="badge bg-info me-1">New</span>
                  </a>
                  <a href="">
                    <span className="badge bg-danger me-1">Bestseller</span>
                  </a>
                </div>
                <p className="lead">
                  <span className="me-1">
                  ₹<del>{additem.price * 2}</del>
                  </span>
                  <span>{additem.price}</span>
                </p>
                <strong>
                  <p style={{ fontSize: 20 }}>Description</p>
                </strong>
                <p>{additem.description}</p>
                <form className="d-flex justify-content-left">
                  <div className="form-outline me-1" style={{ width: 100 }}>
                    <input
                      type="number"
                      defaultValue={1}
                      className="form-control"
                    />
                  </div>

                  <Link
                    className="btn btn-primary ms-1"
                    to="/Cart"
                    onClick={() => handleAdd(additem)}
                  >
                    Add to cart
                    <i className="fas fa-shopping-cart ms-1" />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetails;
