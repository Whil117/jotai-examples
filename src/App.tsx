import { AtomWrapper } from "lucy-nxtjs";
import BoxWithFC from "./components/BoxWithFC";
import BottomLeft from "./components/bottomLeft";
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
        <TopRight />
      </BoxWithFC>{" "}
      <BoxWithFC>
        <BottomLeft />
      </BoxWithFC>
      <BoxWithFC>
        <h1>dsdfsdf111111111111111</h1>
      </BoxWithFC>
    </AtomWrapper>
  );
}

export default App;
