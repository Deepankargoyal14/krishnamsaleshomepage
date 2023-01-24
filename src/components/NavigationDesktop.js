import { useState } from "react";
import { motion } from "framer-motion";

const NavigationDesktop = (props) => {
  const { navLinksData } = props;
  const [showSubMenu, setShowSubMenu] = useState([]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const subMenuOnMouseEnterHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = true;
      return arr;
    });
  };
  const subMenuOnMouseLeaveHandler = (subMenuId) => {
    setShowSubMenu((prev) => {
      console.log("running");
      let arr = [...prev];
      arr[subMenuId] = false;
      return arr;
    });
  };

  return (
    <nav>
      <ul className='main-nav'>
        {navLinksData.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id}>
                <a href='#' className='navbar-nav-link'>
                  <span>{el.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li
              onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
              onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
              key={el.id}
              className='navbar-nav-options options-hover'
            >
              <div className='navbar-nav-div'>
                <span>{el.name}</span>
              </div>
              <motion.ul
                variants={variants}
                animate={showSubMenu[el.id] ? "open" : "closed"}
                className='navbar-nav-ul'
              >
                {showSubMenu[el.id] &&
                  el.children.map((ele) => {
                    if (!ele.children) {
                      return (
                        <li key={ele.id} className='sub-menu-li'>
                          <a
                            href='#'
                            className='sub-menu-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{ele.name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                        onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                        key={ele.id}
                        className='sub-menu-options sub-menu-hover'
                      >
                        <div className='sub-menu-div'>
                          <span>{ele.name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[ele.id] ? "open" : "closed"}
                          className='sub-menu-ul'
                        >
                          {showSubMenu[ele.id] &&
                            ele.children.map((elem) => {
                            if (!elem.children) {
                            return (
                            <li key={elem.id} className='grand-child-li'>
                          <a
                            href='#'
                            className='grand-child-link'
                            style={{ textDecoration: "none" }}
                          >
                            <span>{elem.name}</span>
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li
                        onMouseEnter={() => subMenuOnMouseEnterHandler(elem.id)}
                        onMouseLeave={() => subMenuOnMouseLeaveHandler(elem.id)}
                        key={elem.id}
                        className='grand-child-options grand-child-hover'
                      >
                        <div className='grand-child-div'>
                          <span>{elem.name}</span>
                          <span className='arrow'>{"-->"}</span>
                        </div>
                        <motion.ul
                          variants={variants}
                          animate={showSubMenu[elem.id] ? "open" : "closed"}
                          className='grand-child-ul'
                        >
                          {showSubMenu[elem.id] &&
                            elem.children.map((elex) => {
                              return (
                                <li key={elex.id} className='grand-child-two-link'>
                                  <a href='#'>
                                    <span>{elex.name}</span>
                                  </a>
                                </li>
                              );
                            })}
                        </motion.ul>
                      </li>
                    );
                  })}
              </motion.ul>
            </li>
          );
        })}
        </motion.ul>
         </li>
        );
        })}
        </ul>
    </nav>
  );
};

export default NavigationDesktop;
