const TODOHero = ({ total_todos, todos_completed }) => {
  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">Task Done</p>
        <p className="text_small">Keep it up</p>
      </div>
      <div className="round_wrapper">
        <div className="task_trakker">
          {todos_completed}/{total_todos}
        </div>
      </div>

    </section>
  )
}

export default TODOHero;