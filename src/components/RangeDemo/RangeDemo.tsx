import { useState } from 'react';
import './rangeDemo.css';

const RangeDemo = () => {
  const [sliderRange, setSliderRange] = useState({
    lowerValue: 0,
    upperValue: 7000,
  });

  const { lowerValue, upperValue } = sliderRange;

  const handleMinInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) < upperValue
        ? Number(event.target.value)
        : upperValue - 100; // минимальный диапазон - 100 рублей

    setSliderRange({ ...sliderRange, lowerValue: result });
  };

  const handleMaxInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result =
      Number(event.target.value) > lowerValue
        ? Number(event.target.value)
        : lowerValue + 100; // минимальный диапазон - 100 рублей

    setSliderRange({ ...sliderRange, upperValue: result });
  };

  // Крайние значения диапазона:
  const minRange = 0;
  const maxRange = 7000;

  // Преобразуем значения диапазона в проценты (для позиционирования ползунков):
  const lowerPercent = ((lowerValue - minRange) / (maxRange - minRange)) * 100;
  const upperPercent = ((upperValue - minRange) / (maxRange - minRange)) * 100;

  let left = lowerPercent; // Значение left для левого ползунка
  let right = 100 - upperPercent; // Значение right для правого ползунка

  const thumbRadius = 12; // Поскольку диаметр ползунка = 24px, то его радиус = 12px

  // Переводим 12px в проценты относительно ширины слайдера (294px) ~ 4.08%:
  const thumbRadiusPercent = (thumbRadius * 100) / 294;

  // Проверяем правую границу:
  if (right < thumbRadiusPercent) {
    right = thumbRadiusPercent; // если она < 12px, то задаем её равной 12px
    left = left > 100 - thumbRadius * 4 ? left - thumbRadiusPercent : left; // изменяем левую
  }

  // Проверяем левую границу:
  if (left < thumbRadiusPercent) {
    left = thumbRadiusPercent; // если она < 12px, то задаем её равной 12px
    right = right > 100 - thumbRadius * 4 ? right - thumbRadiusPercent : right; // изменяем правую
  }

  return (
    <div className="wrapper">
      <div className="range-slider">
        <div className="range-labels">
          <span className="range-label range-label-start">0</span>
          <span className="range-label range-label-end">100</span>
        </div>
        <input
          type="range"
          min="0"
          max="149"
          name=""
          id=""
          onInput={handleMinInput}
          value={lowerValue}
        />
        <input
          type="range"
          min="1"
          max="150"
          name=""
          id=""
          onInput={handleMaxInput}
          value={lowerValue}
        />

        <div className="track-wrapper">
          <div className="track"></div>
          <div className="range-between"></div>
          <div className="thumb left"></div>
          <div className="thumb right"></div>
        </div>
      </div>
    </div>
  );
};

export default RangeDemo;
