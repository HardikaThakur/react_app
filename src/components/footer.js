import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{ faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

function footer() {
    return (
        <>
        <br />
        <footer class="bg-dark text-light text-center text-lg-start" style={{borderTop:'10px solid #ddd',height:'160px',lineHeight:'40px',backgroundColor:'white'}}>
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 px-0 mb-md-0">
              <h5 class="text-uppercase">Programming World</h5>
              <p>
                Its an e-learning platform built to visualise the programming concepts diagramatically.
              </p>
            </div>
          
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contact us</h5>
              <p>
               E-mail id: hardikat@mitrmedia.com<br />
               Copyright @2021 Hardika Thakur 
              </p>
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">SOCIAL</h5>
              <a href="https://www.youtube.com/c/jamesqquick" className="Youtube Social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <br/>
              <a href="https://github.com/" className="Github Social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}

export default footer;
