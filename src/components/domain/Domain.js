import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Card from "react-bootstrap/Card";

export default function Domain() {
  const [selected, setSelected] = useState("bg");
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      style={{
        maxHeight: "100vh",
        width: "100vw",
        overflowY: "auto",
        display: "flex",
        cursor: "pointer",
        flexDirection: "column",
        paddingBottom: 70,
        backgroundColor: "#3371E3",
      }}>
      <div
        style={{
          display: "flex",
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}>
        <div
          onClick={() => setSelected("bg")}
          style={{
            padding: 10,
            width: "25vw",
            textAlign: "center",
            borderBottom: "1px solid white",
            borderRight: "1px solid white",
            color: selected === "bg" && "black",
            backgroundColor: selected === "bg" && "white",
            borderTop: selected === "bg" && "1px solid black",
          }}>
          Background
        </div>
        <div
          onClick={() => setSelected("rg")}
          style={{
            padding: 10,
            width: "25vw",
            textAlign: "center",
            borderBottom: "1px solid white",
            borderRight: "1px solid white",
            color: selected === "rg" && "black",
            backgroundColor: selected === "rg" && "white",
            borderTop: selected === "rg" && "1px solid black",
          }}>
          Research Gap
        </div>
        <div
          onClick={() => setSelected("rp")}
          style={{
            padding: 10,
            width: "25vw",
            textAlign: "center",
            borderBottom: "1px solid white",
            borderRight: "1px solid white",
            color: selected === "rp" && "black",
            backgroundColor: selected === "rp" && "white",
            borderTop: selected === "rp" && "1px solid black",
          }}>
          Research Problem
        </div>
        <div
          onClick={() => setSelected("ro")}
          style={{
            padding: 10,
            width: "25vw",
            textAlign: "center",
            borderBottom: "1px solid white",
            borderRight: "1px solid white",
            color: selected === "ro" && "black",
            backgroundColor: selected === "ro" && "white",
            borderTop: selected === "ro" && "1px solid black",
          }}>
          Research Objectives
        </div>
      </div>
      {selected === "bg" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}>
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              minHeight: "25vh",
              padding: 10,
            }}>
            <>
              <p
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 8,
                  fontWeight: 400,
                }}>
                The prevalence of mental stress worldwide encompasses both
                positive and negative manifestations. Various global surveys and
                research studies have unveiled the multifaceted ways individuals
                articulate their emotions amidst mental stress, employing
                methods such as text, speech, facial expressions, and physical
                activities.
                <br />
                <br />
                Stress can be attributed to factors both within and beyond one's
                control, impacting bodily functions and systems governed by the
                central nervous system, affecting the cardiovascular, endocrine,
                and immune systems. Negative mental stress significantly
                correlates with health issues like cardiovascular diseases,
                depression, headaches, diabetes, and obesity, and is associated
                with neurodegenerative diseases and mental disorders.
                <br />
                <br />
                This widespread stress often leads to discomfort and
                necessitates medical attention, at times escalating to
                self-harming or suicidal thoughts, underscoring the importance
                of effective support strategies, such as breathing exercises and
                physical activities, to alleviate its adverse impact.
                Effectively managing emotions is crucial in addressing negative
                mental stress, particularly in mitigating the effects of
                emotions like anger and sadness. However, there remains a
                scarcity of systems capable of continuous and precise emotional
                monitoring to offer personalized stress reduction strategies,
                indicating a critical gap in current support mechanisms.
              </p>
            </>
          </div>
        </div>
      ) : selected === "rg" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}>
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              minHeight: "25vw",
              padding: 10,
            }}>
            <>
              <div
                style={{
                  display: "flex",
                  width: "100vw",
                  gap: 10,
                  paddingRight: 20,
                }}>
                <Card
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    height: 200,
                  }}>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}>
                    Identifying Negative Emotions using Text Analysis
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        Predicting negative emotion through text analysis and
                        providing proper suggestions to reduce negative emotion.
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    height: 200,
                  }}>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}>
                    Identifying Negative Emotions using Voice Rythem
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        Achieving 96% of accuracy in preditcting emotion through
                        voice increasing the number of features from the audio
                        files.
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    height: 200,
                  }}>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}>
                    Identifying Emotion of Low-Intensity Facial Expression
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        Achieving 95% of accuracy in predicting correct emotion
                        of low-intensity facial expressions.
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>

                <Card
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    height: 200,
                  }}>
                  <Card.Header
                    style={{
                      textAlign: "center",
                      fontSize: 18,
                      fontWeight: "bold",
                      marginBottom: 10,
                    }}>
                    Identifying Negative Stress using Heart Rate Variations
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        In addition to stress level, also considering the step
                        count or the activeness to identify the negative stress.
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
              </div>
            </>
          </div>
        </div>
      ) : selected === "rp" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}>
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              minHeight: "25vh",
              padding: 10,
            }}>
            <>
              <p
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 8,
                  fontWeight: 400,
                }}>
                While extensive research addresses mental stress, there remains
                a notable absence of comprehensive solutions to effectively
                monitor and guide individuals dealing with negative stress.
                <br />
                <br />
                <b>Existing studies highlight several gaps:</b> the lack of
                systems predicting and providing tailored suggestions for
                reducing negative mental stress based on text analysis and
                emotional patterns expressed by individuals.
                <br />
                <br />
                Similarly, the absence of solutions analyzing heart rate
                variations to predict stress levels and prompt users with
                physical activity suggestions poses a limitation.
                <br />
                <br />
                Moreover, despite the correlation between facial expressions and
                mental stress, there's a dearth of mobile applications offering
                real-time emotion-based guidance to alleviate negative stress
                through monitored facial expressions.
                <br />
                <br />
                Additionally, while stress detection via user voice exists,
                there's a lack of systems providing suggestions to reduce
                negative stress by analyzing voice patterns and predicting
                emotions.
              </p>
            </>
          </div>
        </div>
      ) : selected === "ro" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
          }}>
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
              minHeight: "25vh",
            }}>
            <>
              <div
                style={{
                  textAlign: "center",
                  padding: 10,
                }}>
                <Card
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 10,
                  }}>
                  <Card.Body>
                    <p>
                      The main objective of this research project is to develop
                      a mobile app that can predict stress using text, voice,
                      facial expressions, and heart rate variation and to
                      provide solutions for stress relief.
                    </p>
                  </Card.Body>
                </Card>

                <div
                  style={{
                    display: "flex",
                    width: "100vw",
                    gap: 10,
                    paddingRight: 20,
                  }}>
                  <Card
                    style={{
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 8,
                      height: 200,
                    }}>
                    <Card.Header
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                      }}>
                      Identifying Negative Emotions using Text Analysis
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                          Predicting negative emotion through text analysis and
                          providing proper suggestions to reduce negative
                          emotion.
                        </p>
                      </blockquote>
                    </Card.Body>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 8,
                      height: 200,
                    }}>
                    <Card.Header
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                      }}>
                      Identifying Negative Emotions using Voice Rythem
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                          Achieving 96% of accuracy in preditcting emotion
                          through voice increasing the number of features from
                          the audio files.
                        </p>
                      </blockquote>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 8,
                      height: 200,
                    }}>
                    <Card.Header
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                      }}>
                      Identifying Emotion of Low-Intensity Facial Expression
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                          Achieving 95% of accuracy in predicting correct
                          emotion of low-intensity facial expressions.
                        </p>
                      </blockquote>
                    </Card.Body>
                  </Card>

                  <Card
                    style={{
                      backgroundColor: "white",
                      padding: 10,
                      borderRadius: 8,
                      height: 200,
                    }}>
                    <Card.Header
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                      }}>
                      Identifying Negative Stress using Heart Rate Variations
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <p>
                          In addition to stress level, also considering the step
                          count or the activeness to identify the negative
                          stress.
                        </p>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          </div>
        </div>
      ) : null}
    </div>
  );
}
