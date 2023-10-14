import {
  COMPANY_NAME,
  WHY_US_CARDS,
  WHY_US_DESCRIPTION,
} from "../../../../../globals/mock";
import classes from "./why-us-section.module.css";
import WhyusCard from "../../../../core/WhyusCard";
import { jost } from "../../../../../lib/fonts";

const WhyusSection = (props) => {
  return (
    <section className={classes.bg}>
      <div className={"container " + classes.section}>
        <h2 className={classes.headline}>Why {COMPANY_NAME}?</h2>
        <div className={classes.description + " " + jost.className}>
          {WHY_US_DESCRIPTION}
        </div>
        <div className={classes.cards}>
          {WHY_US_CARDS.map((card) => (
            <WhyusCard {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyusSection;
