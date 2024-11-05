import React, { useEffect } from "react";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import "../styles/ParentDashboard.css";
import runAnimations from "./scripts";

const ParentDashboard = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="desktop-layout pos-abs">
        {/* Desktop - 111 */}
        <section className="main-content pos-abs">
          <div className="average-gpa-chart pos-abs">
            <div className="chart-title pos-abs">
              <span className="chart-title-1">{`Average GPA`}</span>
            </div>

            <div className="quarter-selector pos-abs">
              <div className="quarter-selector-arrow pos-abs">
                <div className="quarter-selector-arrow-icon pos-abs">
                  <div className="nodeBg-232491 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="quarter-selector-text pos-abs">
                <span className="quarter-selector-text-1">{`Spring`}</span>
              </div>
            </div>

            <div className="y-axis-label-4 pos-abs">
              <span className="y-axis-label-4-1">{`4.0`}</span>
            </div>

            <div className="chart-bar-q3 pos-abs"></div>

            <div className="chart-bar-q5 pos-abs"></div>

            <div className="chart-overlay-q2 pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-401.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                alt="232401-ALT"
              />{" "}
            </div>

            <div className="y-axis-label-3 pos-abs">
              <span className="y-axis-label-3-1">{`3.0`}</span>
            </div>

            <div className="chart-overlay-q4 pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-455.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                alt="232455-ALT"
              />{" "}
            </div>

            <div className="chart-bar-q1 pos-abs"></div>

            <div className="chart-bar-q2 pos-abs"></div>

            <div className="chart-overlay-q3 pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-428.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                alt="232428-ALT"
              />{" "}
            </div>

            <div className="chart-bar-q4 pos-abs"></div>

            <div className="chart-overlay-q1 pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-385.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                alt="232385-ALT"
              />{" "}
            </div>

            <div className="y-axis-label-2 pos-abs">
              <span className="y-axis-label-2-1">{`2.0`}</span>
            </div>

            <div className="y-axis-label-1 pos-abs">
              <span className="y-axis-label-1-1">{`1.0`}</span>
            </div>

            <div className="y-axis-label-0 pos-abs">
              <span className="y-axis-label-0-1">{`0.0`}</span>
            </div>

            <div className="chart-line pos-abs"></div>

            <div className="x-axis-label-q1 pos-abs">
              <span className="x-axis-label-q1-1">{`Q1`}</span>
            </div>

            <div className="x-axis-label-q2 pos-abs">
              <span className="x-axis-label-q2-1">{`Q2`}</span>
            </div>

            <div className="x-axis-label-q3 pos-abs">
              <span className="x-axis-label-q3-1">{`Q3`}</span>
            </div>

            <div className="x-axis-label-q4 pos-abs">
              <span className="x-axis-label-q4-1">{`Q4`}</span>
            </div>

            <div className="legend-previous-quarters pos-abs">
              <div className="legend-previous-quarters-text pos-abs">
                <span className="legend-previous-quarters-text-1">{`Previous quarters`}</span>
              </div>

              <div className="legend-previous-quarters-icon pos-abs">
                <div className="nodeBg-232484 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>

            <div className="legend-current-quarters pos-abs">
              <div className="legend-current-quarters-text pos-abs">
                <span className="legend-current-quarters-text-1">{`Current quarters`}</span>
              </div>

              <div className="legend-current-quarters-icon pos-abs">
                <div className="nodeBg-232487 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="options-icon pos-abs">
            <div className="options-icon-group pos-abs">
              <div className="options-icon-dot-2 pos-abs">
                <div className="nodeBg-232515 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="options-icon-line-1 pos-abs">
                <div className="nodeBg-232513 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="options-icon-dot-1 pos-abs">
                <div className="nodeBg-232514 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="attendance-rate-chart pos-abs">
            <div className="attendance-rate-marker-square-4 pos-abs"></div>

            <div className="attendance-rate-outline-circle pos-abs"></div>

            <div className="attendance-rate-progress-circle pos-abs"></div>

            <div className="attendance-rate-background-circle pos-abs"></div>

            <div className="attendance-rate-overlay-circle pos-abs"></div>

            <div className="attendance-rate-donut pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-493.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                alt="232493-ALT"
              />{" "}
            </div>

            <div className="attendance-rate-marker-line-2 pos-abs"></div>

            <div className="attendance-rate-percentage pos-abs">
              <span className="attendance-rate-percentage-1">{`85%`}</span>
            </div>

            <div className="attendance-rate-marker-square-1 pos-abs"></div>

            <div className="attendance-rate-marker-square-2 pos-abs"></div>

            <div className="attendance-rate-marker-line-3 pos-abs"></div>

            <div className="attendance-rate-marker-line-1 pos-abs"></div>

            <div className="attendance-rate-marker-square-5 pos-abs"></div>

            <div className="attendance-rate-marker-square-6 pos-abs"></div>

            <div className="attendance-rate-marker-line-4 pos-abs"></div>

            <div className="attendance-rate-marker-square-3 pos-abs"></div>
          </div>
        </section>

        <div className="user-avatar pos-abs">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232526 "
            alt="232526-ALT"
          />{" "}
        </div>

        <div className="nav-dashboard pos-abs">
          <span className="nav-dashboard-1">{`Dashboard`}</span>
        </div>

        <div className="nav-academics pos-abs">
          <span className="nav-academics-1">{`Academics`}</span>
        </div>

        <div className="nav-teachers pos-abs">
          <span className="nav-teachers-1">{`Teachers`}</span>
        </div>

        <div className="nav-parents-guide pos-abs">
          <span className="nav-parents-guide-1">{`Parent’s Guide`}</span>
        </div>

        <div className="logo-text pos-abs">
          <span className="logo-text-1">{`EDU`}</span>
        </div>
        {/* search1 */}
        <section className="search-icon pos-abs">
          <div className="search-icon-circle pos-abs">
            <div className="nodeBg-232524 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="search-icon-handle pos-abs">
            <div className="nodeBg-232525 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="user-name pos-abs">
          <span className="user-name-1">{`Arya`}</span>
        </div>
       
        {/* formkit:down1 */}
        <section className="user-dropdown-icon pos-abs">
          <div className="user-dropdown-arrow pos-abs">
            <div className="nodeBg-232529 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="welcome-message pos-abs">
          <span className="welcome-message-1">{`Welcome Back! 
Stay Updated with
Your `}</span>
          <span className="welcome-message-1-2">{`Child’s Progress`}</span>
          <span className="welcome-message-1-2-3">{`"`}</span>
        </div>

        <div className="attendance-rate-title pos-abs">
          <span className="attendance-rate-title-1">{`Attendance Rate`}</span>
        </div>

        <div className="academics-glance-title pos-abs">
          <span className="academics-glance-title-1">{`"Academics at a Glance"`}</span>
        </div>

        <div className="grade-display pos-abs">
          <span className="grade-display-1">{`A+, 87%`}</span>
        </div>

        <div className="last-update-text pos-abs">
          <span className="last-update-text-1">{``}</span>
          <span className="last-update-text-1-2">{` `}</span>
          <span className="last-update-text-1-2-3">{``}</span>
        </div>

        <div className="upcoming-tests-title pos-abs">
          <span className="upcoming-tests-title-1">{`Upcoming Tests`}</span>
        </div>

        <div className="course-status-title pos-abs">
          <span className="course-status-title-1">{`Course Status`}</span>
        </div>
        {/* uit:calender1 */}
        <section className="calendar-icon pos-abs">
          <div className="calendar-icon-body pos-abs">
            <div className="nodeBg-232552 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* weui:arrow-outlined1 */}
        <section className="scroll-arrow-icon pos-abs">
          <div className="scroll-arrow-vector pos-abs">
            <div className="nodeBg-232517 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="test-day-label pos-abs">
          <span className="test-day-label-1">{`Test Day`}</span>
        </div>

        <div className="legend-dot pos-abs">
          <div className="nodeBg-232553 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        {/* Frame 201 */}
        <section className="calendar-day-1 pos-abs">
          <div className="calendar-day-1-number pos-abs">
            <span className="calendar-day-1-number-1">{`13`}</span>
          </div>

          <div className="calendar-day-1-name pos-abs">
            <span className="calendar-day-1-name-1">{`Monday`}</span>
          </div>
        </section>
        {/* Frame 211 */}
        <section className="calendar-day-2 pos-abs">
          <div className="calendar-day-2-number pos-abs">
            <span className="calendar-day-2-number-1">{`14`}</span>
          </div>

          <div className="calendar-day-2-event pos-abs">
            <span className="calendar-day-2-event-1">{`Animation`}</span>
          </div>

          <div className="calendar-day-2-name pos-abs">
            <span className="calendar-day-2-name-1">{`Tuesday`}</span>
          </div>
        </section>
        {/* Frame 311 */}
        <section className="calendar-day-3 pos-abs">
          <div className="calendar-day-3-number pos-abs">
            <span className="calendar-day-3-number-1">{`15`}</span>
          </div>

          <div className="calendar-day-3-event pos-abs">
            <span className="calendar-day-3-event-1">{`3D Modeling`}</span>
          </div>

          <div className="calendar-day-3-name pos-abs">
            <span className="calendar-day-3-name-1">{`Wednesday`}</span>
          </div>
        </section>
        {/* Frame 431 */}
        <section className="course-card-1 pos-abs">
          <div className="course-1-image pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232566 "
              alt="232566-ALT"
            />{" "}
          </div>

          <div className="course-1-title pos-abs">
            <span className="course-1-title-1">{`Character design`}</span>
          </div>

          <div className="course-1-instructor pos-abs">
            <span className="course-1-instructor-1">{`Mr. Bennett`}</span>
          </div>

          <div className="course-1-progress-bar-bg pos-abs"></div>

          <div className="course-1-progress-bar pos-abs"></div>
        </section>
        {/* Frame 441 */}
        <section className="course-card-2 pos-abs">
          <div className="course-2-image pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232572 "
              alt="232572-ALT"
            />{" "}
          </div>

          <div className="course-2-title pos-abs">
            <span className="course-2-title-1">{`Storyboarding`}</span>
          </div>

          <div className="course-2-instructor pos-abs">
            <span className="course-2-instructor-1">{`Ms. Caldwell`}</span>
          </div>

          <div className="course-2-progress-bar-bg pos-abs"></div>

          <div className="course-2-progress-bar pos-abs"></div>
        </section>
        {/* Frame 451 */}
        <section className="course-card-3 pos-abs">
          <div className="course-3-image pos-abs">
            <img
              src={image3}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232578 "
              alt="232578-ALT"
            />{" "}
          </div>

          <div className="course-3-title pos-abs">
            <span className="course-3-title-1">{`Visual Storytelling`}</span>
          </div>

          <div className="course-3-instructor pos-abs">
            <span className="course-3-instructor-1">{`Mrs. Hastings`}</span>
          </div>

          <div className="course-3-progress-bar-bg pos-abs"></div>

          <div className="course-3-progress-bar pos-abs"></div>
        </section>
        {/* Frame 471 */}
        <section className="course-card-4 pos-abs">
          <div className="course-4-image pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232584 "
              alt="232584-ALT"
            />{" "}
          </div>

          <div className="course-4-title pos-abs">
            <span className="course-4-title-1">{`3D Animation`}</span>
          </div>

          <div className="course-4-instructor pos-abs">
            <span className="course-4-instructor-1">{`Mr. Ande beane`}</span>
          </div>

          <div className="course-4-progress-bar-bg pos-abs"></div>

          <div className="course-4-progress-bar pos-abs"></div>
        </section>
        {/* Frame 461 */}
        <section className="course-card-5 pos-abs">
          <div className="course-5-image pos-abs">
            <img
              src={image5}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232590 "
              alt="232590-ALT"
            />{" "}
          </div>

          <div className="course-5-title pos-abs">
            <span className="course-5-title-1">{`2D Animation`}</span>
          </div>

          <div className="course-5-instructor pos-abs">
            <span className="course-5-instructor-1">{`Mr. Parker`}</span>
          </div>

          <div className="course-5-progress-bar-bg pos-abs"></div>

          <div className="course-5-progress-bar pos-abs"></div>
        </section>
        {/* Frame 321 */}
        <section className="calendar-day-4 pos-abs">
          <div className="calendar-day-4-number pos-abs">
            <span className="calendar-day-4-number-1">{`16`}</span>
          </div>

          <div className="calendar-day-4-name pos-abs">
            <span className="calendar-day-4-name-1">{`Thursday`}</span>
          </div>
        </section>
        {/* Frame 331 */}
        <section className="calendar-day-5 pos-abs">
          <div className="calendar-day-5-number pos-abs">
            <span className="calendar-day-5-number-1">{`17`}</span>
          </div>

          <div className="calendar-day-5-name pos-abs">
            <span className="calendar-day-5-name-1">{`Friday`}</span>
          </div>
        </section>

        <div className="sun-icon pos-abs">
          <img
            src={image6}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232554 "
            alt="232554-ALT"
          />{" "}
        </div>
        {/* Frame 251 */}
        <section className="calendar-day-5-background pos-abs"></section>
      </div>
    </div>
  );
};



export default ParentDashboard;
