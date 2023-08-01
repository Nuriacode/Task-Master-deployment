import "../styles/Task.scss";

const TaskListDoneComponent = ({ taskListDone, getColorTask }) => {
  
  const taskDone = taskListDone.map((eachTaskDone) => {
    return (
      <li key={eachTaskDone.id}>
        <article className={`article ${getColorTask(eachTaskDone.type)}`}>
          <div className="article__div">
            <h3 className="article__div--title">{eachTaskDone.title}</h3>
            <p className="article__div--text">Fecha: {eachTaskDone.start}</p>
            <p className="article__div--text">
              Anotacines:{eachTaskDone.desc} Hecho
            </p>
          </div>
        </article>
      </li>
    );
  });
  return <ul>{taskDone}</ul>;
};

export default TaskListDoneComponent;
