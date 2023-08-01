import "../styles/Card.scss";

const Card = ({
  handleChangeInput,
  dataTask,
  handleSend,
  taskType,
  setTaskTypeRadio,
  getColorTask,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const changeInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    handleChangeInput(inputValue, inputName);
  };

  const changeRadioInput = (ev) => {
    setTaskTypeRadio(ev.target.value);
  };

  const createTask = () => {
    handleSend();
  };

  return (
    <div className="modal__content">
      <form
        className={`modal__content__form ` + getColorTask(taskType)}
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3">
          <label
            className="modal__content__form__label"
            htmlFor="floatingInput"
          >
            Tarea
          </label>
          <input
            className="form-control"
            required
            type="text"
            placeholder="Escribe aquí la tarea"
            name="title"
            id="floatingInput"
            value={dataTask.title}
            onInput={changeInput}
          />
        </div>
        <label className="modal__content__form__label" htmlFor="start">
          Fecha de Inicio
          <input
            className="form-control"
            required
            type="date"
            name="start"
            id="start"
            value={dataTask.start}
            onInput={changeInput}
          />
        </label>
        <label className="modal__content__form__label" htmlFor="end">
          Fecha de Fin
          <input
            className="form-control"
            required
            type="date"
            name="end"
            id="end"
            value={dataTask.end}
            onInput={changeInput}
          />
        </label>
        <fieldset className="modal__content__form__div">
          <input
            required
            checked={taskType === "Casa"}
            className="modal__content__div--input"
            id="home"
            name="taskType"
            type="radio"
            value="Casa"
            onClick={changeRadioInput}
          />
          <label className="modal__content__div--label" htmlFor="Casa">
            Casa
          </label>
          <input
            checked={taskType === "Ocio"}
            className="modal__content__div--input"
            id="entertainment"
            onClick={changeRadioInput}
            name="taskType"
            type="radio"
            value="Ocio"
          />
          <label className="modal__content__div--label" htmlFor="Ocio">
            Ocio
          </label>
          <input
            checked={taskType === "Trabajo"}
            id="work"
            onClick={changeRadioInput}
            name="taskType"
            type="radio"
            value="Trabajo"
          />
          <label className="modal__content__div--label" htmlFor="Mujer">
            Trabajo
          </label>
        </fieldset>
        <label className="modal__content__form__label" htmlFor="desc">
          Descripción
          <textarea
            className="form-control"
            type="text"
            placeholder="..."
            name="desc"
            id="desc"
            value={dataTask.desc}
            onInput={changeInput}
          ></textarea>
        </label>
        <input
          className="modal__content__form__button"
          type="submit"
          value="AÑADIR TAREA"
          onClick={createTask}
        />
      </form>
    </div>
  );
};

export default Card;
