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
      <div className="student-dashboard-wrapper pos-abs">
        {/* Desktop - 111 */}
        <section className="header-background pos-abs"></section>
        {/* Frame 111 */}
        <section className="add-new-board-button pos-abs">
          <div className="add-new-board-text pos-abs">
            <span className="add-new-board-text-1">{`Add new board`}</span>
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
        <section className="theme-toggle-wrapper pos-abs">
          <div className="light-theme-toggle pos-abs">
            <div className="light-theme-icon pos-abs">
              <div className="light-theme-icon-sun pos-abs">
                <div className="nodeBg-232228 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="dark-theme-icon pos-abs">
            <div className="dark-theme-icon-moon pos-abs">
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
        <section className="search-icon-wrapper pos-abs">
          <div className="search-icon-circle pos-abs">
            <div className="nodeBg-232219 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="search-icon-handle pos-abs">
            <div className="nodeBg-232220 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="user-name pos-abs">
          <span className="user-name-1">{`Arya`}</span>
        </div>
        {/* mynaui:notification1 */}
        <section className="notification-icon pos-abs">
          <div className="notification-icon-dot pos-abs">
            <div className="nodeBg-232352 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="notification-icon-bell pos-abs">
            <div className="nodeBg-232351 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* formkit:down1 */}
        <section className="user-dropdown-icon pos-abs">
          <div className="dropdown-arrow pos-abs">
            <div className="nodeBg-232224 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>

        <div className="welcome-message pos-abs">
          <span className="welcome-message-1">{`Hi, Arya!
What do you want 
to`}</span>
          <span className="welcome-message-1-2">{` `}</span>
          <span className="welcome-message-1-2-3">{`learn`}</span>
          <span className="welcome-message-1-2-3-4">{` today?`}</span>
        </div>
        {/* Frame 301 */}
        <section className="course-card-separator pos-abs">
          <div className="separator-icon-wrapper pos-abs">
            <div className="separator-icon-background pos-abs"></div>

            <div className="separator-icon pos-abs">
              <div className="nodeBg-232201 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Frame 261 */}
        <section className="course-card-character-design pos-abs">
          <div className="course-image-character-design pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232197 "
              alt="Character design course thumbnail"
            />{" "}
          </div>

          <div className="course-title-character-design pos-abs">
            <span className="course-title-character-design-1">{`Character design`}</span>
          </div>

          <div className="instructor-name-character-design pos-abs">
            <span className="instructor-name-character-design-1">{`Mr. Bennett`}</span>
          </div>
        </section>
        {/* Frame 271 */}
        <section className="course-card-storyboarding pos-abs">
          <div className="course-image-storyboarding pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232205 "
              alt="Storyboarding course thumbnail"
            />{" "}
          </div>

          <div className="course-title-storyboarding pos-abs">
            <span className="course-title-storyboarding-1">{`Storyboarding`}</span>
          </div>

          <div className="instructor-name-storyboarding pos-abs">
            <span className="instructor-name-storyboarding-1">{`Ms. Caldwell`}</span>
          </div>
        </section>
        {/* Frame 281 */}
        <section className="course-card-visual-storytelling pos-abs">
          <div className="course-image-visual-storytelling pos-abs">
            <img
              src={image3}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232209 "
              alt="Visual Storytelling course thumbnail"
            />{" "}
          </div>

          <div className="course-title-visual-storytelling pos-abs">
            <span className="course-title-visual-storytelling-1">{`Visual Storytelling`}</span>
          </div>

          <div className="instructor-name-visual-storytelling pos-abs">
            <span className="instructor-name-visual-storytelling-1">{`Mrs. Hastings`}</span>
          </div>
        </section>
        {/* Frame 291 */}
        <section className="course-card-2d-animation pos-abs">
          <div className="course-image-2d-animation pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232333 "
              alt="2D Animation course thumbnail"
            />{" "}
          </div>

          <div className="course-title-2d-animation pos-abs">
            <span className="course-title-2d-animation-1">{`2D Animation`}</span>
          </div>

          <div className="instructor-name-2d-animation pos-abs">
            <span className="instructor-name-2d-animation-1">{`Mr. Parker`}</span>
          </div>
        </section>

        <div className="get-ahead in-li-232210 pos-abs">
          <span className="get-ahead in-li-232210-0">{`Get ahead in life is by getting started, no matter how small your steps are in the beginning.`}</span>
        </div>
        {/* Frame 151 */}
        <section className="to-do-list-section pos-abs">
          <div className="to-do-list-title pos-abs">
            <span className="to-do-list-title-1">{`To do list`}</span>
          </div>

          <div className="to-do-list-avatar-group pos-abs">
            <div className="to-do-list-avatar-1 pos-abs">
              <img
                src={image5}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232252 "
                alt="232252-ALT"
              />{" "}
            </div>

            <div className="to-do-list-avatar-2 pos-abs">
              <img
                src={image6}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232253 "
                alt="232253-ALT"
              />{" "}
            </div>

            <div className="to-do-list-avatar-3 pos-abs">
              <img
                src={image7}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232254 "
                alt="232254-ALT"
              />{" "}
            </div>

            <div className="to-do-list-avatar-4 pos-abs">
              <img
                src={image8}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232255 "
                alt="232255-ALT"
              />{" "}
            </div>

            <div className="to-do-list-avatar-more pos-abs">
              <div className="to-do-list-avatar-more-background pos-abs"></div>

              <div className="to-do-list-avatar-more-icon pos-abs">
                <div className="nodeBg-232258 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="to-do-list-edit-button pos-abs">
            <div className="to-do-list-edit-text pos-abs">
              <span className="to-do-list-edit-text-1">{`Edit`}</span>
            </div>

            <div className="to-do-list-edit-icon pos-abs">
              <div className="edit-icon-pencil pos-abs">
                <div className="nodeBg-232267 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="to-do-list-share-button pos-abs">
            <div className="to-do-list-share-text pos-abs">
              <span className="to-do-list-share-text-1">{`Share`}</span>
            </div>

            <div className="to-do-list-share-icon pos-abs">
              <div className="share-icon-arrow pos-abs">
                <div className="nodeBg-232262 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="share-icon-base pos-abs">
                <div className="nodeBg-232263 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="to-do-list-dot pos-abs">
            <div className="nodeBg-232250 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="to-do-item-character pos-abs">
            <div className="to-do-item-character-title pos-abs">
              <span className="to-do-item-character-title-1">{`Create Your Own 
Original Character (OC)`}</span>
            </div>

            <div className="to-do-item-character-priority pos-abs">
              <div className="to-do-item-character-priority-text pos-abs">
                <span className="to-do-item-character-priority-text-1">{`Low`}</span>
              </div>
            </div>

            <div className="to-do-item-character-tag pos-abs">
              <div className="to-do-item-character-tag-text pos-abs">
                <span className="to-do-item-character-tag-text-1">{`Character Design`}</span>
              </div>
            </div>

            <div className="to-do-item-character-checkbox pos-abs">
              <img
                src={image8}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232241 "
                alt="232241-ALT"
              />{" "}
            </div>

            <div className="to-do-item-character-instructor pos-abs">
              <span className="to-do-item-character-instructor-1">{`Mr. Bennett`}</span>
            </div>
          </div>

          <div className="to-do-item-storyboard pos-abs">
            <div className="to-do-item-storyboard-title pos-abs">
              <span className="to-do-item-storyboard-title-1">{`Create a Short Storyboard
for a 1-Minute Animation`}</span>
            </div>

            <div className="to-do-item-storyboard-priority pos-abs">
              <div className="to-do-item-storyboard-priority-text pos-abs">
                <span className="to-do-item-storyboard-priority-text-1">{`High`}</span>
              </div>
            </div>

            <div className="to-do-item-storyboard-tag pos-abs">
              <div className="to-do-item-storyboard-tag-text pos-abs">
                <span className="to-do-item-storyboard-tag-text-1">{`Storyboarding`}</span>
              </div>
            </div>

            <div className="to-do-item-storyboard-checkbox pos-abs">
              <img
                src={image7}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232249 "
                alt="232249-ALT"
              />{" "}
            </div>

            <div className="to-do-item-storyboard-instructor pos-abs">
              <span className="to-do-item-storyboard-instructor-1">{`Ms. Caldwell`}</span>
            </div>
          </div>
        </section>
        {/* Frame 161 */}
        <section className="my-assignments-section pos-abs">
          <div className="my-assignments-title pos-abs">
            <span className="my-assignments-title-1">{`My assignments`}</span>
          </div>

          <div className="my-assignments-more-icon pos-abs">
            <div className="my-assignments-more-icon-background pos-abs"></div>

            <div className="my-assignments-more-icon-dots pos-abs">
              <div className="nodeBg-232282 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="my-assignments-edit-icon pos-abs">
            <div className="my-assignments-edit-icon-pencil pos-abs">
              <div className="nodeBg-232279 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="my-assignments-share-icon pos-abs">
            <div className="my-assignments-share-icon-arrow pos-abs">
              <div className="nodeBg-232276 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="my-assignments-share-icon-base pos-abs">
              <div className="nodeBg-232277 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="my-assignments-dot pos-abs">
            <div className="nodeBg-232274 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>

          <div className="assignment-card-3d-modeling pos-abs">
            <div className="assignment-title-3d-modeling pos-abs">
              <span className="assignment-title-3d-modeling-1">{`3D Modeling`}</span>
            </div>

            <div className="assignment-due-date pos-abs">
              <span className="assignment-due-date-1">{`15
Mar`}</span>
            </div>

            <div className="assignment-icon-3d-modeling pos-abs"></div>

            <div className="assignment-icon-3d-modeling-image pos-abs">
              <img
                src={image9}
                className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232286 "
                alt="3D modeling icon"
              />{" "}
            </div>

            <div className="assignment-subtitle-3d-modeling pos-abs">
              <span className="assignment-subtitle-3d-modeling-1">{`Create a Low-Poly 3D Asset`}</span>
            </div>

            <div className="assignment-progress-percentage pos-abs">
              <span className="assignment-progress-percentage-1">{`65%`}</span>
            </div>

            <div className="assignment-submission-time pos-abs">
              <div className="assignment-submission-time-icon pos-abs">
                <div className="submission-time-icon-wrapper pos-abs">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F04-nov-2024%2Farya1730730399742%2Fimage-232-297.png?alt=media&token=0"
                    className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div  object-fit"
                    alt="232297-ALT"
                  />{" "}
                </div>
              </div>

              <div className="assignment-submission-time-text pos-abs">
                <span className="assignment-submission-time-text-1">{`09 Mar, 10:30 AM`}</span>
              </div>
            </div>

            <div className="assignment-progress-bar pos-abs">
              <div className="assignment-progress-bar-background pos-abs">
                <div className="nodeBg-232292 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="assignment-progress-bar-fill pos-abs">
                <div className="nodeBg-232293 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="assignment-card-3d-modeling-selected pos-abs"></div>

          <div className="assignments-next-button pos-abs">
            <div className="assignments-next-button-arrow pos-abs">
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

        <div className="pixel-art-title pos-abs">
          <span className="pixel-art-title-1">{`Where brilliant ideas meet tiny canvases!`}</span>
        </div>
        {/* uit:calender1 */}
        <section className="calendar-icon pos-abs">
          <div className="calendar-icon-body pos-abs">
            <div className="nodeBg-232328 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
          </div>
        </section>
        {/* Group 51 */}
        <section className="schedule-edit-button pos-abs">
          <div className="schedule-edit-text pos-abs">
            <span className="schedule-edit-text-1">{`Edit`}</span>
          </div>

          <div className="schedule-edit-icon pos-abs">
            <div className="schedule-edit-icon-pencil pos-abs">
              <div className="nodeBg-232271 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>

        <div className="test-day-label pos-abs">
          <span className="test-day-label-1">{`Test Day`}</span>
        </div>

        <div className="upcoming-tests-dot pos-abs">
          <div className="nodeBg-232329 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
        </div>
        {/* Frame 201 */}
        <section className="upcoming-tests-calendar-monday pos-abs">
          <div className="upcoming-tests-date-monday pos-abs">
            <span className="upcoming-tests-date-monday-1">{`13`}</span>
          </div>

          <div className="upcoming-tests-day-monday pos-abs">
            <span className="upcoming-tests-day-monday-1">{`Monday`}</span>
          </div>
        </section>
        {/* Frame 211 */}
        <section className="upcoming-tests-calendar-tuesday pos-abs">
          <div className="upcoming-tests-date-tuesday pos-abs">
            <span className="upcoming-tests-date-tuesday-1">{`14`}</span>
          </div>

          <div className="upcoming-tests-subject-tuesday pos-abs">
            <span className="upcoming-tests-subject-tuesday-1">{`Animation`}</span>
          </div>

          <div className="upcoming-tests-day-tuesday pos-abs">
            <span className="upcoming-tests-day-tuesday-1">{`Tuesday`}</span>
          </div>
        </section>
        {/* Frame 311 */}
        <section className="upcoming-tests-calendar-wednesday pos-abs">
          <div className="upcoming-tests-date-wednesday pos-abs">
            <span className="upcoming-tests-date-wednesday-1">{`15`}</span>
          </div>

          <div className="upcoming-tests-subject-wednesday pos-abs">
            <span className="upcoming-tests-subject-wednesday-1">{`3D Modeling`}</span>
          </div>

          <div className="upcoming-tests-day-wednesday pos-abs">
            <span className="upcoming-tests-day-wednesday-1">{`Wednesday`}</span>
          </div>
        </section>

        <div className="schedule-time-slot-1 pos-abs">
          <span className="schedule-time-slot-1-1">{`11:00 AM - 12:00 PM`}</span>
        </div>

        <div className="schedule-subject-1 pos-abs">
          <span className="schedule-subject-1-1">{`2D Animation`}</span>
        </div>
        {/* Group 81 */}
        <section className="pixel-art-canvas-group-2 pos-abs">
          <div className="pixel-art-canvas-toolbar-2 pos-abs"></div>

          <div className="pixel-art-canvas-2 pos-abs"></div>
        </section>

        <div className="schedule-divider-1 pos-abs"></div>
        {/* Group 71 */}
        <section className="pixel-art-canvas-group pos-abs">
          <div className="pixel-art-canvas-toolbar pos-abs"></div>

          <div className="pixel-art-canvas pos-abs"></div>
        </section>

        <div className="schedule-time-slot-2 pos-abs">
          <span className="schedule-time-slot-2-1">{`01:00 PM - 02:00 PM`}</span>
        </div>

        <div className="schedule-subject-2 pos-abs">
          <span className="schedule-subject-2-1">{`Pencil Drawing`}</span>
        </div>

        <div className="schedule-divider-2 pos-abs"></div>

        <div className="schedule-time-slot-3 pos-abs">
          <span className="schedule-time-slot-3-1">{`03:00 PM - 04:30 PM`}</span>
        </div>

        <div className="schedule-subject-3 pos-abs">
          <span className="schedule-subject-3-1">{`Storyboarding`}</span>
        </div>
        {/* Frame 321 */}
        <section className="upcoming-tests-calendar-thursday pos-abs">
          <div className="upcoming-tests-date-thursday pos-abs">
            <span className="upcoming-tests-date-thursday-1">{`16`}</span>
          </div>

          <div className="upcoming-tests-day-thursday pos-abs">
            <span className="upcoming-tests-day-thursday-1">{`Thursday`}</span>
          </div>
        </section>
        {/* Frame 331 */}
        <section className="upcoming-tests-calendar-friday pos-abs">
          <div className="upcoming-tests-date-friday pos-abs">
            <span className="upcoming-tests-date-friday-1">{`17`}</span>
          </div>

          <div className="upcoming-tests-day-friday pos-abs">
            <span className="upcoming-tests-day-friday-1">{`Friday`}</span>
          </div>
        </section>

        <div className="upcoming-tests-emoji pos-abs">
          <img
            src={image10}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-232334 "
            alt="Smiling sun emoji"
          />{" "}
        </div>

        <div className="schedule-divider-3 pos-abs"></div>

        <div className="schedule-time-slot-4 pos-abs">
          <span className="schedule-time-slot-4-1">{`05:00 PM - 06:00 PM`}</span>
        </div>

        <div className="schedule-subject-4 pos-abs">
          <span className="schedule-subject-4-1">{`3D Modeling`}</span>
        </div>

        <div className="schedule-divider-4 pos-abs"></div>
        {/* Frame 251 */}
        <section className="upcoming-tests-emoji-shadow pos-abs"></section>

        <div className="pixel-art-example pos-abs">
          <img
            src={image11}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-232359 "
            alt="Pixel art example image"
          />{" "}
        </div>

        <div className="schedule-time-slot-5 pos-abs">
          <span className="schedule-time-slot-5-1">{`06:00 PM - 06:30 PM`}</span>
        </div>

        <div className="schedule-subject-5 pos-abs">
          <span className="schedule-subject-5-1">{`Logo Design`}</span>
        </div>
        {/* Frame 421 */}
        <section className="pixel-art-tools pos-abs">
          <div className="pixel-art-tool-cursor pos-abs">
            <div className="pixel-art-tool-cursor-icon pos-abs">
              <div className="pixel-art-tool-cursor-icon-shape pos-abs">
                <div className="nodeBg-232358 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="pixel-art-tool-highlight pos-abs">
            <div className="pixel-art-tool-highlight-icon pos-abs">
              <div className="nodeBg-232355 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
