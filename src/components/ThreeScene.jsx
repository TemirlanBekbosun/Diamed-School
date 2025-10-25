import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 255, 255, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: relative;
  background-color: #0a192f;
`;

const OuterRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${rotate} 8s linear infinite;
`;

const InnerRing = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite reverse;
`;

const Tick = styled.div`
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: #00ffff;
  top: 0;
  left: 50%;
  transform-origin: 50% 100px;
`;

const Segment = styled.div`
  position: absolute;
  width: 30px;
  height: 12px;
  background-color: #00ffff;
  box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  border-radius: 4px;
  top: -6px;
  left: 50%;
  margin-left: -15px;
  transform-origin: 50% 70px;
`;

const CenterCircle = styled.div`
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, #e6ffff, #00ffff);
  border-radius: 50%;
  box-shadow: 0 0 15px #00ffff, 0 0 25px #00ffff;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const ThreeScene = () => {
  const ticks = Array.from({ length: 60 });
  const segments = Array.from({ length: 8 });

  return (
    <LoaderWrapper>
      <OuterRing>
        {ticks.map((_, i) => (
          <Tick
            key={i}
            style={{ transform: `translateX(-50%) rotate(${i * 6}deg)` }}
          />
        ))}
      </OuterRing>
      <InnerRing>
        {segments.map((_, i) => (
          <Segment key={i} style={{ transform: `rotate(${i * 45}deg)` }} />
        ))}
      </InnerRing>
      <CenterCircle />
    </LoaderWrapper>
  );
};

export default ThreeScene;
