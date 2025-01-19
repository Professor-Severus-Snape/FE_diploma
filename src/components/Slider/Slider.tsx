import './slider.css';

const Slider = ({ forId }: { forId: string }) => {
  return (
    <div className="slider">
      <input type="checkbox" id={forId} className="slider__checkbox" />
      <label htmlFor={forId} className="slider__label">
        <span className="slider__toggle"></span>
      </label>
    </div>
  );
};

export default Slider;
