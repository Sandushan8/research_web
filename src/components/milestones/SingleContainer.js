export const SingleContainer = ({ left, date, topic, content, marks }) => {
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
        }}></div>
      <div
        id="rightCardContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "49.75%",
          backgroundColor: "#3371E3",
          padding: 20,
        }}>
        {!left ? (
          <div
            id={topic}
            key={topic}
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
