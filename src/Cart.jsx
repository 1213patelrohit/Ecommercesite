import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, remove, removeOnePRoduct } from "./store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const PROD = useSelector((state) => state.cart);

  const getTotal = () => {
    let total = 0;
    PROD.map((item) => {
      total = total + item.quantity * item.price;
    });
    return total;
  };

  const disptch = useDispatch();
  const handleRemove = (productId) => {
    disptch(remove(productId));
  };

  return (
    <>
      <section
        className="h-100"
        style={{ backgroundColor: "#eee", paddingTop: "100px" }}
      >
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-bet ween align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {PROD.map((product) => (
                <div
                  className="card rounded-3 mb-4"
                  style={{ padding: "10px" }}
                >
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={product.image}
                          className="img-fluid rounded-3"
                          alt="Cotton T-shirt"
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{product.title}</p>
                        <p>
                          <span className="text-muted">
                            {product.discription}{" "}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        {/* Minus button */}
                        <button
                          className="btn btn-link px-2"
                          onClick={() => {
                            if (product.quantity > 1) {
                              disptch(removeOnePRoduct(product));
                            } else {
                              handleRemove(product.id);
                            }
                          }}
                          
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          min={1}
                          value={product.quantity}
                          className="form-control form-control-sm"
                        />
                        {/* Plus Button */}
                        <button
                          className="btn btn-link px-2"
                          onClick={() => disptch(Add(product))}
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-3 offset-lg-1">
                        <h5 className="mb-0">{" ₹ " + product.price}/Qty</h5>
                      </div>

                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i
                            onClick={() => handleRemove(product.id)}
                            className="fas fa-trash fa-lg"/>  
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {PROD.length > 0 ?
              <>
               <div
                style={{
                  background: "white",
                  marginBottom: "10px",
                  height: "50px",
                  textAlign: "center",
                  paddingTop: "10px",
                  fontWeight: "bold",
                  font: "25px",
                  marginLeft: "850px",
                }}
              >
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex">
                  <span style={{ justifyContent: "start" }}>{"Total:"}</span>
                  <span style={{ justifyContent: "end" }}>{getTotal()}</span>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    <Link to="/Checkout">Proceed to Pay</Link>
                  </button>
                </div>
              </div>
              </> 
            : 
            <>
            <h4 className="text-center"> Cart is Empty... </h4>  
            
            <Link to="/product">
            <h3 className="text-center">Please Click here to Purchase Products...  </h3> 
            </Link>
            </>
            }

            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
