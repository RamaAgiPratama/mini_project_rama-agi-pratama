import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

import loginImg from "../assets/images/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      alert("Login Berhasil.");
      navigate("/home");
    } else {
      alert("Login gagal. Periksa kembali username dan password.");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user"></div>
                <h2>Login</h2>

                <Form onSubmit={handleSubmit}>
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
                    Login
                  </Button>
                </Form>
                <p>
                  Belum punya akun?<Link to={"/register"}> Buat Akun</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
