import { OverLayContainerDiv } from "./overlay.styles";

const OverlayContainer = ({ children, handleClick }) => {
  return (
    <OverLayContainerDiv onClick={(e) => handleClick(e)}>
      {children}
    </OverLayContainerDiv>
  );
};

export default OverlayContainer;
