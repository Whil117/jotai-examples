import { useAtomValue } from "jotai";
import { AtomImage, AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { IMAGE_ATOM, NAME_ATOM } from "../topleft";

type Props = {
  children?: ReactNode;
};

const WithTitle = () => {
  const name = useAtomValue(NAME_ATOM);
  return <AtomText fontWeight="bold">{name}</AtomText>;
};
const WithImgProfile = () => {
  const profilePhoto = useAtomValue(IMAGE_ATOM);

  return (
    <AtomImage
      src={profilePhoto}
      width="50px"
      height="50px"
      borderRadius="50%"
    />
  );
};

const HeaderComponent: FC<Props> = (props) => {
  return (
    <AtomWrapper
      customCSS={(css) => css`
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <WithTitle />
      <WithImgProfile />
    </AtomWrapper>
  );
};

export default HeaderComponent;
