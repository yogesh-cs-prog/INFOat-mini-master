import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import UserProfile from "./UserProfile";
import UserDetails from "./UserDetail";
import UserDetails2 from "./UserDetail2";
import UserDetails3 from "./UserDetails3";
import UserDetails4 from "./UserDetail4";
import H3 from "../../../CommonElements/Headings/H3Element";
import { Link } from "react-router-dom";
import CustomizerContext from "../../../_helper/Customizer";
import SvgIcon from "../../../Components/Common/Component/SvgIcon";
const UsersProfileContain = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col xs="12">
              <H3>User Profile</H3>
            </Col>
          </Row>
        </div>
      </Container>

      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <UserProfile />
            {/* <UserDetails />
            <UserDetails2 />
            <UserDetails3 />
            <UserDetails4 /> */}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersProfileContain;
