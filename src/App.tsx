import { AtomWrapper } from "lucy-nxtjs";
import { Suspense } from "react";
import BoxWithFC from "./components/BoxWithFC";
import BottomLeft from "./components/bottomLeft";
import BottomRight from "./components/bottomRight";
import TopRight from "./components/topRight";
import TopLefComponent from "./components/topleft";

function App() {
  return (
    <AtomWrapper
      customCSS={(css) => {
        return css`
          display: grid;
          width: 100%;
          min-height: 100vh;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 2px;
          background-color: black;
        `;
      }}
    >
      <AtomWrapper
        customCSS={(css) => css`
          background-color: white;
          height: 100%;
          align-items: center;
          justify-content: center;
        `}
      >
        <TopLefComponent />
      </AtomWrapper>
      <BoxWithFC>
        <Suspense fallback="loading">
          <TopRight />
        </Suspense>
      </BoxWithFC>{" "}
      <BoxWithFC>
        <BottomLeft />
      </BoxWithFC>
      <BoxWithFC>
        <Suspense fallback="loading">
          <BottomRight />
        </Suspense>
      </BoxWithFC>
    </AtomWrapper>
  );
}

export default App;
