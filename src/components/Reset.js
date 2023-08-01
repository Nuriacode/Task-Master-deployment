const ButtonReset = ({ resetButton }) => {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    resetButton();
  };

  return (
    <input
      className="modal__content__form__button"
      type="submit"
      value="Borrar tareas"
      onClick={handleClickReset}
    />
  );
};

export default ButtonReset;
