import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import "moment/locale/es";
import "moment-timezone";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/frameCalen.scss";
import Card from "./Card";
import TaskList from "./TaskList";
import TaskListDoneComponent from "./TaskListDoneComponent";
import ButtonReset from "./Reset";
import objectToExport from "../services/localStorage";

moment.tz.names("Europe/Paris|Europe/Monaco");
const localizer = momentLocalizer(moment);
moment.locale("es");
moment.tz.setDefault('Europe/Paris')
moment.tz.countries()

const FrameCalen = () => {
  const idNumber = uuidv4();
  // const [id, setId] = useState(0);
  const [dataTask, setDataTask] = useState({
    title: "",
    start: "",
    end: "",
    desc: "",
    type: "",
    done: false,
    id: idNumber,
  });

  const [taskList, setTaskList] = useState(objectToExport.get("tasks", []));
  const [taskListDone, setTaskListDone] = useState(
    objectToExport.get("tasks_Done", [])
  );

  const taskLocalStorage = objectToExport.get("tasks", []);
  const taskDoneLocalStorage = objectToExport.get("tasks_Done", []);


  const setTaskTypeRadio = (value) => {
    setDataTask({ ...dataTask, type: value });
  };

  const getColorTask = (taskType) => {
    if (taskType === "Casa") {
      return "color_1";
    } else if (taskType === "Ocio") {
      return "color_2";
    } else if (taskType === "Trabajo") {
      return "color_3";
    }
  };

   const handleSend = () => {
    if (dataTask.start !== "" && dataTask.end !== "" && dataTask.title !== "" && dataTask.type !== "") {
      setTaskList([...taskList, dataTask]);
      taskLocalStorage.push(dataTask);
      setDataTask({
        title: "",
        start: "",
        end: "",
        desc: "",
        type: "",
        done: false,
        id: idNumber,
      });
      objectToExport.set("tasks", taskLocalStorage);
    }
  };

  const setTaskDone = (id) => {
    console.log(id);
    const foundIndex = taskList.findIndex(task => task.id === id)
    console.log(foundIndex);
    console.log(taskList[foundIndex])
    taskList[foundIndex].done = true;
   
    const taskDone = taskList[foundIndex];
    taskList.filter(task => task.done === false)

    setTaskListDone([...taskListDone, taskDone]);
    setTaskList(taskList);
  
    taskLocalStorage.splice((foundIndex, 1));
    objectToExport.remove("tasks");
    taskDoneLocalStorage.push(taskDone);
    objectToExport.set("tasks", taskList);
    objectToExport.set("tasks_Done", taskDoneLocalStorage);
  };

  // const removeTask = (id) => {
  //   const foundIndex = 
  //   taskList.indexOf(task => task.id === id)
  //   taskList.splice((foundIndex, 1));
  // };

  const handleInput = (inputName, inputValue) => {
    setDataTask({ ...dataTask, [inputValue]: inputName });
  };



  function resetButton() {
    // objectToExport.remove("tasks");
    objectToExport.remove("tasks_Done");
    setTaskListDone([]);
  }

  return (
    <>
      <div className="all">
        <section className="app">
          <Calendar
            className="app__frameCalen"
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={taskList}
          />
        </section>
        <section className="form">
          <h2 className="form__titleTask">TAREAS POR HACER</h2>
          <TaskList
            // removeTask={removeTask}
            className="form__taskList"
            setTaskDone={setTaskDone}
            taskList={taskList}
            getColorTask={getColorTask}
          />
          <h2 className="form__titleTask">TAREAS HECHAS</h2>
          <TaskListDoneComponent
            className="form__taskListDone"
            getColorTask={getColorTask}
            taskListDone={taskListDone}
          />
          <ButtonReset resetButton={resetButton} />
          <Card
            className="form__card"
            dataTask={dataTask}
            handleChangeInput={handleInput}
            handleSend={handleSend}
            setTaskTypeRadio={setTaskTypeRadio}
            taskType={dataTask.type}
            getColorTask={getColorTask}
          />
        </section>
      </div>
    </>
  );
};

export default FrameCalen;
