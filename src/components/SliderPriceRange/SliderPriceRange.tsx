import { useEffect, useState } from 'react';
import { useRef } from 'react';
import './sliderPriceRange.css';

// TODO: крайние значения диапазона и минимальный диапазон (1_000р) можно передавать пропсами:
const initialRange = {
  lowerValue: 0,
  upperValue: 7_000,
};

const SliderPriceRange = () => {
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
  const maxRange = initialRange.upperValue; // max значение диапазона = 7_000
  const sliderWidth = 294; // 294px
  const thumbRadius = 12; // Поскольку диаметр ползунка = 24px, то его радиус = 12px

  const handleMinInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) < upperValue
        ? Number(event.target.value)
        : upperValue - 1_000; // минимальный диапазон - 1_000 рублей

    setSliderRange({ ...sliderRange, lowerValue: result }); // TODO: Redux
  };

  const handleMaxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) > lowerValue
        ? Number(event.target.value)
        : lowerValue + 1_000; // минимальный диапазон - 1_000 рублей

    setSliderRange({ ...sliderRange, upperValue: result }); // TODO: Redux
  };

  // функция, вычисляющая положение ползунков:
  const calculateSliderPositions = (
    lowerValue: number,
    upperValue: number,
    minRange: number,
    maxRange: number,
    sliderWidth: number,
    thumbRadius: number
  ) => {
    // Преобразуем значения диапазона в проценты для позиционирования ползунков:
    // FIXME: почему-то диапазон между ползунками считается не равномерно...
    const lowerPercent =
      ((lowerValue - minRange) / (maxRange - minRange)) * 100;
    const upperPercent =
      ((upperValue - minRange) / (maxRange - minRange)) * 100;

    let left = lowerPercent; // Значение left для левого ползунка
    let right = 100 - upperPercent; // Значение right для правого ползунка

    // Переводим радиус ползунка в проценты относительно ширины слайдера ~ 4.08%:
    const thumbRadiusPercent = (thumbRadius * 100) / sliderWidth;

    // Проверяем правую границу:
    if (right < thumbRadiusPercent) {
      right = thumbRadiusPercent; // если она < 12px, то задаем её равной 12px
      // NOTE: костыли:
      left = left > 100 - thumbRadius * 4 ? left - thumbRadiusPercent : left; // изменяем левую
    }

    // Проверяем левую границу:
    if (left < thumbRadiusPercent) {
      left = thumbRadiusPercent; // если она < 12px, то задаем её равной 12px
      // NOTE: костыли:
      right =
        right > 100 - thumbRadius * 4 ? right - thumbRadiusPercent : right; // изменяем правую
    }

    return { left, right };
  };

  // Используем функцию для вычисления позиций ползунков
  const { left, right } = calculateSliderPositions(
    lowerValue,
    upperValue,
    minRange,
    maxRange,
    sliderWidth,
    thumbRadius
  );

  // при изменении стоимости пересчитываем размер элемента span с актуальной ценой:
  useEffect(() => {
    // Обновляем позиции ползунков в состоянии
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
      <div className="slider-price-range">
        {/* Фоновая полоса */}
        <div
          className="slider-price-range__fill"
          style={{
            left: `${left}%`, // позиция начала полосы
            right: `${right}%`, // позиция конца полосы
          }}
        ></div>

        {/* Левый ползунок */}
        <input
          className="slider-price-range__lower"
          type="range"
          id="lower"
          min="0"
          max="7000"
          step="100"
          onInput={handleMinInput}
          value={lowerValue}
        />

        {/* Значение под левым ползунком */}
        <span
          ref={leftValueRef}
          className="slider-price-range__min-value"
          style={{
            left: `${leftForValue}%`,
          }}
        >
          {lowerValue}
        </span>

        {/* Правый ползунок */}
        <input
          className="slider-price-range__upper"
          type="range"
          id="upper"
          min="0"
          max="7000"
          step="100"
          onInput={handleMaxInput}
          value={upperValue}
        />

        {/* Значение под правым ползунком */}
        <span
          ref={rightValueRef}
          className="slider-price-range__max-value"
          style={{
            right: `${rightForValue}%`,
          }}
        >
          {upperValue}
        </span>
      </div>
    </>
  );
};

export default SliderPriceRange;
