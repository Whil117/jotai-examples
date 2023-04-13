import { useAtomValue } from "jotai";
import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import { IMAGE_ATOM, NAME_ATOM } from "../topleft";

type Props = {
  children?: ReactNode;
};

const HeaderComponent: FC<Props> = (props) => {
  const name = useAtomValue(NAME_ATOM);
  const profilePhoto = useAtomValue(IMAGE_ATOM);
  return (
    <AtomWrapper
      customCSS={(css) => css`
        height: auto;
        display: flex;
        background-color: #ffdf;
      `}
    >
      <AtomText>{name}</AtomText>
    </AtomWrapper>
  );
};

export default HeaderComponent;
