import React from 'react'

const Footer = () => {
  return (
    <>
     <footer
    className="text-center text-white mt-4"
    style={{ backgroundColor: "#607D8B" }}
  >
    {/*Call to action*/}
    <div className="pt-4 pb-2">
      
      
    </div>
    {/*/.Call to action*/}
    <hr className="text-dark" />
    <div className="container">
      {/* Section: Social media */}
      <section className="mb-3">
        {/* Facebook */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.facebook.com/" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://twitter.com/i/flow/login" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.google.com/" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.instagram.com/" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* YouTube */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.youtube.com/" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-youtube" />
        </a>
        {/* Github */}
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.github.com" target='_blank'
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", textColor: "#E0E0E0" }}
    >
      © 2022 Copyright:
      <a className="text-white" href="#">
        FUNSTORE.COM
      </a>
    </div>
    {/* Copyright */}
  </footer>

    </>
  )
}

export default Footer