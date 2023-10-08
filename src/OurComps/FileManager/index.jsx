import React, { Fragment } from "react";
import { Breadcrumbs, H3 } from "../../AbstractElements";
import FileContent from "./FileContent";

import { Card, Col, Container, Row } from "reactstrap";

const FileManagerContain = () => {
  return (
    <Fragment>
      <h4 style={{ marginBottom: "20px" }}>Your Certificates</h4>
      <Container fluid={true}>
        <Row>
          <Col xl="12" md="12" className="box-col-9">
            <div className="file-content">
              <Card>
                <FileContent />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default FileManagerContain;
