import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Documents() {
  const [hovered, setHovered] = useState("");
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
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "#3371E3",
        height: "100vh",
        alignItems: "center",
        width: "100%",
        overflowY: "auto",
        padding: 10,
        paddingBottom: 80,
        gap: 10,
      }}>
      <h1
        class="text-3xl font-bold p-10"
        data-aos="fade-left"
        style={{ color: "white" }}>
        Documents
      </h1>
      <div
        data-aos="fade-right"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}>
        <div
          style={{
            height: "35vh",
            width: "100%",
            display: "flex",
            gap: 10,
            justifyContent: "center",
            marginTop: -20,
          }}>
          <div
            onMouseOver={() => setHovered("1")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1cKTwW68O2rx0gvdP4Vv0CI6WSXcke8Vu?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "1" ? "center" : "space-between",
            }}>
            {hovered === "1" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Topic Assessment
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 20-Jan-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
          <div
            onMouseOver={() => setHovered("2")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1MZX15fxIu4ilBSKbq9hYLaI234ZKltnL?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "2" ? "center" : "space-between",
            }}>
            {hovered === "2" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Project Charter
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 30-Jan-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
          <div
            onMouseOver={() => setHovered("3")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1Uoe3Jtd-_d9YsmI8e0jcpt18M6NUaqg2?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "3" ? "center" : "space-between",
            }}>
            {hovered === "3" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Project Proposal
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 30-March-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
          <div
            onMouseOver={() => setHovered("4")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1yvKQDxYxeFs5zidjDA7T-X_lhpeBETru?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "4" ? "center" : "space-between",
            }}>
            {hovered === "4" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Status Documents I
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 22-May-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
        </div>
        <div
          style={{
            height: "35vh",
            width: "100%",
            display: "flex",
            gap: 10,
            paddingBottom: 10,
            justifyContent: "center",
          }}>
          <div
            onMouseOver={() => setHovered("5")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1JWgCSokGZ-my-CvfBzBRusdMUUIoi79j?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "5" ? "center" : "space-between",
            }}>
            {hovered === "5" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Status Documents II
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 5-Sep-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("6")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1JuwECAVmBOBVkpE3Ihx6IrBUgFPjrebZ?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "6" ? "center" : "space-between",
            }}>
            {hovered === "6" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Research Paper
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 20-Jun-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("7")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1dpBIBaLMEmaROxJnqRu3WHW5TQhQLfwL?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "7" ? "center" : "space-between",
            }}>
            {hovered === "7" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Final Report
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 10-Sep-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("8")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1T-y6cH0oTt2-d9gOZB8dokZV216KMSUp?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "8" ? "center" : "space-between",
            }}>
            {hovered === "8" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Poster
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 08-Sep-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
        </div>

        <h1 class="text-3xl font-bold p-10" style={{ color: "white" }}>
          Presentations
        </h1>

        <div
          style={{
            height: "35vh",
            width: "100%",
            display: "flex",
            gap: 10,
            paddingBottom: 10,
            justifyContent: "center",
          }}>
          <div
            onMouseOver={() => setHovered("9")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1OJbIYURFbylKg3ZhgtYte899Ie6-Auqx?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "9" ? "center" : "space-between",
            }}>
            {hovered === "9" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Proposal Presentation
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 28-March-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("10")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1LFgtp-5rYreLwWJGmUmohqGyM29Nx1T-?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "10" ? "center" : "space-between",
            }}>
            {hovered === "10" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Progress Presentation 1
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 24-May-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("11")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1nQqDgbSMaJz99R0W_xNKWLFNUyzVUs2r?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "11" ? "center" : "space-between",
            }}>
            {hovered === "11" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Progress Presentation 2
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 5-Sep-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>

          <div
            onMouseOver={() => setHovered("12")}
            onMouseLeave={() => setHovered("")}
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/1T6cypJt1O41O4lGdWe7Rc-bj-sMUqLxk?usp=drive_link",
                "_blank"
              )
            }
            style={{
              height: "35vh",
              width: "35vh",
              backgroundColor: "white",
              borderRadius: 8,
              padding: 8,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: hovered === "12" ? "center" : "space-between",
            }}>
            {hovered === "12" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  style={{
                    width: "10vw",
                    height: "10vw",
                    color: "#3371E3",
                  }}>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p
                  style={{
                    color: "#3371E3",
                  }}>
                  Click to Download
                </p>
              </div>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                    }}>
                    Final Presentation
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      marginTop: 70,
                    }}>
                    Submitted on 31-Oct-2023
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    color: "#3371E3",
                  }}>
                  Download
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
