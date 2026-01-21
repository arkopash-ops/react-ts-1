import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="d-flex flex-wrap align-items-center py-3 border-top bg-dark">
      <div className="col-md-4 d-flex align-items-center justify-content-start">
        <a
          href="/"
          className="me-2 text-light text-decoration-none"
          aria-label="Bootstrap"
        >
          <i className="bi bi-bootstrap-fill fs-4"></i>
        </a>
      </div>

      <div className="col-md-4 text-center">
        <span className="text-light">
          © 2025 Company, Inc
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mb-0">
        <li className="ms-3 text-light">
          <i className="bi bi-instagram fs-5"></i>
        </li>
        <li className="ms-3">
          <a className="text-light" href="#" aria-label="Facebook">
            <i className="bi bi-facebook fs-5"></i>
          </a>
        </li>
      </ul>

    </footer>
  );
};


