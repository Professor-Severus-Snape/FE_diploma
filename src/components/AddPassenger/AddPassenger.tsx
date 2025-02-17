import add from '../../assets/add.svg';
import './addPassenger.css';

const AddPassenger = () => {
  return (
    <div className="add-passenger">
      <div className="add-passenger__text">Добавить пассажира</div>
      {/* TODO: по клику на плюсик вернуться к выбору мест и показать предупреждение об этом */}
      <img className="add-passenger__icon" src={add} alt="добавить" />
    </div>
  );
};

export default AddPassenger;
