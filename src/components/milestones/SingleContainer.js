import { useState } from "react";

export const SingleContainer = ({ left, date, topic, content, marks }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      id={topic}
      key={topic}
      style={{
        height: 250,
        width: "100%",
        backgroundColor: "#3371E3",
        display: "flex",
      }}>
      <div
        id="leftCardContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "49.75%",
          backgroundColor: "#3371E3",
          padding: 20,
          cursor: "pointer",
        }}>
        {left ? (
          <div
            // id={topic}
            // key={topic}
            // data-aos="flip-left"
            // data-aos-delay="200"
            // class={
            //   "notification is-light has-text-centered aos-init aos-animate"
            // }
            onMouseOver={() => setRotate(true)}
            onMouseLeave={() => setRotate(false)}
            style={{
              border: "1px solid black",
              height: "100%",
              backgroundColor: "white",
              width: "50%",
              borderRadius: 8,
              padding: 16,
            }}>
            <div
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "left",
              }}>
              {date}
            </div>
            <div
              style={{
                fontWeight: "bold",
                width: "100%",
              }}>
              {topic}
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "left",
                marginTop: 6,
                marginBottom: 6,
              }}>
              {content}
            </div>
            <div>
              <b>Marks Allocated:</b> {marks}
            </div>
          </div>
        ) : null}
      </div>
      <div
        id="line"
        style={{
          width: "0.5%",
          backgroundColor: "black",
          minHeight: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div
          style={{
            height: 20,
            width: 10,
            borderRadius: "50%",
            backgroundColor: "lightGreen",
            rotate: !rotate ? "45deg" : "135deg",
          }}></div>
      </div>
      <div
        id="rightCardContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "49.75%",
          backgroundColor: "#3371E3",
          cursor: "pointer",
          padding: 20,
        }}>
        {!left ? (
          <div
            id={topic}
            key={topic}
            onMouseOver={() => setRotate(true)}
            onMouseLeave={() => setRotate(false)}
            // data-aos="fade-up-left"
            // data-aos-delay="200"
            // class={
            //   "notification is-light has-text-centered aos-init aos-animate"
            // }
            style={{
              border: "1px solid black",
              height: "100%",
              backgroundColor: "white",
              width: "50%",
              borderRadius: 8,
              padding: 16,
            }}>
            <div
              style={{
                fontWeight: "bold",
                width: "100%",
                textAlign: "left",
              }}>
              {date}
            </div>
            <div
              style={{
                fontWeight: "bold",
                width: "100%",
              }}>
              {topic}
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "left",
                marginTop: 6,
                marginBottom: 6,
              }}>
              {content}
            </div>
            <div>
              <b>Marks Allocated:</b> {marks}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
