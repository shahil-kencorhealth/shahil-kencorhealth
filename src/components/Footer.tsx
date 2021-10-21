import React from "react";

export default function Footer() {
  return (
    <div>
     <footer className="footer mt-auto text-lg-left">
    <div className="container justify-content-between d-flex align-items-center flex-column flex-lg-row flex-wrap text-center py-2">
        <ul className="footer-links list-inline d-flex flex-wrap mb-2 mb-lg-0">
            <li><a href="javascript:;">About Us</a></li>
            <li><a href="javascript:;">Help</a></li>
            <li><a href="javascript:;">Terms and Privacy</a></li>
        </ul>
        <a href="javascript:;" className="ms-0 ms-md-4">
            Powered by Kencor Health 
            <img src="img/logo-small.png" height="35" className="ms-2 ms-md-3" alt="Logo Small"/>
        </a>
    </div>
</footer>
    </div>
  );
}
