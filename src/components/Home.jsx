import React, { useEffect } from "react";
import "../styles/Home.css";
import { Link } from 'react-router-dom';
import image0 from "../assets/images/image0.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import image10 from "../assets/images/image10.png";
import image11 from "../assets/images/image11.png";
import image12 from "../assets/images/image12.png";
import image13 from "../assets/images/image13.png";

import runAnimations from "./scripts"; // Adjusted import if `allLinks` and `allFunctions` are not used

const Home = () => {
  useEffect(() => {
    runAnimations();
  }, []);

  return (
    <div className="parent-div ">
      <div className="home-page-container pos-abs">
        {/* Frame 111 */}
        <section className="get-started-button-container pos-abs">
  <div className="get-started-button-text pos-abs">
    <Link to="/signup" className="get-started-button-text-1">
      {`Get Started`}
    </Link>
  </div>
</section>
        {/* Group 191 */}
        <section className="navigation-links-container pos-abs">
          <div className="home-nav-link pos-abs">
            <span className="home-nav-link-1">{`Home`}</span>
          </div>

          <div className="join-course-nav-link pos-abs">
            <span className="join-course-nav-link-1">{`Join a Course`}</span>
          </div>

          <div className="hire-mentor-nav-link pos-abs">
            <span className="hire-mentor-nav-link-1">{`Hire a Mentor`}</span>
          </div>

          <div className="blog-nav-link pos-abs">
            <span className="blog-nav-link-1">{`Blog`}</span>
          </div>
        </section>

        <div className="logo-text pos-abs">
          <span className="logo-text-1">{`EDU`}</span>
        </div>
        {/* Frame 261 */}
        <section className="princeton-button-container pos-abs">
          <div className="princeton-button-text pos-abs">
            <span className="princeton-button-text-1">{`Princeton`}</span>
          </div>
        </section>
        {/* Frame 241 */}
        <section className="ios-developing-button-container pos-abs">
          <div className="ios-developing-button-text pos-abs">
            <span className="ios-developing-button-text-1">{`IOS Developing`}</span>
          </div>
        </section>
        {/* Group 181 */}
        <section className="hero-section-container pos-abs">
          <div className="hero-background-container pos-abs"></div>

          <div className="hero-heading pos-abs">
            <span className="hero-heading-1">{`W`}</span>
            <span className="hero-heading-1-2">{`:`}</span>
            <span className="hero-heading-1-2-3">{`     Find what’s next`}</span>
          </div>

          <div className="hero-heading-underline pos-abs"></div>
        </section>
        {/* Frame 181 */}
        <section className="new-haven-button-container pos-abs">
          <div className="new-haven-button-text pos-abs">
            <span className="new-haven-button-text-1">{`New Haven`}</span>
          </div>
        </section>
        {/* Frame 171 */}
        <section className="yale-university-button-container pos-abs">
          <div className="yale-university-button-text pos-abs">
            <span className="yale-university-button-text-1">{`Yale University`}</span>
          </div>
        </section>
        {/* Frame 112 */}
        <section className="animation-button-container pos-abs">
          <div className="animation-button-text pos-abs">
            <span className="animation-button-text-1">{`Animation`}</span>
          </div>
        </section>
        {/* Frame 211 */}
        <section className="animation-button-container-duplicate pos-abs">
          <div className="animation-button-text-duplicate pos-abs">
            <span className="animation-button-text-duplicate-1">{`Animation`}</span>
          </div>
        </section>
        {/* Frame 131 */}
        <section className="stanford-university-button-container pos-abs">
          <div className="stanford-university-button-text pos-abs">
            <span className="stanford-university-button-text-1">{`Stanford University`}</span>
          </div>
        </section>
        {/* Frame 121 */}
        <section className="character-design-button-container pos-abs">
          <div className="character-design-button-text pos-abs">
            <span className="character-design-button-text-1">{`Character design`}</span>
          </div>
        </section>
        {/* Frame 161 */}
        <section className="storyboarding-button-container pos-abs">
          <div className="storyboarding-button-text pos-abs">
            <span className="storyboarding-button-text-1">{`Storyboarding`}</span>
          </div>
        </section>
        {/* Frame 191 */}
        <section className="android-developing-button-container pos-abs">
          <div className="android-developing-button-text pos-abs">
            <span className="android-developing-button-text-1">{`Android Developing`}</span>
          </div>
        </section>
        {/* Frame 151 */}
        <section className="node-js-developing-button-container pos-abs">
          <div className="node-js-developing-button-text pos-abs">
            <span className="node-js-developing-button-text-1">{`Node JS Developing`}</span>
          </div>
        </section>
        {/* Frame 231 */}
        <section className="cyber-security-button-container pos-abs">
          <div className="cyber-security-button-text pos-abs">
            <span className="cyber-security-button-text-1">{`Cyber Security`}</span>
          </div>
        </section>
        {/* Frame 141 */}
        <section className="designing-button-container pos-abs">
          <div className="designing-button-text pos-abs">
            <span className="designing-button-text-1">{`Designing`}</span>
          </div>
        </section>
        {/* Frame 221 */}
        <section className="designing-button-container-duplicate pos-abs">
          <div className="designing-button-text-duplicate pos-abs">
            <span className="designing-button-text-duplicate-1">{`Designing`}</span>
          </div>
        </section>
        {/* Frame 251 */}
        <section className="princeton-university-button-container pos-abs">
          <div className="princeton-university-button-text pos-abs">
            <span className="princeton-university-button-text-1">{`Princeton University`}</span>
          </div>
        </section>

        <div className="mentors-students-connect-text pos-abs">
          <span className="mentors-students-connect-text-1">{`Where Mentors and Students Connects`}</span>
        </div>
        {/* Frame 271 */}
        <section className="subscribe-button-container pos-abs">
          <div className="subscribe-button-text pos-abs">
            <span className="subscribe-button-text-1">{`Subscribe`}</span>
          </div>
        </section>

        <div className="workstation-image pos-abs">
          <img
            src={image0}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380589 "
            alt="Workstation setup with laptop and accessories"
          />{" "}
        </div>

        <div className="edu-logo-text-duplicate pos-abs">
          <span className="edu-logo-text-duplicate-1">{`EDU`}</span>
        </div>

        <div className="effective-learning-text pos-abs">
          <span className="effective-learning-text-1">{`Effective Learning`}</span>
        </div>

        <div className="interactive-learning-experience-text pos-abs">
          <span className="interactive-learning-experience-text-1">{`Interactive
and Engaging
Learning
Experience`}</span>
        </div>
        {/* Group 211 */}
        <section className="partner-logos-container pos-abs">
          <div className="partner-logo-1 pos-abs">
            <img
              src={image1}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380600 "
              alt="Partner company logo 1"
            />{" "}
          </div>

          <div className="partner-logo-2 pos-abs">
            <img
              src={image2}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380601 "
              alt="Partner company logo 2"
            />{" "}
          </div>

          <div className="partner-logo-4 pos-abs">
            <img
              src={image3}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380603 "
              alt="Partner company logo 4"
            />{" "}
          </div>

          <div className="partner-logo-3 pos-abs">
            <img
              src={image4}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380602 "
              alt="Partner company logo 3"
            />{" "}
          </div>

          <div className="partner-logo-5 pos-abs">
            <img
              src={image5}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380605 "
              alt="Partner company logo 5"
            />{" "}
          </div>

          <div className="partner-logo-6 pos-abs">
            <img
              src={image6}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-380606 "
              alt="Partner company logo 6"
            />{" "}
          </div>
        </section>

        <div className="learn-from-the -380175 pos-abs">
          <span className="learn-from-the -380175-0">{`Learn from the best instructors.`}</span>
        </div>
        {/* Frame 611 */}
        <section className="featured-course-card-1 pos-abs">
          <div className="featured-course-image-container-1 pos-abs">
            <img
              src={image7}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-4158 "
              alt="4158-ALT"
            />{" "}
          </div>

          <div className="featured-course-title-1 pos-abs">
            <span className="featured-course-title-1-1">{`Interaction Design Foundation and
Design psychology`}</span>
          </div>

          <div className="featured-course-divider-1 pos-abs"></div>

          <div className="instructor-label pos-abs">
            <span className="instructor-label-1">{`Instructor`}</span>
          </div>

          <div className="instructor-name pos-abs">
            <span className="instructor-name-1">{`Santangelo`}</span>
          </div>

          <div className="featured-course-divider-2 pos-abs"></div>

          <div className="course-rating-container pos-abs">
            <div className="score- 455-41526 pos-abs">
              <span className="score- 455-41526-0">{`Score `}</span>
              <span className="score- 455-41526-1">{` `}</span>
              <span className="score- 455-41526-2">{`4.5/5`}</span>
            </div>

            <div className="course-rating-bar-background pos-abs">
              <div className="nodeBg-41529 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="course-rating-bar-filled pos-abs">
              <div className="nodeBg-41533 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="course-arrow-icon-container pos-abs">
            <div className="course-arrow-icon pos-abs">
              <div className="nodeBg-41551 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Frame 621 */}
        <section className="featured-course-card-2 pos-abs">
          <div className="featured-course-image-container-2 pos-abs">
            <img
              src={image8}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-41516 "
              alt="41516-ALT"
            />{" "}
          </div>

          <div className="featured-course-title-2 pos-abs">
            <span className="featured-course-title-2-1">{`Robotics and Automation (Design 
of Machine Elements)`}</span>
          </div>

          <div className="featured-course-divider-3 pos-abs"></div>

          <div className="instructor-label-2 pos-abs">
            <span className="instructor-label-2-1">{`Instructor `}</span>
          </div>

          <div className="instructor-name-2 pos-abs">
            <span className="instructor-name-2-1">{`Pablo Stanley`}</span>
          </div>

          <div className="featured-course-divider-4 pos-abs"></div>

          <div className="course-rating-container-2 pos-abs">
            <div className="score- 455-41542 pos-abs">
              <span className="score- 455-41542-0">{`Score`}</span>
              <span className="score- 455-41542-1">{` `}</span>
              <span className="score- 455-41542-2">{` `}</span>
              <span className="score- 455-41542-3">{`4.5/5`}</span>
            </div>

            <div className="course-rating-bar-background-2 pos-abs">
              <div className="nodeBg-41537 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>

            <div className="course-rating-bar-filled-2 pos-abs">
              <div className="nodeBg-41538 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="course-arrow-icon-container-2 pos-abs">
            <div className="course-arrow-icon-2 pos-abs">
              <div className="nodeBg-41556 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Group 241 */}
        <section className="courses-cta-container pos-abs">
          <div className="courses-cta-text pos-abs">
            <span className="courses-cta-text-1">{`Choose from over`}</span>
            <span className="courses-cta-text-1-2">{` hundreds `}</span>
            <span className="courses-cta-text-1-2-3">{`of courses`}</span>
          </div>

          <div className="courses-cta-edu-text pos-abs">
            <span className="courses-cta-edu-text-1">{`EDU`}</span>
          </div>

          <div className="courses-cta-arrow-icon-container pos-abs">
            <div className="courses-cta-arrow-icon pos-abs">
              <div className="nodeBg-41566 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>

        <div className="directory-subheading pos-abs">
          <span className="directory-subheading-1">{`Directory`}</span>
        </div>

        <div className="edu-universities-heading pos-abs">
          <span className="edu-universities-heading-1">{`EDU.universities`}</span>
        </div>

        <div className="top-universities-subheading pos-abs">
          <span className="top-universities-subheading-1">{`Top uni in your country.`}</span>
        </div>
        {/* Frame 631 */}
        <section className="university-directory-section pos-abs">
          <div className="university-icon-background pos-abs"></div>

          <div className="university-image-container pos-abs">
            <img
              src={image9}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-42440 "
              alt="42440-ALT"
            />{" "}
          </div>

          <div className="university-icon-arrow-container pos-abs">
            <div className="university-icon-arrow-group pos-abs">
              <div className="university-icon-arrow-head pos-abs">
                <div className="nodeBg-42515 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>

              <div className="university-icon-arrow-line pos-abs">
                <div className="nodeBg-42514 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>

          <div className="pagination-dots-container pos-abs">
            <div className="pagination-dot-1 pos-abs"></div>

            <div className="pagination-dot-2 pos-abs"></div>

            <div className="pagination-dot-3 pos-abs"></div>

            <div className="pagination-dot-4 pos-abs"></div>

            <div className="pagination-dot-5 pos-abs"></div>
          </div>

          <div className="university-location-text pos-abs">
            <span className="university-location-text-1">{`United States`}</span>
          </div>

          <div className="university-courses-count-container pos-abs">
            <div className="university-courses-label pos-abs">
              <span className="university-courses-label-1">{`Course`}</span>
            </div>

            <div className="university-courses-count pos-abs">
              <span className="university-courses-count-1">{`13`}</span>
            </div>
          </div>

          <div className="university-name-text pos-abs">
            <span className="university-name-text-1">{`Princeton University`}</span>
          </div>

          <div className="university-website-text pos-abs">
            <span className="university-website-text-1">{`princeton.edu`}</span>
          </div>

          <div className="university-ranking-text pos-abs">
            <span className="university-ranking-text-1">{`#06 Rankings`}</span>
          </div>
        </section>

        <div className="university-table-name-header pos-abs">
          <span className="university-table-name-header-1">{`Name `}</span>
        </div>

        <div className="university-table-profile-header pos-abs">
          <span className="university-table-profile-header-1">{`Profile`}</span>
        </div>

        <div className="university-table-rankings-header pos-abs">
          <span className="university-table-rankings-header-1">{`Rankings`}</span>
        </div>

        <div className="university-table-courses-header pos-abs">
          <span className="university-table-courses-header-1">{`Courses`}</span>
        </div>

        <div className="university-table-header-divider pos-abs"></div>
        {/* Frame 681 */}
        <section className="university-table-view-button-1 pos-abs">
          <div className="university-table-view-button-text-1 pos-abs">
            <span className="university-table-view-button-text-1-1">{`View`}</span>
          </div>
        </section>

        <div className="university-table-harvard-name pos-abs">
          <span className="university-table-harvard-name-1">{`Harvard`}</span>
        </div>

        <div className="university-table-harvard-profile pos-abs">
          <span className="university-table-harvard-profile-1">{`University`}</span>
        </div>

        <div className="university-table-harvard-ranking pos-abs">
          <span className="university-table-harvard-ranking-1">{`#01`}</span>
        </div>

        <div className="university-table-harvard-course pos-abs">
          <span className="university-table-harvard-course-1">{`Character Design`}</span>
        </div>

        <div className="university-table-row-divider-1 pos-abs"></div>
        {/* Frame 691 */}
        <section className="university-table-view-button-2 pos-abs">
          <div className="university-table-view-button-text-2 pos-abs">
            <span className="university-table-view-button-text-2-1">{`View`}</span>
          </div>
        </section>

        <div className="university-table-princeton-name pos-abs">
          <span className="university-table-princeton-name-1">{`Princeton`}</span>
        </div>

        <div className="university-table-princeton-profile pos-abs">
          <span className="university-table-princeton-profile-1">{`University`}</span>
        </div>

        <div className="university-table-princeton-ranking pos-abs">
          <span className="university-table-princeton-ranking-1">{`#06`}</span>
        </div>

        <div className="university-table-princeton-course pos-abs">
          <span className="university-table-princeton-course-1">{`User Experience Design`}</span>
        </div>

        <div className="university-table-row-divider-2 pos-abs"></div>
        {/* Frame 701 */}
        <section className="university-table-view-button-3 pos-abs">
          <div className="university-table-view-button-text-3 pos-abs">
            <span className="university-table-view-button-text-3-1">{`View`}</span>
          </div>
        </section>

        <div className="university-table-cornell-name pos-abs">
          <span className="university-table-cornell-name-1">{`Cornell`}</span>
        </div>

        <div className="university-table-cornell-profile pos-abs">
          <span className="university-table-cornell-profile-1">{`College`}</span>
        </div>

        <div className="university-table-cornell-ranking pos-abs">
          <span className="university-table-cornell-ranking-1">{`#19`}</span>
        </div>

        <div className="university-table-cornell-course pos-abs">
          <span className="university-table-cornell-course-1">{`Interior Design`}</span>
        </div>

        <div className="university-table-row-divider-3 pos-abs"></div>
        {/* Frame 711 */}
        <section className="university-table-view-button-4 pos-abs">
          <div className="university-table-view-button-text-4 pos-abs">
            <span className="university-table-view-button-text-4-1">{`View`}</span>
          </div>
        </section>

        <div className="university-table-yale-name pos-abs">
          <span className="university-table-yale-name-1">{`Yale`}</span>
        </div>

        <div className="university-table-yale-profile pos-abs">
          <span className="university-table-yale-profile-1">{`University`}</span>
        </div>

        <div className="university-table-yale-ranking pos-abs">
          <span className="university-table-yale-ranking-1">{`#21`}</span>
        </div>

        <div className="university-table-yale-course pos-abs">
          <span className="university-table-yale-course-1">{`Storyboarding`}</span>
        </div>

        <div className="university-table-row-divider-4 pos-abs"></div>
        {/* Group 251 */}
        <section className="universities-cta-container pos-abs">
          <div className="universities-cta-text pos-abs">
            <span className="universities-cta-text-1">{`Connect with over `}</span>
            <span className="universities-cta-text-1-2">{`hundreds `}</span>
            <span className="universities-cta-text-1-2-3">{`of Universities and Colleges`}</span>
          </div>

          <div className="universities-cta-link-text pos-abs">
            <span className="universities-cta-link-text-1">{`View Directory`}</span>
          </div>

          <div className="universities-cta-arrow-icon-container pos-abs">
            <div className="universities-cta-arrow-icon pos-abs">
              <div className="nodeBg-42594 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Group 261 */}
        <section className="marketplace-section-container pos-abs">
          <div className="marketplace-subheading pos-abs">
            <span className="marketplace-subheading-1">{`Market`}</span>
          </div>

          <div className="marketplace-heading pos-abs">
            <span className="marketplace-heading-1">{`A curated marketplace for digital & physical products.`}</span>
          </div>
        </section>
        {/* Frame 721 */}
        <section className="product-card-1 pos-abs">
          <div className="product-image-container-1 pos-abs">
            <img
              src={image10}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-43160 "
              alt="43160-ALT"
            />{" "}
          </div>

          <div className="product-type-1 pos-abs">
            <span className="product-type-1-1">{`Digital Product`}</span>
          </div>

          <div className="product-title-1 pos-abs">
            <span className="product-title-1-1">{`Design For Better World: Sustainability 
By Don Norman`}</span>
          </div>

          <div className="product-divider-1 pos-abs"></div>

          <div className="product-price-1 pos-abs">
            <span className="product-price-1-1">{`28`}</span>
          </div>

          <div className="product-price-label-1 pos-abs">
            <span className="product-price-label-1-1">{`from`}</span>
          </div>

          <div className="product-currency-1 pos-abs">
            <span className="product-currency-1-1">{`USD`}</span>
          </div>

          <div className="product-author-1 pos-abs">
            <span className="product-author-1-1">{`by`}</span>
            <span className="product-author-1-1-2">{` Barnes & Noble, Inc`}</span>
          </div>

          <div className="product-divider-2 pos-abs"></div>

          <div className="product-arrow-icon-container-1 pos-abs">
            <div className="product-arrow-icon-1 pos-abs">
              <div className="nodeBg-43170 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="product-view-button-1 pos-abs">
            <span className="product-view-button-1-1">{`View Product`}</span>
          </div>
        </section>
        {/* Frame 731 */}
        <section className="product-card-2 pos-abs">
          <div className="product-image-container-2 pos-abs">
            <img
              src={image11}
              className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-432146 "
              alt="432146-ALT"
            />{" "}
          </div>

          <div className="product-type-2 pos-abs">
            <span className="product-type-2-1">{`Digital Product`}</span>
          </div>

          <div className="product-title-2 pos-abs">
            <span className="product-title-2-1">{`The Laws of Simplicity (Design, Life)`}</span>
          </div>

          <div className="product-divider-3 pos-abs"></div>

          <div className="product-price-2 pos-abs">
            <span className="product-price-2-1">{`32`}</span>
          </div>

          <div className="product-price-label-2 pos-abs">
            <span className="product-price-label-2-1">{`from`}</span>
          </div>

          <div className="product-currency-2 pos-abs">
            <span className="product-currency-2-1">{`USD`}</span>
          </div>

          <div className="product-author-2 pos-abs">
            <span className="product-author-2-1">{`by`}</span>
            <span className="product-author-2-1-2">{` The MIT Press`}</span>
          </div>

          <div className="product-divider-4 pos-abs"></div>

          <div className="product-arrow-icon-container-2 pos-abs">
            <div className="product-arrow-icon-2 pos-abs">
              <div className="nodeBg-432155 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="product-view-button-2 pos-abs">
            <span className="product-view-button-2-1">{`View Product`}</span>
          </div>
        </section>
        {/* Group 271 */}
        <section className="marketplace-cta-container pos-abs">
          <div className="marketplace-cta-group pos-abs">
            <div className="marketplace-cta-text pos-abs">
              <span className="marketplace-cta-text-1">{`Browse specially curated products`}</span>
            </div>

            <div className="marketplace-cta-link-text pos-abs">
              <span className="marketplace-cta-link-text-1">{`View Market`}</span>
            </div>

            <div className="marketplace-cta-arrow-icon-container pos-abs">
              <div className="marketplace-cta-arrow-icon pos-abs">
                <div className="nodeBg-432204 pos-abs pos-init fill-parent image-div bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 741 */}
        <section className="be-a-mentor-card pos-abs">
          <img
            src={image12}
            className="pos-abs image-div bg-no-repeat fill-parent bg-cover nodeBg-4666 "
            alt="4666-ALT"
          />

          <div className="be-a-mentor-subheading pos-abs">
            <span className="be-a-mentor-subheading-1">{`Be a mentor`}</span>
          </div>

          <div className="be-a-mentor-heading pos-abs">
            <span className="be-a-mentor-heading-1">{`Get access to
special mentor
features`}</span>
          </div>

          <div className="be-a-mentor-button-container pos-abs">
            <div className="be-a-mentor-button-text pos-abs">
              <span className="be-a-mentor-button-text-1">{`Be Mentor`}</span>
            </div>
          </div>

          <div className="be-a-mentor-faq-link pos-abs">
            <span className="be-a-mentor-faq-link-1">{`Got questions? Read our `}</span>
            <span className="be-a-mentor-faq-link-1-2">{`FAQs`}</span>
          </div>
        </section>
        {/* Frame 751 */}
        <section className="be-a-star-pupil-card pos-abs">
          <img
            src={image13}
            className="pos-abs image-div bg-no-repeat bg-crop nodeBg-47153 "
            alt="47153-ALT"
          />

          <div className="be-a-star-pupil-subheading pos-abs">
            <span className="be-a-star-pupil-subheading-1">{`Be a star pupil`}</span>
          </div>

          <div className="be-a-star-pupil-heading pos-abs">
            <span className="be-a-star-pupil-heading-1">{`Get access to
special Pro
features`}</span>
          </div>

          <div className="be-a-star-pupil-button-container pos-abs">
            <div className="be-a-star-pupil-button-text pos-abs">
              <span className="be-a-star-pupil-button-text-1">{`Be Star Pupil`}</span>
            </div>
          </div>

          <div className="be-a-star-pupil-faq-link pos-abs">
            <span className="be-a-star-pupil-faq-link-1">{`Got questions? Read our `}</span>
            <span className="be-a-star-pupil-faq-link-1-2">{`FAQs`}</span>
          </div>
        </section>

        <div className="footer-logo pos-abs">
          <span className="footer-logo-1">{`EDU`}</span>
        </div>

        <div className="footer-links-column-3 pos-abs">
          <span className="footer-links-column-3-1">{`Courses
Directory
Market`}</span>
        </div>

        <div className="footer-links-column-2 pos-abs">
          <span className="footer-links-column-2-1">{`Directory
Conferences`}</span>
        </div>

        <div className="footer-links-column-1 pos-abs">
          <span className="footer-links-column-1-1">{`FAQs
About Us
Contact Us`}</span>
        </div>

        <div className="footer-divider pos-abs"></div>

        <div className="footer-cookies-policy-link pos-abs">
          <span className="footer-cookies-policy-link-1">{`Cookies Policy`}</span>
        </div>

        <div className="footer-legal-terms-link pos-abs">
          <span className="footer-legal-terms-link-1">{`Legal Terms`}</span>
        </div>

        <div className="footer-privacy-policy-link pos-abs">
          <span className="footer-privacy-policy-link-1">{`Privacy Policy`}</span>
        </div>

        <div className="footer-connect-label pos-abs">
          <span className="footer-connect-label-1">{`Connect:`}</span>
        </div>

        <div className="footer-instagram-link pos-abs">
          <span className="footer-instagram-link-1">{`Instagram`}</span>
        </div>

        <div className="footer-linkedin-link pos-abs">
          <span className="footer-linkedin-link-1">{`LinkedIn`}</span>
        </div>

        <div className="footer-twitter-link pos-abs">
          <span className="footer-twitter-link-1">{`Twitter`}</span>
        </div>

        <div className="footer-pinterest-link pos-abs">
          <span className="footer-pinterest-link-1">{`Pinterest`}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
