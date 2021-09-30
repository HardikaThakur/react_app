import React, { useState } from "react";
import box1 from "../assets/box1.jpeg";
import box2 from "../assets/box2.jpg";
import overridingtxt from "../assets/overriding.txt";
import "../App.css";
import { useTransition, animated } from "react-spring";

function Overriding() {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -1000, y: 50, opacity: 0, width: 150, height: 150 },
    enter: { x: 30, y: 50, opacity: 1, width: 150, height: 150 },
    leave: { x: -1000, y: 50, opacity: 0, width: 150, height: 150 },
  });
  return (
    <>
      <div>
        {transition((style, item) =>
          item ? (
            <>
              <div class="row">
                <div class="col-sm">
                  <div>
                    <animated.h4 style={{ marginLeft: "8px" }}>
                      What is method over riding..?
                    </animated.h4>
                    <animated.h5 style={{ marginLeft: "8px" }}>
                      Method of base class
                    </animated.h5>
                    <animated.p style={{ marginLeft: "8px" }}>
                      consider the box as a method()
                    </animated.p>
                    <animated.img src={box1} style={style} />
                  </div>
                  <div>
                    <div style={{ marginTop: "55px" }}>
                      <p class="lead" style={{ marginLeft: "8px" }}>
                        If subclass (child class) has the same method as
                        declared in the parent class, it is known as method
                        overriding in Java. In other words, If a subclass
                        provides the specific implementation of the method that
                        has been declared by one of its parent class, it is
                        known as method overriding.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <h3>Example of overriding</h3>
                  <div class="ratio ratio-4x3">
                    <iframe
                      src={overridingtxt}
                      style={{ marginLeft: "5px" }}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm">
                  <h3 style={{ marginLeft: "8px" }}>
                    Quiz related to Overriding{" "}
                  </h3>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScjTeMASBvSr4l6o48kkaMJArPCRodS0B_Dyr1BekIbh6538g/viewform?embedded=true"
                    class="ratio ratio-4x3"
                    height="500"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
                {/* https://docs.google.com/forms/d/e/1FAIpQLScjTeMASBvSr4l6o48kkaMJArPCRodS0B_Dyr1BekIbh6538g/viewform?usp=pp_url&entry.877086558=super&entry.1498135098=Method+overriding&entry.1424661284=final&entry.2606285=final,+static,+public&entry.1948871405=7,+Both+x,and+y+are+pointing+to+the+same+array. */}
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
            </>
          ) : (
            <div>
              <animated.h4 style={{ marginLeft: "8px" }}>
                What is method over riding..?
              </animated.h4>
              <animated.h5 style={{ marginLeft: "8px" }}>
                Method of Derived class
              </animated.h5>
              <animated.p style={{ marginLeft: "8px" }}>
                consider the box as a method()
              </animated.p>
              <animated.img
                src={box2}
                style={{
                  marginLeft: 30,
                  marginTop: 50,
                  width: 150,
                  height: 150,
                }}
              />
            </div>
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
          OverRiding
        </button>
      </div>
    </>
  );
}
export default Overriding;
