import classes from "./main-carousel-section.module.css";
import { CarouselItems, SocialLinks } from "../../../../../globals/mock";
import Carousel from "../../../../core/Carousel";

const MainCarouselSection = (props) => {
  const socialLinkHandler = (url) => {
    window.open(url, "blank");
  };
  return (
    <Carousel
      components={CarouselItems.map((item) => (
        <div key={item.id} className={classes.item}>
          <div
            className={classes.bg_img}
            style={{ backgroundImage: `url('${item.backgroundImage.src}')` }}
          ></div>
          <span className={classes.gradient}></span>
          <div className={classes.title}>{item.title}</div>
          <h2 className={classes.description}>{item.description}</h2>
        </div>
      ))}
    />
  );
};

export default MainCarouselSection;
