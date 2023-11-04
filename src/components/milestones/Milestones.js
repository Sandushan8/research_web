import { SingleContainer } from "./SingleContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Milestones() {
  const milestones = [
    {
      date: "March 2023",
      topic: "Project Proposal",
      content:
        "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: "6",
      alignment: true,
    },
    {
      date: "May 2023",
      topic: "Progress Presentation I",
      content:
        "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: "6",
      alignment: false,
    },
    {
      date: "June 2023",
      topic: "Research Paper",
      content:
        "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge",
      marks: "10",
      alignment: true,
    },
    {
      date: "September 2023",
      topic: "Progress Presentation II",
      content:
        "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      marks: "18",
      alignment: false,
    },

    {
      date: "October 2023",
      topic: "Logbook",
      content:
        "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      marks: "3",
      alignment: true,
    },
    {
      date: "October 2023",
      topic: "Final Report",
      content:
        "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      marks: "19",
      alignment: false,
    },
    {
      date: "October 2023",
      topic: "Final Presentation & Viva",
      content:
        "Viva is held individually to assess each members contribution to the project.",
      marks: "20",
      alignment: true,
    },
    {
      date: "November 2023",
      topic: "Website Assessment",
      content:
        "The Website helps to promote our research project and reveals all details related to the project.",
      marks: "2",
      alignment: false,
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#3371E3",
        maxHeight: "100%",
        width: "100%",
        overflowY: "auto",
        padding: 10,
        paddingBottom: 70,
      }}>
      <div>
        <h1
          class="text-3xl font-bold p-10"
          data-aos="fade-left"
          style={{ color: "white" }}>
          Milestones
        </h1>
        <div data-aos="fade-up">
          {milestones.map((item) => {
            return (
              <SingleContainer
                left={item.alignment}
                date={item.date}
                topic={item.topic}
                content={item.content}
                marks={item.marks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
