import { css } from "@emotion/react";
import { atom, useAtom, useSetAtom } from "jotai";
import { AtomButton, AtomInput, AtomWrapper } from "lucy-nxtjs";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const IMAGE_ATOM = atom("https://picsum.photos/200/300");

export const NAME_ATOM = atom("Default Name");

const InputWriteName = () => {
  const [name, setName] = useAtom(NAME_ATOM);
  return (
    <AtomInput
      placeholder="Write Your Name"
      type="text"
      customWrapperCSS={(css) => css`
        width: auto;
        height: auto;
      `}
      customCSS={(css) => css`
        width: auto;
        height: auto;
      `}
      css={() => css`
        font-size: 22px;
      `}
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
};

const InputProfilePhoto = () => {
  const [image, setImage] = useAtom(IMAGE_ATOM);

  return (
    <AtomWrapper
      customCSS={(css) => css`
        height: 200px;
        width: 200px;
        padding: 10px;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 50%;
      `}
    >
      <AtomInput
        type="file"
        customWrapperCSS={() => css`
          box-shadow: none !important;
          cursor: pointer;
        `}
        customCSS={(css) => css`
          height: -webkit-fill-available;
          border-radius: 50%;
          background-image: url(${image});
          background-color: white;
          border: 1px solid black;
          cursor: pointer;
          div {
            box-shadow: none;
            border-radius: 50%;
          }
        `}
        css={() => css`
          opacity: 0;
          background-color: red;
          box-shadow: none !important;
          border-radius: 50%;
          box-shadow: none;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover; /* o cover */
          cursor: pointer;
        `}
        accept="image/*"
        onChange={(event) => {
          const reader = new FileReader();
          reader.readAsDataURL(event.target?.files?.[0]);
          reader.onload = function () {
            const dataURL = reader.result as string;
            setImage(dataURL);
          };
        }}
      />
    </AtomWrapper>
  );
};
const TopLefComponent: FC<Props> = (props) => {
  const setName = useSetAtom(NAME_ATOM);
  return (
    <AtomWrapper
      customCSS={(css) => css`
        flex-direction: row;
        align-items: center;
        height: auto;
      `}
    >
      <InputProfilePhoto />
      <AtomWrapper width="auto">
        <InputWriteName />
        <AtomButton onClick={() => setName("Default Name")}>
          Clear Name
        </AtomButton>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default TopLefComponent;
