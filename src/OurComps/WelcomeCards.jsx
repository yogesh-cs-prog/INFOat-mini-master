import React, { useState } from "react";
import { Card, CardBody, Col, Media, Button } from "reactstrap";
import { H4, P, Btn, Image } from "../AbstractElements";

const WelcomeCards = ({ role, rolemessage, image }) => {
  const [card, setCard] = useState({
    cards: {
      backgroundColor: "white",
    },
    role: {
      color: "black",
    },
    btn: {
      backgroundColor: "#7366FF",
      padding: "6px",
      color: "white",
      width: "150px",
      borderRadius: "10px",
      outline: "none",
    },
  });

  const handleClick = () => {
    setCard({
      cards: {
        backgroundColor: "#7366FF",
      },
      role: {
        color: "white",
      },
      btn: {
        backgroundColor: "white",
        padding: "6px",
        color: "black",
        outline: "white",
        width: "150px",
        borderRadius: "10px",
      },
    });
  };
  const handleClick2 = () => {
    setCard({
      cards: {
        backgroundColor: "white",
      },
      role: {
        color: "black",
      },
      btn: {
        backgroundColor: "#7366FF",
        padding: "6px",
        color: "white",
        width: "150px",
        borderRadius: "10px",
      },
    });
  };
  return (
    <Col>
      <Card
        style={card.cards}
        onMouseOver={handleClick}
        onMouseOut={handleClick2}
      >
        <CardBody>
          <Media>
            <Media body>
              <div className="greeting-user">
                <h4 style={card.role} attrH4={{ className: "f-w-600" }}>
                  {role}
                </h4>
                <p style={card.role}>{rolemessage}</p>
                <div className="whatsnew-btn ">
                  <button style={card.btn}>
                    <p>Click to continue</p>
                  </button>
                </div>
              </div>
            </Media>
            <div>
              <div className="badge f-10 p-0" id="txt" />
            </div>
          </Media>
          <div className="cartoon"></div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WelcomeCards;
