import React, { useEffect, useState } from "react";
import "./project.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((result) => {
        let Data = result.map((item) => {
          return {
            ...item,
            quantity: 0,
          };
        });
        setdata(Data);
      });
    });
  }, []);

  const Product = (id) => {
    fetch(`https://fakestoreapi.com/products/category/${id}`).then((res) =>
      res.json().then((results) => {
        setdata(results);
      })
    );
  };

  return (
    <>
      <div
        className="container "
        style={{ paddingTop: "100px", background: "white" }}
      >
        <div className="justify-content-center">
          <h1
            className="text-center bg-black text-white  p-2"
            style={{ height: 70, borderRadius: 15 }}
          >
            New Arrivals
          </h1>

          <button
            type="button"
            onClick={() => {
              Product("men's clothing");
            }}
            class="btn btn-outline-primary btn-rounded m-5 hover-shadow "
            // data-mdb-ripple-color="dark"
          >
            Man's Cloth
          </button>

          <button
            type="button"
            class="btn btn-outline-primary btn-rounded m-5"
            data-mdb-ripple-color="dark"
            onClick={() => {
              Product("women's clothing");
            }}
          >
            women's Cloth
          </button>

          <button
            type="button"
            onClick={() => {
              Product("electronics");
            }}
            class="btn btn-outline-primary btn-rounded m-5"
            data-mdb-ripple-color="dark"
          >
            Eletronics
          </button>

          <button
            type="button"
            onClick={() => {
              Product("jewelery");
            }}
            class="btn btn-outline-primary btn-rounded m-5"
            data-mdb-ripple-color="dark"
          >
            jewelery
          </button>
        </div>
     
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="my-3">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top  "
                        alt="Chicago Skyscrapers"
                        width={50}
                        height={250}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">{item.title}</h5>
                      </div>
                      <ul className="list-group list-group-light list-group-small">
                        <li className="list-group-item px-4">
                          Rate:{item.rating.rate}
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star "
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span class="fa fa-star"></span>
                        </li>
                        <li className="list-group-item px-4">
                          Price:₹{item.price}
                        </li>
                        <li className="list-group-item px-4">
                          catogary:{item.category}
                        </li>

                        <Link
                          to="/product/productdetails"
                          type="button"
                          class="btn btn-primary btn-rounded"
                          state={{ from: `${item.id}` }}
                        >
                          Add To Cart
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {data.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="my-3">
                    <div className="card " style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        className="card-img-top "
                        alt="Chicago Skyscrapers"
                        width={100}
                        height={350}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.discription}</p>
                      </div>
                      <ul className="list-group list-group-light list-group-small">
                      <li className="list-group-item px-4">
                          Rate:{item.rating.rate}
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star "
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span
                            class="fa fa-star"
                            style={{ color: "orange" }}
                          ></span>
                          <span class="fa fa-star"></span>
                        </li>
                        <li className="list-group-item px-4">
                          Price: ₹{item.price}{" "}
                        </li>
                        <li className="list-group-item px-4">
                          catogary:{item.category}
                        </li>

                        <Link
                          to="/product/productdetails"
                          type="button"
                          class="btn btn-primary btn-rounded"
                          state={{ z: `${item.id}` }}
                        >
                          Add Item
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
