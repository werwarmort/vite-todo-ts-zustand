import React from "react";

import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/useToDoStore";

import { InputPlus } from "./../components/InputPlus/index";
import { InputTask } from "../components/InputTask";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  // useEffect(() => {
  //   console.log("useEffect called");
  //   createTask("asgrag");
  // }, []);
  // console.log(tasks);

  // console.log(tasks);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleText}>
        {!tasks.length && <p> There is no tasks</p>}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={createTask}
            onEdited={updateTask}
            onRemoved={removeTask}
          />
        ))}
      </section>
    </article>
  );
};
