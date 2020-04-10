import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
function SectionHome() {
  return (
    <div>
      <div className="container">
        <div className="row  ">
          <div className="col">
            <div className="mt-5 border-bottom">
              <h2 className="pb-5">WATCH MOVIES ONLINE</h2>
            </div>
            <div className="mt-4 mb-3 ml-2">
              <Button variant="danger" className="mr-4">
                Top Rate
              </Button>
              <Button variant="danger">New Releases</Button>
              <Button variant="danger" className="ml-4">
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHome;
