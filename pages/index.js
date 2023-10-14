import classes from "../src/styles/Home.module.css";
import {
  MainCarouselSection,
  ServicesSection,
  WhyusSection,
} from "../src/components/main/Home";
import Animate from "../src/components/core/Animate";
import MetaInfo from "../src/components/main/MetaInfo";

export default function Home() {
  return (
    <>
      {MetaInfo()}
      <div>
        <div className={classes.container}>
          <Animate>
            <MainCarouselSection />
          </Animate>
          <ServicesSection />
          <Animate>
            <WhyusSection />
          </Animate>
        </div>
      </div>
    </>
  );
}
