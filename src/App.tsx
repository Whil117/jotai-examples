import { AtomWrapper } from "lucy-nxtjs";
import HeaderComponent from "./components/headerComponent";
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
        `}
      >
        <TopLefComponent />
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          background-color: white;
          height: 100%;
        `}
      >
        <HeaderComponent />
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          background-color: white;
          height: 100%;
        `}
      >
        3
      </AtomWrapper>
      <AtomWrapper
        customCSS={(css) => css`
          background-color: white;
          height: 100%;
        `}
      >
        4
      </AtomWrapper>
    </AtomWrapper>
  );
}

export default App;
