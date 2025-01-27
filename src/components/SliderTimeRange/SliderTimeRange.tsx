import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './sliderTimeRange.css';

// TODO: крайние значения диапазона и минимальный диапазон (4 часа) можно передавать пропсами:
const initialRange = {
  lowerValue: 0,
  upperValue: 24,
};

const SliderTimeRange = () => {
  const leftValueRef = useRef<HTMLSpanElement>(null); // ссылка на левый span
  const rightValueRef = useRef<HTMLSpanElement>(null); // ссылка на правый span

  const [valuePosition, setValuePosition] = useState({
    leftForValue: 0, // позиционирование левого span
    rightForValue: 0, // позиционирование правого span
  });
  const { leftForValue, rightForValue } = valuePosition; // деструктурирование

  const [sliderRange, setSliderRange] = useState(initialRange); // диапазон значений TODO: Redux
  const { lowerValue, upperValue } = sliderRange; // деструктурирование TODO: Redux

  const minRange = initialRange.lowerValue; // min значение диапазона = 0
  const maxRange = initialRange.upperValue; // max значение диапазона = 24
  const sliderWidth = 300; // 300px // NOTE: поправить ширину!

  const handleMinInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) < upperValue
        ? Number(event.target.value)
        : upperValue - 5; // минимальный диапазон - 5 часов

    setSliderRange({ ...sliderRange, lowerValue: result }); // TODO: Redux
  };

  const handleMaxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) > lowerValue
        ? Number(event.target.value)
        : lowerValue + 5; // минимальный диапазон - 5 часов

    setSliderRange({ ...sliderRange, upperValue: result }); // TODO: Redux
  };

  // 1. Преобразуем значения диапазона в проценты для позиционирования ползунков:
  // FIXME: почему-то диапазон между ползунками считается не равномерно...
  const lowerPercent = ((lowerValue - minRange) / (maxRange - minRange)) * 100;
  const upperPercent = ((upperValue - minRange) / (maxRange - minRange)) * 100;
  // 2. Вычисляем положение ползунков:
  const left = lowerPercent; // Значение left для левого ползунка
  const right = 100 - upperPercent; // Значение right для правого ползунка

  // при изменении стоимости пересчитываем размер элемента span с актуальной ценой:
  useEffect(() => {
    // Обновляем позиции ползунков в локальном стейт:
    setValuePosition((prevState) => ({
      ...prevState,
      leftForValue: left,
      rightForValue: right,
    }));

    // если ссылка на левый span уже установлена:
    if (leftValueRef.current) {
      const leftWidth = leftValueRef.current.offsetWidth; // актуальная ширина левого span
      let leftValuePosition = left - ((leftWidth / 2) * 100) / sliderWidth; // сдвиг влево (1/2)
      leftValuePosition = leftValuePosition < 0 ? 0 : leftValuePosition; // но не слишком :)

      // меняем локально стейт с положением левого span:
      setValuePosition((prevState) => ({
        ...prevState,
        leftForValue: leftValuePosition,
      }));
    }

    // если ссылка на правый span уже установлена:
    if (rightValueRef.current) {
      const rightWidth = rightValueRef.current.offsetWidth; // актуальная ширина правого span
      let rightValuePosition = right - ((rightWidth / 2) * 100) / sliderWidth; // сдвиг вправо (1/2)
      rightValuePosition = rightValuePosition < 0 ? 0 : rightValuePosition; // но не слишком :)

      // меняем локально стейт с положением правого span:
      setValuePosition((prevState) => ({
        ...prevState,
        rightForValue: rightValuePosition,
      }));
    }
  }, [lowerValue, upperValue, left, right]); // TODO: Redux (отслеживать зав-сти глобального стейта)

  return (
    <>
      <div className="slider-time-range">
        {/* Фоновая полоса */}
        <div
          className="slider-time-range__fill"
          style={{
            left: `${left}%`, // позиция начала полосы
            right: `${right}%`, // позиция конца полосы
          }}
        ></div>

        {/* Левый ползунок */}
        <input
          className="slider-time-range__lower"
          type="range"
          id="lower"
          min="0"
          max="24"
          step="1"
          onInput={handleMinInput}
          value={lowerValue}
        />

        {/* Значение под левым ползунком */}
        <span
          ref={leftValueRef}
          className="slider-time-range__min-value"
          style={{
            left: `${leftForValue}%`,
          }}
        >
          {lowerValue + ':00'}
        </span>

        {/* Правый ползунок */}
        <input
          className="slider-time-range__upper"
          type="range"
          id="upper"
          min="0"
          max="24"
          step="1"
          onInput={handleMaxInput}
          value={upperValue}
        />

        {/* Значение под правым ползунком */}
        <span
          ref={rightValueRef}
          className="slider-time-range__max-value"
          style={{
            right: `${rightForValue}%`,
          }}
        >
          {upperValue + ':00'}
        </span>
      </div>
    </>
  );
};

export default SliderTimeRange;
