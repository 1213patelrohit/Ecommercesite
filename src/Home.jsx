import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Home = () => {
  const [catogary, setcatogary] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5").then((res) => {
      res.json().then((results) => {
        setcatogary(results);
      });
    });
  }, []);
  const ctgry = (id) => {
    fetch(`https://fakestoreapi.com/products/category/${id}`).then((res) =>
      res.json().then((results) => {
        setcatogary(results);
        console.log(results);
      })
    );
  };

  return (
    <>
      <>
        {/* carousel */}
        <div
          style={{ color: "white" }}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Wild Landscape"
              />
              
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Camera"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Exotic Fruits"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section>
  <div className="row">
    <div className="col-md-6 pt-4 gx-5 mb-4">
      <div
        className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
        // data-mdb-ripple-color="light"
      >
        <img
          src="https://img.freepik.com/free-vector/flat-abstract-sale-banner_23-2149447128.jpg?size=626&ext=jpg&ga=GA1.1.1011931598.1684817571&semt=ais"  height={550} width={1150}
          // className="img-fluid"
        />
        <a href="#!">
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          />
        </a>
      </div>
    </div>
    <div className="col-md-6 gx-5 pt-4 mt-5 mt-5 mb-4">
      <h4>
        <strong>Facilis consequatur eligendi</strong>
      </h4>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        consequatur eligendi quisquam doloremque vero ex debitis veritatis
        placeat unde animi laborum sapiente illo possimus, commodi dignissimos
        obcaecati illum maiores corporis.
      </p>
      <p>
        <strong>Doloremque vero ex debitis veritatis?</strong>
      </p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque
        voluptate nesciunt laborum incidunt. Officia, quam consectetur. Earum
        eligendi aliquam illum alias, unde optio accusantium soluta, iusto
        molestiae adipisci et?<br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque
        voluptate nesciunt laborum incidunt. Officia, quam consectetur. Earum
        eligendi aliquam illum alias, unde optio accusantium soluta, iusto
        molestiae adipisci et?
      </p>
    </div>
  </div>
  {/* <div className="widget-wrapper wow fadeIn" data-wow-delay="0.4s">
  <h4>Subscription form:</h4>
  <br />
  <div className="card">
    <div className="card-block">
      <p>
        <strong>Subscribe to our newsletter</strong>
      </p>
      <p>Once a week we will send you a summary of the most useful news</p>
      <div className="md-form">
        <i className="fa fa-user prefix" />
        <input type="text" id="form1" className="form-control" />
        <label htmlFor="form1">Your name</label>
      </div>
      <div className="md-form">
        <i className="fa fa-envelope prefix" />
        <input type="text" id="form2" className="form-control" />
        <label htmlFor="form2">Your email</label>
      </div>
      <button className="btn btn-default">Submit</button>
    </div>
  </div>
</div> */}
</section>
        {/*Main layout*/}
        <main>
          <div className="container">
            
            <nav
              className="navbar navbar-expand-lg navbar-dark mt-3m  mb-5 shadow p-2"
              style={{ backgroundColor: "#607D8B" }}
            >
              
              <div className="container-fluid">
                <a className="navbar-brand">Categories:</a>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent2"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item acitve ">
                      <div className="dropdown text">
                        <button
                          className="btn  bg-blue-300 dropdown-toggle "
                          type="button"
                          id="dropdownMenuButton"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          All Categories
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              type="button"
                              onClick={() => {
                                ctgry("men's clothing");
                              }}
                            >
                              Man's were
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              type="button"
                              onClick={() => {
                                ctgry("women's clothing");
                              }}
                            >
                              Women's Were
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              type="buttons"
                              onClick={() => {
                                ctgry("electronics");
                              }}
                            >
                              Eletronics
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              type="buttons"
                              onClick={() => {
                                ctgry("jewelery");
                              }}
                            >
                              jewelery
                            </a>
                          </li>
                        </ul>
                      </div>

                     
                    </li>
                   
                   
                  </ul>
                </div>
              </div>
              {/* Container wrapper */}
            </nav>
            {/* Navbar */}
            {/* Products */}
            <section>
              <div className="text-center">
                <div className="row">
                  {catogary.map((item) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6 mb-4">
                          <div className="card">
                            <div
                              className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image}
                                className="w-200"
                                height={350}
                              />
                              <a href="#!">
                                <div className="mask">
                                  <div className="d-flex justify-content-start align-items-end h-100">
                                    <h5>
                                      <span className="badge bg-dark ms-2">
                                        NEW
                                      </span>
                                    </h5>
                                  </div>
                                </div>
                                <div className="hover-overlay">
                                  <div
                                    className="mask"
                                    style={{
                                      backgroundColor:
                                        "rgba(251, 251, 251, 0.15)",
                                    }}
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="card-body">
                              <a href="" className="text-reset">
                                <h5 className="card-title mb-2">
                                  {item.title}
                                </h5>
                              </a>
                              <h6 className="mb-3 price">
                                Price: {item.price}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Pagination */}
            <nav
              aria-label="Page navigation example"
              className="d-flex justify-content-center mt-3"
            >
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </main>
        {/*Main layout*/}
       


        <Footer />
      </>
    </>
  );
};

export default Home;
