import { useState } from "react";
import Task from "../task/tast.component";
import { OverLayContainerDiv } from "./overlay.styles";

const OverlayContainer = ({
  onExit,
  overState,
  children,
  State = true,
  type,
}) => {
  console.log("overlay");

  const [overlayState, setOverlayState] = useState(true);
  const handleHideOverlay = (e) => {
    const { id } = e.target;
    if (id === "overlay") {
      setOverlayState(!overlayState);
      if (onExit) onExit();
    }
  };

  // switch (type) {
  //   case "task":
  //     return (
  //       <OverLayContainerDiv
  //         id="overlay"
  //         className={`${overlayState}`}
  //         onClick={(e) => handleHideOverlay(e)}
  //       >
  //         <Task></Task>
  //       </OverLayContainerDiv>
  //     );

  //   default:
  //     break;
  // }
  // const [boardNav, SetboardNav] = useState(true);
  // const handleviewClick = () => {
  //   // e.preventDefault();

  //   SetboardNav(!boardNav);
  // };
  return overlayState ? (
    <OverLayContainerDiv id="overlay" onClick={(e) => handleHideOverlay(e)}>
      {children}
    </OverLayContainerDiv>
  ) : (
    ""
  );
};

export default OverlayContainer;
