import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

import registerImg from "../assets/images/register.png";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Register Berhasil. Silakan gunakan untuk login");
    onRegister();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user"></div>
                <h2>Register</h2>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      value={username}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn login__btn auth__btn" type="submit">
                    Buat Akun
                  </Button>
                  <Link to={"/login"}></Link>
                </Form>
                <p>
                  Sudah punya akun?<Link to={"/login"}> Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
