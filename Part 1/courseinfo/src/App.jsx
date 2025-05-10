import { useState } from 'react' // useState 是 React 的一个 Hook，用于在函数组件中添加状态

// React 函数组件本身是无状态的，useState 提供了一种方式让函数组件可以存储和管理状态。
// 在你的代码中，useState 被用来定义 counter 和 setCounter，以便跟踪计数器的值并更新它。

// Display 组件是一个简单的函数组件，用于显示传递给它的 counter 属性的值。
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

// App 组件是一个函数组件，使用了 React 的 useState Hook 来管理状态
// React 推荐使用函数组件来构建 UI
const App = () => {

  // useState(0) 初始化了一个状态变量 counter，初始值为 0。
  // setCounter 是更新 counter 的函数。
  const [ counter, setCounter ] = useState(0) //解构赋值，useState 返回一个数组，第一个元素是当前状态，第二个元素是更新状态的函数
  
  const increaseByOne = () => {
    setCounter(counter + 1) // 更新 counter 的值
  }

  const setToZero = () => {
    setCounter(0) // 将 counter 的值设置为 0
  }


  // 每次 counter 更新时，组件会重新渲染，显示最新的值。
  return (
    <div>
      {/* 在 <Display counter={counter}/> 中，
      counter={counter} 是在向 Display 组件传递一个名为 counter(右侧) 的属性。
      这里的 counter（右侧）是 App 组件中的状态变量：const [counter, setCounter] = useState(0)
      通过这种方式，App 组件的状态 counter 被传递给了 Display 组件。 
      */}

      <Display counter={counter}/>

      {/*
      每次 App 组件中的 counter 状态发生变化时，App 会重新渲染。
      由于 counter 被作为属性传递给了 Display，Display 组件也会重新渲染，并显示最新的 counter 值
      */}
      
      <button onClick={increaseByOne}> {/*调用 setCounter，将 counter 的值加 1。触发组件重新渲染，显示更新后的 counter 值。 */}
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App



/*
例如，如果移除 useState，你的代码可能会变成这样：
const App = () => {
  let counter = 0;

  setTimeout(() => {
    counter += 1; // 直接修改变量
    console.log('rendering...', counter);
  }, 1000);

  return (
    <div>{counter}</div> // 这个值不会动态更新
  );
};

export default App;

counter 的值虽然在 setTimeout 中更新了，但 React 不会重新渲染组件，因为 React 不知道状态发生了变化。
结果是页面上的数字不会更新，始终显示初始值。
*/