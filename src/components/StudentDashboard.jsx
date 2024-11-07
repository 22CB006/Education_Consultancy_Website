import React, { useEffect } from "react";
import "../styles/StudentDashboard.css";
import image0 from "./img/image0.png";
import image1 from "./img/image1.png";
import image2 from "./img/image2.png";
import image3 from "./img/image3.png";
import image4 from "./img/image4.png";
import image5 from "./img/image5.png";
import image6 from "./img/image6.png";
import image7 from "./img/image7.png";
import image8 from "./img/image8.png";
import image9 from "./img/image9.png";
import image10 from "./img/image10.png";
import image11 from "./img/image11.png";

import runAnimations, { allLinks, allFunctions } from "./scripts";

const StudentDashboard = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="student-dashboard-container pos-abs">
        {/* Desktop - 111 */}
        <section className="header-section pos-abs"></section>
        {/* Frame 111 */}
        <section className="add-board-button pos-abs">
          <div className="add-board-text pos-abs">
            <span className="add-board-text-1">{`Add new board`}</span>
          </div>
        </section>

        <div className="user-avatar pos-abs">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232221 "
            alt="232221-ALT"
          />{" "}
        </div>
        {/* Frame 121 */}
        <section className="theme-toggle-container pos-abs">
          <div className="light-mode-container pos-abs">
            <div className="light-mode-icon pos-abs">
              <div className="light-mode-icon-inner pos-abs">
                <div className="nodeBg-232228 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="dark-mode-icon pos-abs">
            <div className="dark-mode-icon-inner pos-abs">
              <div className="nodeBg-232230 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>

        <div className="nav-item-dashboard pos-abs">
          <span className="nav-item-dashboard-1">{`Dashboard`}</span>
        </div>

        <div className="nav-item-courses pos-abs">
          <span className="nav-item-courses-1">{`Courses`}</span>
        </div>

        <div className="nav-item-resources pos-abs">
          <span className="nav-item-resources-1">{`Resources`}</span>
        </div>

        <div className="nav-item-statistics pos-abs">
          <span className="nav-item-statistics-1">{`Statistics`}</span>
        </div>

        <div className="logo-text pos-abs">
          <span className="logo-text-1">{`EDU`}</span>
        </div>
        {/* search1 */}
        <section className="search-icon-container pos-abs">
          <div className="search-icon-outer pos-abs">
            <div className="nodeBg-232219 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="search-icon-inner pos-abs">
            <div className="nodeBg-232220 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="user-name pos-abs">
          <span className="user-name-1">{`Arya`}</span>
        </div>
        {/* mynaui:notification1 */}
        <section className="notification-icon-container pos-abs">
          <div className="notification-icon-inner pos-abs">
            <div className="nodeBg-232352 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="notification-icon-outer pos-abs">
            <div className="nodeBg-232351 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* formkit:down1 */}
        <section className="dropdown-icon-container pos-abs">
          <div className="dropdown-icon pos-abs">
            <div className="nodeBg-232224 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="greeting-text pos-abs">
          <span className="greeting-text-1">{`Hi, Arya!
What do you want 
to`}</span>
          <span className="greeting-text-1-2">{` `}</span>
          <span className="greeting-text-1-2-3">{`learn`}</span>
          <span className="greeting-text-1-2-3-4">{` today?`}</span>
        </div>
        {/* Frame 301 */}
        <section className="course-navigation pos-abs">
          <div className="navigation-button-group pos-abs">
            <div className="navigation-button pos-abs"></div>

            <div className="navigation-icon pos-abs">
              <div className="nodeBg-232201 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Frame 261 */}
        <section className="course-card pos-abs">
          <div className="course-image-container pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232197 "
              alt="232197-ALT"
            />{" "}
          </div>

          <div className="course-title pos-abs">
            <span className="course-title-1">{`Character design`}</span>
          </div>

          <div className="instructor-name pos-abs">
            <span className="instructor-name-1">{`Mr. Bennett`}</span>
          </div>
        </section>
        {/* Frame 271 */}
        <section className="course-card-1 pos-abs">
          <div className="course-image-container-1 pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232205 "
              alt="232205-ALT"
            />{" "}
          </div>

          <div className="course-title-1 pos-abs">
            <span className="course-title-1-1">{`Storyboarding`}</span>
          </div>

          <div className="instructor-name-1 pos-abs">
            <span className="instructor-name-1-1">{`Ms. Caldwell`}</span>
          </div>
        </section>
        {/* Frame 281 */}
        <section className="course-card-2 pos-abs">
          <div className="course-image-container-2 pos-abs">
            <img
              src={image3}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232209 "
              alt="232209-ALT"
            />{" "}
          </div>

          <div className="course-title-2 pos-abs">
            <span className="course-title-2-1">{`Visual Storytelling`}</span>
          </div>

          <div className="instructor-name-2 pos-abs">
            <span className="instructor-name-2-1">{`Mrs. Hastings`}</span>
          </div>
        </section>
        {/* Frame 291 */}
        <section className="course-card-3 pos-abs">
          <div className="course-image-container-3 pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232333 "
              alt="232333-ALT"
            />{" "}
          </div>

          <div className="course-title-3 pos-abs">
            <span className="course-title-3-1">{`2D Animation`}</span>
          </div>

          <div className="instructor-name-5 pos-abs">
            <span className="instructor-name-5-1">{`Mr. Parker`}</span>
          </div>
        </section>

        <div className="get-ahead in-li-232210 pos-abs">
          <span className="get-ahead in-li-232210-0">{``}</span>
        </div>
        {/* Frame 151 */}
        <section className="todo-list-container pos-abs">
          <div className="todo-list-title pos-abs">
            <span className="todo-list-title-1">{`To do list`}</span>
          </div>

          <div className="avatar-group pos-abs">
            <div className="avatar-1 pos-abs">
              <img
                src={image5}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232252 "
                alt="232252-ALT"
              />{" "}
            </div>

            <div className="avatar-2 pos-abs">
              <img
                src={image6}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232253 "
                alt="232253-ALT"
              />{" "}
            </div>

            <div className="avatar-3 pos-abs">
              <img
                src={image7}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232254 "
                alt="232254-ALT"
              />{" "}
            </div>

            <div className="avatar-4 pos-abs">
              <img
                src={image8}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232255 "
                alt="232255-ALT"
              />{" "}
            </div>

            <div className="avatar-more-container pos-abs">
              <div className="avatar-more-background pos-abs"></div>

              <div className="avatar-more-icon pos-abs">
                <div className="nodeBg-232258 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="edit-button-container pos-abs">
            <div className="edit-button-text pos-abs">
              <span className="edit-button-text-1">{`Edit`}</span>
            </div>

            <div className="edit-icon pos-abs">
              <div className="edit-icon-inner pos-abs">
                <div className="nodeBg-232267 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="share-button-container pos-abs">
            <div className="share-button-text pos-abs">
              <span className="share-button-text-1">{`Share`}</span>
            </div>

            <div className="share-icon pos-abs">
              <div className="share-icon-outer pos-abs">
                <div className="nodeBg-232262 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="share-icon-inner pos-abs">
                <div className="nodeBg-232263 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="ellipsis-icon pos-abs">
            <div className="nodeBg-232250 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="todo-item-container pos-abs">
            <div className="todo-item-title pos-abs">
              <span className="todo-item-title-1">{`Create Your
              
              
              
              
              
              
              
              
              
              
          
Original Character (OC)`}</span>
            </div>

            <div className="priority-tag-container pos-abs">
              <div className="priority-tag-text pos-abs">
                <span className="priority-tag-text-1">{`Low`}</span>
              </div>
            </div>

            <div className="course-tag-container pos-abs">
              <div className="course-tag-text pos-abs">
                <span className="course-tag-text-1">{`Character                           
                
  Design`}</span>
              </div>
            </div>

            <div className="checkbox pos-abs">
              <img
                src={image8}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232241 "
                alt="232241-ALT"
              />{" "}
            </div>

            <div className="instructor-name-3 pos-abs">
              <span className="instructor-name-3-1">{`Mr. Bennett`}</span>
            </div>
          </div>

          <div className="todo-item-container-1 pos-abs">
            <div className="todo-item-title-1 pos-abs">
              <span className="todo-item-title-1-1">{`Create a Short Storyboard
for a 1-Minute Animation`}</span>
            </div>

            <div className="priority-tag-container-1 pos-abs">
              <div className="priority-tag-text-1 pos-abs">
                <span className="priority-tag-text-1-1">{`High`}</span>
              </div>
            </div>

            <div className="course-tag-container-1 pos-abs">
              <div className="course-tag-text-1 pos-abs">
                <span className="course-tag-text-1-1">{`Storyboarding`}</span>
              </div>
            </div>

            <div className="checkbox-1 pos-abs">
              <img
                src={image7}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232249 "
                alt="232249-ALT"
              />{" "}
            </div>

            <div className="instructor-name-4 pos-abs">
              <span className="instructor-name-4-1">{`Ms. Caldwell`}</span>
            </div>
          </div>
        </section>
        {/* Frame 161 */}
        <section className="assignments-container pos-abs">
          <div className="assignments-title pos-abs">
            <span className="assignments-title-1">{`My assignments`}</span>
          </div>

          <div className="more-options-icon-container pos-abs">
            <div className="more-options-icon-background pos-abs"></div>

            <div className="more-options-icon pos-abs">
              <div className="nodeBg-232282 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="edit-icon-2 pos-abs">
            <div className="edit-icon-inner-2 pos-abs">
              <div className="nodeBg-232279 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="share-icon-1 pos-abs">
            <div className="share-icon-outer-1 pos-abs">
              <div className="nodeBg-232276 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="share-icon-inner-1 pos-abs">
              <div className="nodeBg-232277 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="ellipsis-icon-1 pos-abs">
            <div className="nodeBg-232274 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="assignment-item pos-abs">
            <div className="assignment-title pos-abs">
              <span className="assignment-title-1">{`3D Modeling`}</span>
            </div>

            <div className="assignment-due-date pos-abs">
              <span className="assignment-due-date-1">{`15
Mar`}</span>
            </div>

            <div className="assignment-icon-container pos-abs"></div>

            <div className="assignment-icon pos-abs">
              <img
                src={image9}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232286 "
                alt="232286-ALT"
              />{" "}
            </div>

            <div className="assignment-description pos-abs">
              <span className="assignment-description-1">{``}</span>
            </div>

            <div className="assignment-progress pos-abs">
              <span className="assignment-progress-1">{`65%`}</span>
            </div>

            <div className="assignment-start-date-container pos-abs">
              <div className="calendar-icon pos-abs">
                <div className="calendar-icon-mask pos-abs">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F07-nov-2024%2Farya1730978165974%2Fimage-232-297.png?alt=media&token=0"
                    className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                    alt="232297-ALT"
                  />{" "}
                </div>
              </div>

              <div className="assignment-start-date pos-abs">
                <span className="assignment-start-date-1">{`09 Mar, 10:30 AM`}</span>
              </div>
            </div>

            <div className="progress-bar-container pos-abs">
              <div className="progress-bar-background pos-abs">
                <div className="nodeBg-232292 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="progress-bar-fill pos-abs">
                <div className="nodeBg-232293 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="assignment-item-container pos-abs"></div>

          <div className="next-assignment-icon pos-abs">
            <div className="next-assignment-icon-arrow pos-abs">
              <div className="nodeBg-232305 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>

        <div className="upcoming-tests-title pos-abs">
          <span className="upcoming-tests-title-1">{`Upcoming Tests`}</span>
        </div>

        <div className="todays-schedule-title pos-abs">
          <span className="todays-schedule-title-1">{`Today’s Schedule`}</span>
        </div>

        <div className="inspiration-text pos-abs">
          <span className="inspiration-text-1">{`Where brilliant ideas meet tiny canvases!`}</span>
        </div>
        {/* uit:calender1 */}
        <section className="calendar-icon-container pos-abs">
          <div className="calendar-icon-1 pos-abs">
            <div className="nodeBg-232328 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* Group 51 */}
        <section className="edit-button-container-1 pos-abs">
          <div className="edit-button-text-1 pos-abs">
            <span className="edit-button-text-1-1">{`Edit`}</span>
          </div>

          <div className="edit-icon-1 pos-abs">
            <div className="edit-icon-inner-1 pos-abs">
              <div className="nodeBg-232271 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>

        <div className="test-day-label pos-abs">
          <span className="test-day-label-1">{`Test Day`}</span>
        </div>

        <div className="dot-icon pos-abs">
          <div className="nodeBg-232329 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        {/* Frame 201 */}
        <section className="calendar-day-container pos-abs">
          <div className="calendar-day pos-abs">
            <span className="calendar-day-1">{`13`}</span>
          </div>

          <div className="calendar-day-name pos-abs">
            <span className="calendar-day-name-1">{`Monday`}</span>
          </div>
        </section>
        {/* Frame 211 */}
        <section className="calendar-day-container-3 pos-abs">
          <div className="calendar-day-3 pos-abs">
            <span className="calendar-day-3-1">{`14`}</span>
          </div>

          <div className="calendar-event pos-abs">
            <span className="calendar-event-1">{`Animation`}</span>
          </div>

          <div className="calendar-day-name-3 pos-abs">
            <span className="calendar-day-name-3-1">{`Tuesday`}</span>
          </div>
        </section>
        {/* Frame 311 */}
        <section className="calendar-day-container-4 pos-abs">
          <div className="calendar-day-4 pos-abs">
            <span className="calendar-day-4-1">{`15`}</span>
          </div>

          <div className="calendar-event-1 pos-abs">
            <span className="calendar-event-1-1">{`3D Modeling`}</span>
          </div>

          <div className="calendar-day-name-4 pos-abs">
            <span className="calendar-day-name-4-1">{`Wednesday`}</span>
          </div>
        </section>

        <div className="schedule-time-slot pos-abs">
          <span className="schedule-time-slot-1">{`11:00 AM - 12:00 PM`}</span>
        </div>

        <div className="schedule-event pos-abs">
          <span className="schedule-event-1">{`2D Animation`}</span>
        </div>
        {/* Group 81 */}
        <section className="inspiration-board-container-1 pos-abs">
          <div className="inspiration-board-header-1 pos-abs"></div>

          <div className="inspiration-board-content-1 pos-abs"></div>
        </section>

        <div className="schedule-divider pos-abs"></div>
        {/* Group 71 */}
        <section className="inspiration-board-container pos-abs">
          <div className="inspiration-board-header pos-abs"></div>

          <div className="inspiration-board-content pos-abs"></div>
        </section>

        <div className="schedule-time-slot-1 pos-abs">
          <span className="schedule-time-slot-1-1">{`01:00 PM - 02:00 PM`}</span>
        </div>

        <div className="schedule-event-1 pos-abs">
          <span className="schedule-event-1-1">{`Pencil Drawing`}</span>
        </div>

        <div className="schedule-divider-1 pos-abs"></div>

        <div className="schedule-time-slot-2 pos-abs">
          <span className="schedule-time-slot-2-1">{`03:00 PM - 04:30 PM`}</span>
        </div>

        <div className="schedule-event-2 pos-abs">
          <span className="schedule-event-2-1">{`Storyboarding`}</span>
        </div>
        {/* Frame 321 */}
        <section className="calendar-day-container-1 pos-abs">
          <div className="calendar-day-1 pos-abs">
            <span className="calendar-day-1-1">{`16`}</span>
          </div>

          <div className="calendar-day-name-1 pos-abs">
            <span className="calendar-day-name-1-1">{`Thursday`}</span>
          </div>
        </section>
        {/* Frame 331 */}
        <section className="calendar-day-container-2 pos-abs">
          <div className="calendar-day-2 pos-abs">
            <span className="calendar-day-2-1">{`17`}</span>
          </div>

          <div className="calendar-day-name-2 pos-abs">
            <span className="calendar-day-name-2-1">{`Friday`}</span>
          </div>
        </section>

        <div className="mascot-image pos-abs">
          <img
            src={image10}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232334 "
            alt="Smiling sun mascot"
          />{" "}
        </div>

        <div className="schedule-divider-2 pos-abs"></div>

        <div className="schedule-time-slot-3 pos-abs">
          <span className="schedule-time-slot-3-1">{`05:00 PM - 06:00 PM`}</span>
        </div>

        <div className="schedule-event-3 pos-abs">
          <span className="schedule-event-3-1">{`3D Modeling`}</span>
        </div>

        <div className="schedule-divider-3 pos-abs"></div>
        {/* Frame 251 */}
        <section className="mascot-text-container pos-abs"></section>

        <div className="brush-image pos-abs">
          <img
            src={image11}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232359 "
            alt="Paint brush image"
          />{" "}
        </div>

        <div className="schedule-time-slot-4 pos-abs">
          <span className="schedule-time-slot-4-1">{`06:00 PM - 06:30 PM`}</span>
        </div>

        <div className="schedule-event-4 pos-abs">
          <span className="schedule-event-4-1">{`Logo Design`}</span>
        </div>
        {/* Frame 421 */}
        <section className="drawing-tools-container pos-abs">
          <div className="cursor-tool-container pos-abs">
            <div className="cursor-tool-icon pos-abs">
              <div className="cursor-tool-icon-inner pos-abs">
                <div className="nodeBg-232358 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="highlight-tool-icon pos-abs">
            <div className="highlight-tool-icon-inner pos-abs">
              <div className="nodeBg-232355 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
