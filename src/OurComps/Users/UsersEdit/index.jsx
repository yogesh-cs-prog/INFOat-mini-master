import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import EditMyProfile from "./EditmyProfile";
import MyProfileEdit from "./MyProfile";
import UserTable from "./UserTable";

const UsersEditContain = () => {
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Edit Profile"
        parent="Profile"
        title="Edit Profile"
      />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="12">
              <EditMyProfile />
            </Col>
            <Col md="12">
              <UserTable />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;
