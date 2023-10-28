import React, { useState } from "react";
import "./newsletter.css";
import OpenAI from "openai";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 100,
      });
      setResult(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Tanyakan Rekomendasi Perjalanan Terbaik</h2>

              <div className="newsletter__input">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Silahkan isi ini..."
                />

                <button
                  onClick={handleClick}
                  disabled={loading || prompt.length === 0}
                  className="btn newsletter__btn"
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
              </div>

              <p>{result}</p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
