import styled, { keyframes } from 'styled-components';

// Анимация для вращения
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

// Контейнер для всего загрузчика
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: relative;
  background-color: #0a192f; // Темно-синий фон, как в видео
`;

// Внешнее вращающееся кольцо
const OuterRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: ${rotate} 8s linear infinite;
`;

// Внутреннее кольцо с сегментами
const InnerRing = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite reverse; // Вращается в другую сторону
`;

// Стили для рисок (насечек)
const Tick = styled.div`
  position: absolute;
  width: 2px;
  height: 10px;
  background-color: #00ffff;
  top: 0;
  left: 50%;
  transform-origin: 50% 100px; // 100px - половина ширины LoaderWrapper
`;

// Стили для светящихся сегментов
const Segment = styled.div`
  position: absolute;
  width: 30px;
  height: 12px;
  background-color: #00ffff;
  box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  border-radius: 4px;
  top: -6px; // Половина высоты сегмента
  left: 50%;
  margin-left: -15px; // Половина ширины сегмента
  transform-origin: 50% 70px; // 70px - половина ширины InnerRing
`;


// Центральный пульсирующий круг
const CenterCircle = styled.div`
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, #e6ffff, #00ffff);
  border-radius: 50%;
  box-shadow: 0 0 15px #00ffff, 0 0 25px #00ffff;
  animation: ${pulse} 2s infinite ease-in-out;
`;


const ThreeScene = () => {
  // Создаем массивы для рендеринга рисок и сегментов
  const ticks = Array.from({ length: 60 }); // 60 рисок по кругу
  const segments = Array.from({ length: 8 }); // 8 сегментов

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
           <Segment
             key={i}
             style={{ transform: `rotate(${i * 45}deg)` }}
           />
        ))}
      </InnerRing>
      <CenterCircle />
    </LoaderWrapper>
  );
};

export default ThreeScene;