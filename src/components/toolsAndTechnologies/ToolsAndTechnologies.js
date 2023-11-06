import TechCard from "../card/TechCard";
import Python from "../../assets/python.png";
import ReactImg from "../../assets/react.png";
import Mongo from "../../assets/mongo.jpg";
import Tensorflow from "../../assets/tensorflow.png";
import Keras from "../../assets/keras.png";
import SKLearn from "../../assets/sklearn.png";
import Expo from "../../assets/expo.png";
import FastApi from "../../assets/fastapi.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ToolsAndTechnologies() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#3371E3",
        height: "100vh",
        textAlign: "center",
        overflowY:'auto'
      }}>
      <h1
        class="text-3xl font-bold p-10"
        data-aos="fade-left"
        style={{ color: "white" }}>
        Tools & Technologies
      </h1>
      <div
        className="max-w-2xl mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-4 "
        data-aos="fade-right"
        style={{
          marginTop: -20,
        }}>
        <TechCard name="Python" image={Python} />
        <TechCard name="React Native" image={ReactImg} />
        <TechCard name="MongoDB" image={Mongo} />
        <TechCard name="TensorFlow" image={Tensorflow} />
        <TechCard name="Keras" image={Keras} />
        <TechCard name="SciKit Learn" image={SKLearn} />
        <TechCard name="Expo" image={Expo} />
        <TechCard name="FastAPI" image={FastApi} />
      </div>
    </div>
  );
}
