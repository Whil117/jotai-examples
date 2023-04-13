import { SerializedStyles } from "@emotion/react";
import { AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";
import HeaderComponent from "../headerComponent";

type Props = {
  children: ReactNode;
  customCSS?: SerializedStyles;
};

const BoxWithFC: FC<Props> = ({ children, customCSS }) => {
  return (
    <AtomWrapper
      customCSS={(css) => css`
        background-color: white;
        padding: 20px;
        height: 100%;
        color: #000;
        align-items: flex-start;
        justify-content: flex-start;
        ${customCSS}
      `}
    >
      <HeaderComponent />
      {children}
    </AtomWrapper>
  );
};

export default BoxWithFC;
