import './changeData.css';

// TODO: принимать роут на вход для перехода:
// const ChangeData = ({ route }: { route: string }) => {
const ChangeData = () => {
  return (
    <div className="change-data">
      {/* TODO: переход на нужный роут */}
      <a href="#0" className="change-data__link">
        Изменить
      </a>
    </div>
  );
};

export default ChangeData;
