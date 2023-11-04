import { useEffect, useState } from "react";
import Chat from "../../assets/text1.jpg";
import Voice from "../../assets/voice.jpg";
import Emotion from "../../assets/emotion.jpg";
import Heart from "../../assets/heart.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  const [hideElement1, setHideElement1] = useState(false);
  const [hideElement2, setHideElement2] = useState(false);
  const [hideElement3, setHideElement3] = useState(false);
  const [hideElement4, setHideElement4] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        paddingBottom: 70,
        display: "flex",
        cursor: "pointer",
      }}>
      <div
        onMouseOver={() => setHideElement1(true)}
        onMouseLeave={() => setHideElement1(false)}
        data-aos="fade-down"
        style={{
          height: "100vh",
          width: "25vw",
          paddingBottom: 70,
          display: "flex",
          borderRight: "1px solid white",
          backgroundImage: !hideElement1 && `url(${Chat})`,
          backgroundSize: "25vw",
        }}>
        {hideElement1 ? (
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
            }}>
            <>
              <p
                data-aos="fade-up"
                style={{
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                Emotion detection using text analysis
              </p>
              <p
                data-aos="fade-up"
                style={{
                  color: "white",
                  textAlign: "left",
                }}>
                Text-based emotion detection involves analyzing typed content,
                leveraging machine learning and natural language processing
                techniques to interpret and identify the emotional tone conveyed
                within the text
              </p>
            </>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "25vw",
            }}>
            <p
              data-aos="fade-up"
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "white",
              }}>
              Text
            </p>
          </div>
        )}
      </div>
      <div
        onMouseOver={() => setHideElement2(true)}
        onMouseLeave={() => setHideElement2(false)}
        data-aos="fade-up"
        style={{
          height: "100vh",
          width: "25vw",
          paddingBottom: 70,
          display: "flex",
          borderRight: "1px solid white",
          backgroundImage: !hideElement2 && `url(${Voice})`,
          backgroundSize: "25vw",
        }}>
        {hideElement2 ? (
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
            }}>
            <>
              <p
                data-aos="fade-up"
                style={{
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                Emotion detection using voice
              </p>
              <p
                data-aos="fade-up"
                style={{
                  color: "white",
                  textAlign: "left",
                }}>
                Voice-based emotion detection entails analyzing spoken content,
                employing machine learning and signal processing techniques to
                interpret and identify the emotional cues conveyed through
                speech patterns and audio features
              </p>
            </>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "25vw",
            }}>
            <p
              data-aos="fade-up"
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "white",
              }}>
              Voice
            </p>
          </div>
        )}
      </div>
      <div
        onMouseOver={() => setHideElement3(true)}
        onMouseLeave={() => setHideElement3(false)}
        data-aos="fade-down"
        style={{
          height: "100vh",
          width: "25vw",
          paddingBottom: 70,
          display: "flex",
          borderRight: "1px solid white",
          backgroundImage: !hideElement3 && `url(${Emotion})`,
          backgroundSize: "25vw",
        }}>
        {hideElement3 ? (
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
            }}>
            <>
              <p
                data-aos="fade-up"
                style={{
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                Emotion detection using expression
              </p>
              <p
                data-aos="fade-up"
                style={{
                  color: "white",
                  textAlign: "left",
                }}>
                Decoding emotions through visual cues involves analyzing facial
                expressions and visual features, utilizing machine to interpret
                and identify the underlying emotional context within a selfie or
                facial image
              </p>
            </>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "25vw",
            }}>
            <p
              data-aos="fade-up"
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "white",
              }}>
              Expression
            </p>
          </div>
        )}
      </div>
      <div
        onMouseOver={() => setHideElement4(true)}
        onMouseLeave={() => setHideElement4(false)}
        data-aos="fade-up"
        style={{
          height: "100vh",
          width: "25vw",
          paddingBottom: 70,
          display: "flex",
          backgroundImage: !hideElement4 && `url(${Heart})`,
          backgroundSize: "25vw",
        }}>
        {hideElement4 ? (
          <div
            style={{
              backgroundColor: "#3371E3",
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              padding: 10,
            }}>
            <>
              <p
                data-aos="fade-up"
                style={{
                  fontSize: 30,
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}>
                Stress detection using HRV
              </p>
              <p
                data-aos="fade-up"
                style={{
                  color: "white",
                  textAlign: "left",
                }}>
                Deciphering stress levels through heart rate variations involves
                analyzing physiological indicators and cardiac patterns,
                employing machine learning and signal processing techniques to
                interpret and identify the underlying stress levels based on
                heart rate variations and related biometric data
              </p>
            </>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "25vw",
            }}>
            <p
              data-aos="fade-up"
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "white",
              }}>
              Heart Rate Variation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
