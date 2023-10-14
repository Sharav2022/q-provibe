import { Services } from "../../src/globals/mock";
import classes from "./services.module.css";
import ServiceCard from "../../src/components/core/ServiceCard";
import CircleBGIcon from "../../src/assets/icons/circle-bg.svg";
import Animate from "../../src/components/core/Animate";
import Head from "next/head";
import MetaInfo from "../../src/components/main/MetaInfo";
const ServicesPage = () => {
  return (
    <>
      {MetaInfo()}
      <section className={"container " + classes.service_section}>
        <h2 className={classes.service_headline}>Services</h2>
        <Animate>
          <div className={classes.services}>
            {Services.map((service) => (
              <ServiceCard {...service} />
            ))}
          </div>
        </Animate>
        <div className={classes.bg}>
          <CircleBGIcon />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
