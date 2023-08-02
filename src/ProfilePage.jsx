import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const ProfilePage = () => {
    const items=useSelector((state) =>state.cart)
  return (
    <>
   <section style={{ backgroundColor: "#eee",marginTop:"50px" }}>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/RegisterForm1">User</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">Patel Rohit</h5>
            <p className="text-muted mb-1">ReactJs Developer</p>
            <p className="text-muted mb-4">
                Vavol, Gandhinagar
            </p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">
                Follow
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Message
              </button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-globe fa-lg text-warning" />
                <p className="mb-0"></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-github fa-lg"
                  style={{ color: "#333333" }}
                />
                <p className="mb-0"></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-twitter fa-lg"
                  style={{ color: "#55acee" }}
                />
                <p className="mb-0"></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ color: "#ac2bac" }}
                />
                <p className="mb-0"></p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-facebook-f fa-lg"
                  style={{ color: "#3b5998" }}
                />
                <p className="mb-0"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Rohit Patel</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Moghariyarohit@gmail.com</p>
              </div>
            </div>
            <hr />
            
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">8306047492</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                    Shahajanand Shyam, Vavol, Gandhinaghagar
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">
                    Your Order
                  </span>{" "}
                                </p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>
                 In Cart: {items.length}
                </p>
                
                
                {/* <div className="progress rounded mb-2" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div> */}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ProfilePage