import React from "react";
import { Col, Container, Row, Button } from "reactstrap";
import StudentLayout from "../../ourLayouts/student/Layout";
import { Breadcrumbs } from "../../AbstractElements";
import UsersProfileContain from "../../OurComps/Users/UsersProfile";

import UserTableView from "../../OurComps/Users/UsersProfile/UserTableView";
import { Link } from "react-router-dom";

import FileManagerContain from "../../OurComps/FileManager";

function StudentProfile({ profile }) {
  return (
    <StudentLayout>
      <UsersProfileContain />

      <>
        <Container fluid={true}>
          <div className="edit-profile">
            <Row>
              <Col md="12">
                <FileManagerContain />
                <Button attrBtn={{ color: "primary", size: "sm" }}>
                  <i className="fa fa-pencil"></i>{" "}
                  <Link
                    style={{ color: "white" }}
                    to={`/student/editprofile`}
                    target="_self"
                  >
                    Edit your profile
                  </Link>
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    </StudentLayout>
  );
}

export default StudentProfile;
