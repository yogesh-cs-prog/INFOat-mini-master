import React, { useState } from "react";
import VerticalAlignCard from "../Components/UiKits/Grid/VerticalAlign";
import { Card, CardBody, CardColumns, Col, Row } from "reactstrap";
import { P } from "../AbstractElements";
import { VerticalAlignment } from "../Constant";
import HeaderCard from "../Components/Common/Component/HeaderCard";
import WelcomeCards from "../OurComps/WelcomeCards";
import CarToon from "../assets/images/dashboard/cartoon.svg";

const local = {
  local: {
    width: "100%",
    marginLeft: "0px",
  },
};
function Welcome() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Choose your role
      </h1>
      <Card className="align-items-center ">
        <div style={{ marginTop: "30px" }}>
          <Col>
            <Row
              style={local.local}
              className="row  col-xl-4 col-lg-6 col-md-6 col-sm-10  col-xs-6  "
            >
              <WelcomeCards
                role="Students"
                rolemessage="Hey Students,Experience a digitalized work progress."
                image={CarToon}
              />
            </Row>
            <Row
              style={local.local}
              className="row  col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-6"
            >
              <WelcomeCards
                role="Staffs"
                rolemessage="Click here to manage your student's details in a computerized manner."
                image={CarToon}
              />
            </Row>
            <Row
              style={local.local}
              className="row  col-xl-4 col-lg-6 col-md-6 col-sm-10 col-xs-6"
            >
              <WelcomeCards
                role="HODs"
                rolemessage="Now you can access your whole department with a single click."
                image={CarToon}
              />
            </Row>
          </Col>
        </div>
      </Card>
    </>
  );
}

export default Welcome;
