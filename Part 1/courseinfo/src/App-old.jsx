const Header = (props) => {

  console.log(props) // for debugging using console.log

  const name = props.courseName // 通过 props 获取 courseName 属性的值, 解构赋值

  return (
  /*
  为什么不能直接用 props 渲染？
  props 是一个对象：

  props 是一个包含所有传递属性的"对象"。
  例如，在 <Header courseName={course.name} /> 中，props 的值是 { courseName: 'Half Stack application development' }。
  如果直接渲染 props，React 会尝试将整个对象渲染为字符串，这通常会导致错误或显示 [object Object]。

  需要访问具体的属性：
  你传递的 courseName 是 props 对象的一个属性，因此需要通过 props.courseName 来访问它的值。
  这符合 JavaScript 的对象访问规则：通过 对象.属性 或 对象['属性'] 来获取具体的值。
  */
    <h1>{name}</h1>
  )
}

function Content(props) {
  return (
    <div>
      {
        // map方法用于遍历整个数组，会对数组中的每个元素执行回调函数，并返回一个新的数组
        props.partsArray.map((part, index) => (
          // 每次迭代时，part 是当前数组元素（一个对象），index 是当前元素的索引。 
          // 动态渲染: 通过迭代数组，动态生成 <p> 元素，避免硬编码每个部分 (在map里面直接渲染）
          // React 要求在渲染列表时，每个元素都需要一个唯一的 key; 属性key用于帮助 React 高效地更新和重新渲染列表。在这里，index 被用作 key，因为每个数组元素的索引是唯一的。
          <p key={index}>
            {part.name} : {part.exercises}
          </p>
        ))}
    </div>
  )
}

const Total = (props) => {
  console.log(props.partsArray) // for debugging using console.log;
  const sum = props.partsArray.reduce((total, part) => total + part.exercises, 0);
  return (
    <p>
      Number of exercises: {sum}
    </p>
  )
}


const App = () => {
  // const-definitions
  // course is an object with a name and an array of parts
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name : 'Fundamentals of React',
        exercises: 10
      },
      {
        name : 'Using props to pass data',
        exercises: 7
      },
      {
        name : 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header courseName = {course.name} /> 
      <Content partsArray = {course.parts}  /> 
      <Total  partsArray = {course.parts} /> 
    </div>
  )
}

export default App