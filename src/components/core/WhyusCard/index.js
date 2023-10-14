import { jost } from "../../../lib/fonts";
import classes from "./why-us-card.module.css";

const WhyusCard = ({ title, description, icon }) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>{icon}</div>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.description + " " + jost.className}>
        {description}
      </div>
    </div>
  );
};

export default WhyusCard;
