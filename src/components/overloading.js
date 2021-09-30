import React, { useState } from "react";
import basket from "../assets/basket.png";
import apple from "../assets/apple.jpg";
import overloadingtxt from "../assets/overloading.txt";
import { useTransition, animated } from "react-spring";

function Overloading() {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -200, y: -100, opacity: 0, width: 60, height: 60 },
    enter: { x: 180, y: 70, opacity: 1, width: 60, height: 60 },
    leave: { x: -1000, y: 50, opacity: 0, width: 150, height: 150 },
  });
  return (
    <>
      <div>
        {transition((style, item) =>
          item ? (
            <>
              <body
                style={{
                  backgroundImage: `url(${basket})`,
                  backgroundSize: "180px 150px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "80px 180px",
                }}
              >
                <div class="row">
                  <div class="col-sm">
                    <animated.h4 style={{ marginLeft: "8px" }}>
                      What is method over Loading..?
                    </animated.h4>
                    <animated.p style={{ marginLeft: "8px" }}>
                      consider the basket as a class and method as apple()
                    </animated.p>
                    <animated.img src={apple} style={style} alt="error" />
                    <div style={{ marginTop: "220px" }}>
                      <p class="lead" style={{ marginLeft: "8px" }}>
                        Method overloading is a concept of Java in which we can
                        create multiple methods of the same name in the same
                        class, and all methods work in different ways. When more
                        than one method of the same name is created in a Class,
                        this type of method is called Overloaded Methods.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm">
                    <h3>Example of Overloading</h3>
                    <div class="ratio ratio-4x3">
                      <iframe
                        src={overloadingtxt}
                        style={{ marginLeft: "5px" }}
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm">
                    <h3 style={{ marginLeft: "8px" }}>
                      Quiz related to overloading
                    </h3>
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSefrOLuk1-A2aDlKZg1cULY_7At-5HzSHrrNX13NUJb2FtF8w/viewform?embedded=true"
                      class="ratio ratio-4x3"
                      height="500"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                    >
                      Loading…
                    </iframe>
                  </div>
                  {/* https://docs.google.com/forms/d/e/1FAIpQLSefrOLuk1-A2aDlKZg1cULY_7At-5HzSHrrNX13NUJb2FtF8w/viewform?usp=pp_url&entry.853386629=method+overloading&entry.877086558=False&entry.2073011212=All+of+the+mentioned&entry.1498135098=Yes.+That+method+is+properly+overloaded.&entry.1424661284=Duplicated.+Because,+var+args+(int+%E2%80%A6+a)+are+nothing+but+the+arrays.+So+here,+(int+%E2%80%A6+a)+and+(int%5B%5D+a)+are+the+same. */}
                  <div class="col-sm">
                    <div>
                      <iframe
                        src="https://www.jdoodle.com/online-java-compiler/"
                        class="ratio ratio-4x3"
                        height="500px"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </body>
            </>
          ) : (
            <>
              <animated.h4 style={{ marginLeft: "8px" }}>
                What is method over Loading..?
              </animated.h4>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          )
        )}
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsVisible((v) => !v);
          }}
        >
          Overloading
        </button>
      </div>
    </>
  );
}

export default Overloading;
