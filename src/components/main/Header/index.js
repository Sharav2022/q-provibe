import { COMPANY_NAME, HeaderItems, SocialLinks } from "../../../globals/mock";
import classes from "./header.module.css";
import LogoIcon from "../../../assets/icons/q-provibe.png";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "../../../assets/icons/menu.svg";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import useIsMobile from "../../hooks/useIsMobile";
import Dropdown from "../../core/Dropdown";
import Image from "next/image";

const Header = (props) => {
  const router = useRouter();

  const { asPath } = router;

  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useIsMobile({ breakpoint: 992 });

  useEffect(() => {
    if (!isMobile) {
      setShowMenu(false);
    }
  }, [isMobile]);

  const goToHome = () => {
    router.push("/");
  };

  const [hoverIndex, setHoverIndex] = useState();

  const socialLinkHandler = (url) => {
    window.open(url, "blank");
  };

  return (
    <header className={classes.header}>
      <div className={"container " + classes.container}>
        <div className={classes.logo_container} onClick={goToHome}>
          <div className={classes.logo}>
            <Image src={LogoIcon} />
          </div>
          <span>{COMPANY_NAME}</span>
        </div>
        <div className={classes.right_container}>
          {HeaderItems.map((item, index) => (
            <div
              className={classes.wrapper}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex()}
            >
              <Link key={item.id} passHref href={"/" + item.url} legacyBehavior>
                <a
                  className={classes.item}
                  data-active={asPath === "/" + item.url ? "true" : undefined}
                >
                  {item.title}
                </a>
              </Link>
              {item.child && index === hoverIndex && (
                <Dropdown items={item.child} />
              )}
            </div>
          ))}
        </div>
        <div className={classes.social_icons}>
          {SocialLinks.map((_, index) => (
            <div
              className={classes.social_icon}
              onClick={() => socialLinkHandler(_.url)}
            >
              {_.icon}
            </div>
          ))}
        </div>
        <div className={classes.menu} onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </div>
      </div>
      {isMobile && showMenu && <Menu closeHandler={() => setShowMenu(false)} />}
    </header>
  );
};

export default Header;
