import {
  ABOUT_US_TITLE,
  ABOUT_US_WHO_WE_ARE,
  HOW_WE_ARE,
  JOB_OPENING,
  TEAM,
  TESTIMONIALS,
} from "../../src/globals/mock";
import classes from "./about-us.module.css";
import Animate from "../../src/components/core/Animate";
import ClutchLogo from "../../src/assets/icons/clutch_logo.svg";
import WhoweareImage from "../../src/assets/images/who_we_are.jpeg";
import FullStarIcon from "../../src/assets/icons/fullstar.svg";
import QuoteIcon from "../../src/assets/icons/quote.svg";
import LeftArrowIcon from "../../src/assets/icons/left-arrow-white-lg.svg";
import RightArrowIcon from "../../src/assets/icons/right-arrow-white-lg.svg";
import { useState } from "react";
import ServiceCard from "../../src/components/core/ServiceCard";
import TeamMemberCard from "../../src/components/core/TeamMemberCard";
import MetaInfo from "../../src/components/main/MetaInfo";
import Link from "next/link";
import { jost } from "../../src/lib/fonts";
import Image from "next/image";
const AboutUsPage = () => {
  const [activeTestimony, setActiveTestimony] = useState(0);

  const testimonyHandler = (position) => {
    if (position === "next") {
      setActiveTestimony((currentState) => {
        if (currentState === TESTIMONIALS.length - 1) {
          return 0;
        } else {
          return currentState + 1;
        }
      });
    } else if (position === "prev") {
      setActiveTestimony((currentState) => {
        if (currentState === 0) {
          return TESTIMONIALS.length - 1;
        } else {
          return currentState - 1;
        }
      });
    }
  };

  const [leftHovered, setLeftHovered] = useState();
  const [rightHovered, setRightHovered] = useState();

  return (
    <>
      {MetaInfo()}
      <div className={classes.container}>
        <Animate>
          <div className={classes.bg_img}>
            <div className={classes.title_container}>
              <div className={classes.tc_l}>
                <span>we are Dedicated</span>
                <h2>About Us</h2>
              </div>
              <div className={classes.tc_r}>
                <ul className={classes.breadcrumb}>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
            <div className={classes.mask_txt_position}>
              <div className={classes.mask_txt}>IT Solution</div>
            </div>
          </div>
        </Animate>
        <Animate>
          <div className={"container"}>
            <h1 className={classes.title}>{ABOUT_US_TITLE}</h1>
            <div className={classes.who_we_are_c}>
              <div className={classes.who_we_are}>
                <p className={classes.wwa_l + " " + jost.className}>
                  {ABOUT_US_WHO_WE_ARE[0]}
                </p>
                <p className={classes.wwa_r + " " + jost.className}>
                  {ABOUT_US_WHO_WE_ARE[1]}
                </p>
              </div>
              <div className={classes.who_we_are_image}>
                <Image src={WhoweareImage} />
              </div>
            </div>
          </div>
        </Animate>
        <Animate>
          <div className={"container"}>
            <h1 className={classes.title}>{"How we work"}</h1>
            <div className={classes.how_we_work}>
              {HOW_WE_ARE.map((item, index) => (
                <div className={classes.hwa_item}>
                  <div className={classes.hwa_sr}>
                    <span>{item.id}</span>
                  </div>
                  <div className={classes.hwa_title}>{item.title}</div>
                  <div className={classes.hwa_desc}>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </Animate>
        <Animate>
          <div className={"container"}>
            <div className={classes.testimonial_container}>
              <div className={classes.clutch_o_card}>
                <h3 className={classes.tc_count}>10+</h3>
                <h2 className={classes.tc_served}>Clients Already Served</h2>
                <div className={classes.clutch_c}>
                  <div className={classes.cc_l}>
                    <div>Reviewed on</div>
                    <ClutchLogo />
                  </div>
                  <div className={classes.cc_r}>
                    <div className={classes.stars}>
                      {[...Array(4).keys()].map((_) => (
                        <FullStarIcon />
                      ))}
                    </div>
                    <div>10 reviews</div>
                  </div>
                </div>
              </div>
              <div className={classes.testimonial_card}>
                <div className={classes.tc_c}>
                  <div className={classes.quote_icon}>
                    <QuoteIcon />
                  </div>
                  <div className={classes.nav_icons}>
                    <div
                      onClick={() => testimonyHandler("prev")}
                      onMouseOver={() => setLeftHovered(true)}
                      onMouseLeave={() => setLeftHovered(false)}
                      className={leftHovered ? classes.stroke_white : undefined}
                    >
                      <LeftArrowIcon />
                    </div>
                    <div
                      onClick={() => testimonyHandler("next")}
                      onMouseOver={() => setRightHovered(true)}
                      onMouseLeave={() => setRightHovered(false)}
                      className={
                        rightHovered ? classes.stroke_white : undefined
                      }
                    >
                      <RightArrowIcon />
                    </div>
                  </div>
                </div>
                <div className={classes.testimony + " " + jost.className}>
                  <div>{TESTIMONIALS[activeTestimony].testimony}</div>
                  <h5>{TESTIMONIALS[activeTestimony].name}</h5>
                </div>
              </div>
            </div>
          </div>
        </Animate>
        {/* <div className={"container " + classes.team_section}>
          <h1 className={classes.team_title}>{"Our Talented Team"}</h1>
          <div className={classes.team_members}>
            {TEAM.map((team) => (
              <TeamMemberCard key={team.id} {...team} />
            ))}
          </div>
        </div> */}
        {/* <Animate>
          <div className={"container " + classes.job_opening_section}>
            <ServiceCard
              {...JOB_OPENING}
              imageBgclassName={classes.job_opening_bg}
            />
          </div>
        </Animate> */}
      </div>
    </>
  );
};

export default AboutUsPage;
