import React from "react";

function AuthBanner (props:Object) {
  return (
    <div className="col-md-4 bg-grey">
      <div className="p-4 p-md-5">
        <div className="mb-70">
          <img src="img/logo.svg" alt="logo" />
        </div>
        <div className="mb-150">
          <h1 className="m-0">Become a modern arbitrator, Now.</h1>
        </div>
        <div className="text-center">
          <img
            src="/img/signup-img.svg"
            className="signup-img"
            alt="Signup Image"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthBanner;
