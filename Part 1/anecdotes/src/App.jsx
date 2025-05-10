import { useState } from 'react'

const Button = (props) => { // 这是一个自定义的 React 组件
  return (
    <button onClick={props.element1}>{props.element2}</button> // 这是一个按钮组件，接受两个 props：handleClick 和 text
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))  // 创建一个与 anecdotes 长度相同的数组，并将其所有元素初始化为 0

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex) // React 状态变量（如 selected）是只读的，不能直接修改; 必须使用状态更新函数（setSelected）来更新状态
    console.log(randomIndex)
    return anecdotes[randomIndex]
  }
  
  const voteClick = () => {
    // React 的状态更新需要不可变性（Immutability），直接修改原数组可能不会触发重新渲染
    const newVotes = [...votes] // 创建一个新数组，包含最新的 votes 数组的所有元素
    newVotes[selected] += 1 // 将 selected 索引处的元素值加 1
    setVotes(newVotes) // 更新 votes 数组
    console.log(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} 
      <br />
      <Button element1={() => handleClick()} element2="next anecdote" /> 
      {/* 
      这是一个 React 组件的使用，让我们逐部分分析：
      <Button />
      这是一个自定义的 React 组件
      从代码中可以看到，它接受两个 props：handleClick 和 text
      
      element1 = {() => handleClick()}
      这是一个 prop，传递了一个函数
      () => handleClick() 是一个箭头函数，当按钮被点击时会执行
      这个函数会调用父组件中定义的 handleClick 函数
      使用箭头函数可以确保 this 的指向正确
      
      element2 = "next anecdote"
      这是另一个 prop，传递了一个字符串，这个文本会显示在按钮上
      */}
      
      <button onClick={() => voteClick()}> vote </button>

      <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]} 
      {/*
      为什么这里使用状态变量 votes 而不是 newVotes？
      votes 是 React 的状态变量，通过 useState 创建
      newVotes 只是 voteClick 函数中的一个临时变量
      在 JSX 中，我们应该使用状态变量 votes，因为它：
      1.包含了最新的投票数据 
      2.会随着状态更新而更新
      3.是组件渲染的数据源
      */}
    </div>
  )
}

export default App