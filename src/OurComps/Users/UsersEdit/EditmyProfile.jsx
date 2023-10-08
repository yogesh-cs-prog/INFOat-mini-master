import React, { Fragment, useState } from "react";
import { Btn, H4, Image, H5, P } from "../../../AbstractElements";

import { useForm } from "react-hook-form";
import {
  Row,
  Col,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import {
  EditProfile,
  Company,
  Username,
  UsersCountryMenu,
  AboutMe,
  UpdateProfile,
  FirstName,
  LastName,
  Address,
  EmailAddress,
  PostalCode,
  Country,
  City,
} from "../../../Constant";

import { Link } from "react-router-dom";
const EditMyProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onEditSubmit = (data) => {
    alert(data);
  };

  const [url, setUrl] = useState("");

  return (
    <Fragment>
      <Form className="card">
        <CardBody>
          <Row className="mb-2">
            <div className="profile-title">
              <div className="media">
                <Image
                  attrImage={{
                    className: "img-70 m-0 rounded-circle",
                    alt: "",
                    src: `${require("../../../assets/images/user/7.jpg")}`,
                  }}
                />
                <div className="media-body">
                  <Link to={`/student/profile`}>
                    <H5 attrH5={{ className: "mb-1" }}>MARK JECNO</H5>
                  </Link>
                  <P>DESIGNER</P>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col md="5">
              <FormGroup className="mb-3">
                {" "}
                <Label className="form-label">{Company}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Company"
                  {...register("company", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.company && "Company is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="3">
              <FormGroup>
                {" "}
                <Label className="form-label">{Username}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  {...register("Username", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.Username && "Username is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="4">
              <FormGroup>
                {" "}
                <Label className="form-label">{EmailAddress}</Label>
                <Input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  {...register("EmailAddress", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.EmailAddress && "EmailAddress is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup>
                <Label className="form-label">{FirstName}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Company"
                  {...register("FirstName", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.FirstName && "FirstName is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup>
                <Label className="form-label">{LastName}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  {...register("LastName", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.LastName && "LastName is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label className="form-label">{Address}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="Home Address"
                  {...register("Address", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.Address && "Address is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="4">
              <FormGroup>
                {" "}
                <Label className="form-label">{City}</Label>
                <Input
                  className="form-control"
                  type="text"
                  placeholder="City"
                  {...register("City", { required: true })}
                />
                <span style={{ color: "red" }}>
                  {errors.City && "City is required"}{" "}
                </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="3">
              <FormGroup>
                <Label className="form-label">{PostalCode}</Label>
                <Input
                  className="form-control"
                  type="number"
                  placeholder="ZIP Code"
                />
              </FormGroup>
            </Col>
            <Col md="5">
              <FormGroup>
                <Label className="form-label">{Country}</Label>
                <Input
                  type="select"
                  name="select"
                  className="form-control btn-square"
                >
                  {UsersCountryMenu.map((items, i) => (
                    <option key={i}>{items}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md="12">
              <div>
                {" "}
                <Label className="form-label">{AboutMe}</Label>
                <Input
                  type="textarea"
                  className="form-control"
                  rows="5"
                  placeholder="Enter About your description"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          <Button>
            <Link style={{ color: "white" }} to={`/student/profile`}>
              Update profile{" "}
            </Link>
          </Button>
        </CardFooter>
      </Form>
    </Fragment>
  );
};
export default EditMyProfile;
