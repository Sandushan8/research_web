import { useState } from "react";
import HomeImage from "../../assets/homepage.jpg";
import HomeImageHover from "../../assets/homepageHover.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  const [hideElement1, setHideElement1] = useState(false);
  return (
    <div
      onMouseOver={() => setHideElement1(true)}
      onMouseLeave={() => setHideElement1(false)}
      style={{
        height: "95vh",
        backgroundImage: !hideElement1
          ? `url(${HomeImage})`
          : `url(${HomeImageHover})`,
        backgroundSize: "100vw",
        paddingTop: 20,
        display: "flex",
        justifyContent: !hideElement1 ? "center" : "space-between",
        flexDirection: hideElement1 && "column-reverse",
        paddingBottom: 50,
        alignItems: hideElement1 && "center",
      }}>
      {hideElement1 && (
        <button
          onClick={() => navigate("/introduction")}
          style={{
            width: 200,
            height: 50,
            backgroundColor: "#3371E3",
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            borderRadius: 4,
          }}>
          Learn More
        </button>
      )}
      <div style={{
        display:'flex',
        flexDirection:'column',
        gap:4
      }}>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 40,
          color: hideElement1 && "#3371E3",
        }}>
        MindRelax
        <br/>
        </p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          color: hideElement1 && "#3371E3",
        }}>
         Smart System for Emotion and Mental Stress Monitoring,
        Detection and Management
      </p>
      </div>
    </div>
  );
}
