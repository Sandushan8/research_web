import Card from "../card/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  return (
    <div
      className=" mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-24  lg:grid-cols-1"
        data-aos="fade-left"
        style={{
        maxHeight: "100vh",
        overflowY: "auto",
        margin: 0,
        width: "100vw",
        paddingBottom: 90,
        backgroundColor: "#3371E3",
      }}>
      <div
        className="max-w-2xl mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2 ">
        <Card
          imageurl="./images/sup.jpg"
          name="Dr.Harinda Fernando"
          position="Supervisor"
          redirection="https://www.sliit.lk/faculty-of-computing/staff/harinda.f/"
          redirectionName="Profile"
        />
        <Card
          imageurl="./images/cosup.jpg"
          name="Dr.Samantha Rajapakshe"
          position="Co-supervisor"
          redirection="https://www.sliit.lk/faculty-of-computing/staff/samantha.r/"
          redirectionName="Profile"
        />
      </div>

      <div
        className="max-w-2xl mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-4 ">
        <Card
          imageurl="./images/shiv.jpg"
          name="Shivaani Dushya R."
          redirection="https://www.linkedin.com/in/shivaani-dushya-rajkumar/"
          position="Leader"
          redirectionName="LinkedIn"
        />
        <Card
          imageurl="./images/ihil.jpg"
          name="Dewpura D.A.I.U."
          redirection="https://www.linkedin.com/in/ihill-dewpura-593150193/"
          position="Member"
          redirectionName="LinkedIn"
        />
        <Card
          imageurl="./images/piyoshila.jpg"
          name="Piyoshila F."
          redirection="https://www.linkedin.com/in/piyoshila-fernandez-97060b70/"
          position="Member"
          redirectionName="LinkedIn"
        />
        <Card
          imageurl="./images/chanuth.jpg"
          name="De Silva C.M.K."
          redirection="https://www.linkedin.com/in/chanuth-maduka-38220a223/"
          position="Member"
          redirectionName="LinkedIn"
        />
      </div>
    </div>
  );
}
