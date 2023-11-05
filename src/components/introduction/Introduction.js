import Card from "react-bootstrap/Card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Introduction() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);
  return (
    <div
      style={{
        maxHeight: "100vh",
        height: "100vh",
        overflowY: "auto",
        margin: 0,
        width: "100vw",
        paddingBottom: 70,
        backgroundColor: "#3371E3",
      }}>
      <div
        data-aos="fade-left"
        className="max-w-2xl mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2 ">
        <Card
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 8,
          }}>
          <Card.Header
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 4,
            }}>
            Vision
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Card.Text>
                Offer an accessible, cost-effective method for early-stage
                stress detection and effective emotional management to support a
                sustainable, healthy lifestyle.
              </Card.Text>
            </blockquote>
          </Card.Body>
        </Card>

        <Card
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 8,
          }}>
          <Card.Header
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 4,
            }}>
            Mission
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Card.Text>
                Our goal is to lead the market by offering solutions that
                effectively address stress, emotional management, well-being
                enhancement, and the enrichment of lives and communities.
              </Card.Text>
            </blockquote>
          </Card.Body>
        </Card>
      </div>

      <div
        data-aos="fade-up"
        className="max-w-2xl mx-auto py-8 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-24 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 lg:grid-cols-1 ">
        <Card
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 8,
          }}>
          <Card.Header
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 4,
            }}>
            Introduction
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                The body's response to stress is a natural defense mechanism,
                designed to protect against threats or danger. In our fast-paced
                world, mental stress has become a profoundly impactful
                psychological phenomenon. Its prevalence poses significant
                challenges for individuals. Prolonged mental stress can lead to
                adverse effects such as depression, anxiety, and burnout.
                Effective prevention and management of stress play a crucial
                role in reducing the risk of mental health problems.
              </p>
              <br />
              <p>
                Mental stress often manifests through various emotions.
                Researchers widely recognize six universal emotions: happiness,
                surprise, sadness, anger, disgust, and fear. These emotions are
                expressed through texts, speech, and facial expressions.
                Moreover, stress affects heart rate variability (HRV), providing
                another avenue for detecting mental stress.
              </p>
              <br />
              <p>
                <b>Introducing MindRelax:</b> an advanced machine learning-based
                system capable of detecting user emotions through text analysis,
                facial expressions, and voice patterns. MindRelax notifies users
                of potential signs of stress. Additionally, the system can
                measure the user's stress levels by analyzing their heart rate.
              </p>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
