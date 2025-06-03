const questionsData = [
    {
      question: 'What is React?',
      options: ['Library', 'Framework', 'Language', 'Template Engine', 'Database'],
      correctAnswer: 'Library',
    },
    {
      question: 'Which of these is used to handle state in React?',
      options: ['useState', 'useContext', 'useEffect', 'useMemo', 'useReducer'],
      correctAnswer: 'useState',
    },
    {
      question: 'What is JSX?',
      options: ['A React component', 'A JavaScript syntax extension', 'A database query language', 'A CSS pre-processor', 'A testing library'],
      correctAnswer: 'A JavaScript syntax extension',
    },
    {
      question: 'Which hook is used for side effects in React?',
      options: ['useEffect', 'useState', 'useReducer', 'useCallback', 'useMemo'],
      correctAnswer: 'useEffect',
    },
    {
      question: 'What is the purpose of React Router?',
      options: ['Handling API calls', 'Routing in a React application', 'Managing global state', 'Optimizing performance', 'Testing components'],
      correctAnswer: 'Routing in a React application',
    },
    {
      question: 'What does the useEffect hook do?',
      options: ['Manage state', 'Trigger side effects in functional components', 'Memoize values', 'Handle events', 'Optimize rendering'],
      correctAnswer: 'Trigger side effects in functional components',
    },
    {
      question: 'What is a React component?',
      options: ['A function that returns JSX', 'A class that extends React.Component', 'A function that manages state', 'A template for the UI', 'A JavaScript object'],
      correctAnswer: 'A function that returns JSX',
    },
    {
      question: 'How can you pass data to a component in React?',
      options: ['Through props', 'Through state', 'Through useEffect', 'Through context', 'Through refs'],
      correctAnswer: 'Through props',
    },
    {
      question: 'What is the virtual DOM?',
      options: ['A copy of the real DOM in memory', 'A JavaScript object', 'A way to manage state', 'A way to optimize network requests', 'A tool for debugging'],
      correctAnswer: 'A copy of the real DOM in memory',
    },
    {
      question: 'What is the useCallback hook used for?',
      options: ['Memoizing functions to avoid unnecessary re-renders', 'Handling side effects', 'Managing component lifecycle', 'Optimizing state management', 'Handling form submissions'],
      correctAnswer: 'Memoizing functions to avoid unnecessary re-renders',
    },
    {
      question: 'What is the useContext hook used for?',
      options: ['Sharing state across components', 'Handling events', 'Fetching data from an API', 'Memoizing data', 'Managing form inputs'],
      correctAnswer: 'Sharing state across components',
    },
    {
      question: 'What is React Native?',
      options: ['A library for building mobile apps', 'A framework for building web apps', 'A JavaScript syntax extension', 'A tool for managing state', 'A testing library'],
      correctAnswer: 'A library for building mobile apps',
    },
    {
      question: 'Which function is used to create a React element?',
      options: ['React.createElement()', 'React.render()', 'React.useState()', 'React.create()', 'ReactDOM.render()'],
      correctAnswer: 'React.createElement()',
    },
    {
      question: 'What does the useReducer hook do?',
      options: ['Manage more complex state logic', 'Trigger side effects', 'Memoize values', 'Handle events', 'Optimize rendering'],
      correctAnswer: 'Manage more complex state logic',
    },
    {
      question: 'What is the default export of a React component?',
      options: ['The component itself', 'A function that returns JSX', 'An object with props and state', 'A class that extends React.Component', 'The render method'],
      correctAnswer: 'The component itself',
    },
    {
      question: 'Which of these is NOT a valid React lifecycle method?',
      options: ['componentWillUnmount', 'componentDidMount', 'render', 'renderBefore', 'shouldComponentUpdate'],
      correctAnswer: 'renderBefore',
    },
    {
      question: 'Which hook is used to optimize performance in React?',
      options: ['useMemo', 'useState', 'useEffect', 'useReducer', 'useContext'],
      correctAnswer: 'useMemo',
    },
    {
      question: 'What is the primary purpose of keys in React lists?',
      options: ['To uniquely identify elements in a list', 'To handle state', 'To trigger side effects', 'To optimize rendering', 'To handle events'],
      correctAnswer: 'To uniquely identify elements in a list',
    },
    {
      question: 'What is the purpose of shouldComponentUpdate in React?',
      options: ['To determine whether a component should re-render', 'To update the state of a component', 'To handle side effects', 'To optimize performance', 'To trigger a re-render of a component'],
      correctAnswer: 'To determine whether a component should re-render',
    },
    {
      question: 'What is ReactDOM used for?',
      options: ['Rendering React components into the DOM', 'Managing global state', 'Handling side effects', 'Handling user events', 'Optimizing performance'],
      correctAnswer: 'Rendering React components into the DOM',
    },
    {
      question: 'What does React use for re-rendering components?',
      options: ['Virtual DOM', 'Real DOM', 'State management', 'useEffect', 'useReducer'],
      correctAnswer: 'Virtual DOM',
    },
    {
      question: 'What are fragments in React?',
      options: ['A way to return multiple elements without adding extra nodes to the DOM', 'A way to handle state', 'A type of component', 'A way to pass data to components', 'A JavaScript extension'],
      correctAnswer: 'A way to return multiple elements without adding extra nodes to the DOM',
    },
    {
      question: 'What does the useRef hook do?',
      options: ['Creates a mutable object that persists across renders', 'Triggers side effects', 'Manages state', 'Memoizes values', 'Handles user events'],
      correctAnswer: 'Creates a mutable object that persists across renders',
    },
    {
      question: 'What is the purpose of the render method in a React class component?',
      options: ['To define the UI of the component', 'To update the state of the component', 'To handle user events', 'To handle side effects', 'To optimize performance'],
      correctAnswer: 'To define the UI of the component',
    },
    {
      question: 'How can you optimize performance in a React application?',
      options: ['By using React.memo', 'By using useEffect', 'By using useState', 'By using useReducer', 'By using useCallback'],
      correctAnswer: 'By using React.memo',
    },
    {
      question: 'What is the main difference between a class component and a functional component?',
      options: ['Functional components do not have access to lifecycle methods', 'Functional components cannot have state', 'Class components use hooks', 'Class components are not rendered by React', 'Functional components are slower'],
      correctAnswer: 'Functional components do not have access to lifecycle methods',
    },
    {
      question: 'What does the componentDidUpdate method do?',
      options: ['Called after a component has re-rendered', 'Called before a component re-renders', 'Called after the component is mounted', 'Called before the component is mounted', 'Called when the component is unmounted'],
      correctAnswer: 'Called after a component has re-rendered',
    },
    {
        question: 'What does the useState hook do?',
        options: ['Manages component state', 'Handles side effects', 'Optimizes rendering', 'Triggers re-renders', 'Handles events'],
        correctAnswer: 'Manages component state',
      },
      {
        question: 'What is the primary purpose of the `render` method in a React class component?',
        options: ['To return JSX', 'To update state', 'To call hooks', 'To trigger events', 'To handle side effects'],
        correctAnswer: 'To return JSX',
      },
      {
        question: 'Which of the following is true about React components?',
        options: ['Components are reusable UI elements', 'Components cannot have state', 'Components cannot accept props', 'Components do not render any UI', 'Components do not update their state'],
        correctAnswer: 'Components are reusable UI elements',
      },
      {
        question: 'Which hook is used to fetch data in a functional component?',
        options: ['useEffect', 'useState', 'useReducer', 'useContext', 'useRef'],
        correctAnswer: 'useEffect',
      },
      {
        question: 'How do you prevent unnecessary re-renders in React?',
        options: ['By using React.memo()', 'By using useEffect()', 'By using useReducer()', 'By using useState()', 'By using useRef()'],
        correctAnswer: 'By using React.memo()',
      },
      {
        question: 'Which of these is NOT a valid type of React component?',
        options: ['Class component', 'Function component', 'Arrow function component', 'Component factory function', 'Web component'],
        correctAnswer: 'Web component',
      },
      {
        question: 'How can you trigger a state update in React?',
        options: ['By calling setState()', 'By directly modifying the state', 'By calling useEffect()', 'By using props', 'By rendering a new component'],
        correctAnswer: 'By calling setState()',
      },
      {
        question: 'What is the purpose of the `useReducer` hook in React?',
        options: ['For managing complex state logic', 'For handling side effects', 'For rendering components', 'For optimizing performance', 'For managing component lifecycle'],
        correctAnswer: 'For managing complex state logic',
      },
      {
        question: 'Which method is used to update the state in a class component?',
        options: ['this.setState()', 'useState()', 'useEffect()', 'this.updateState()', 'this.setStateValue()'],
        correctAnswer: 'this.setState()',
      },
      {
        question: 'Which of the following is the default behavior when a component renders?',
        options: ['It re-renders itself', 'It updates its state', 'It triggers an effect', 'It does nothing', 'It sends data to the parent component'],
        correctAnswer: 'It re-renders itself',
      },
      {
        question: 'What is the purpose of useMemo in React?',
        options: ['Memoizing values to avoid re-calculations', 'Triggering side effects in functional components', 'Managing component lifecycle', 'Managing state in a component', 'Avoiding unnecessary re-renders'],
        correctAnswer: 'Memoizing values to avoid re-calculations',
      },
      {
        question: 'What is the main use of refs in React?',
        options: ['Accessing and modifying DOM elements', 'Handling events', 'Managing state', 'Storing values across renders', 'Tracking changes in props'],
        correctAnswer: 'Accessing and modifying DOM elements',
      },
      {
        question: 'Which function is used to render a React component?',
        options: ['ReactDOM.render()', 'React.renderComponent()', 'React.createElement()', 'React.render()', 'React.useState()'],
        correctAnswer: 'ReactDOM.render()',
      },
      {
        question: 'What does the `componentWillUnmount` lifecycle method do?',
        options: ['Executes before the component is removed from the DOM', 'Executes after the component is mounted', 'Executes after the component is updated', 'Executes when the state is updated', 'Executes when props change'],
        correctAnswer: 'Executes before the component is removed from the DOM',
      },
      {
        question: 'What is the purpose of the `useEffect` hook?',
        options: ['To trigger side effects in functional components', 'To manage state in functional components', 'To store values in memory', 'To trigger re-renders in class components', 'To handle component lifecycle'],
        correctAnswer: 'To trigger side effects in functional components',
      },
      {
        question: 'How can you pass dynamic data to a React component?',
        options: ['Through props', 'Through state', 'Through context', 'Through refs', 'Through effects'],
        correctAnswer: 'Through props',
      },
      {
        question: 'Which hook is used for referencing DOM elements in React?',
        options: ['useRef', 'useState', 'useEffect', 'useReducer', 'useContext'],
        correctAnswer: 'useRef',
      },
      {
        question: 'What does `useEffect` depend on when passed an empty dependency array `[]`?',
        options: ['It runs only once when the component mounts', 'It runs every time the component renders', 'It runs when the component state changes', 'It runs on unmount', 'It runs when props change'],
        correctAnswer: 'It runs only once when the component mounts',
      },
      {
        question: 'What is the purpose of the `key` prop in React?',
        options: ['To uniquely identify elements in a list', 'To trigger a re-render', 'To manage state', 'To handle user events', 'To trigger effects'],
        correctAnswer: 'To uniquely identify elements in a list',
      },
      {
        question: 'What does `React.StrictMode` do?',
        options: ['It helps identify potential problems in the app during development', 'It optimizes performance in production', 'It forces components to re-render', 'It triggers side effects', 'It enhances state management'],
        correctAnswer: 'It helps identify potential problems in the app during development',
      },
      {
        question: 'What is the purpose of React Context?',
        options: ['To share values across the component tree', 'To manage local state', 'To handle side effects', 'To render components', 'To memoize values'],
        correctAnswer: 'To share values across the component tree',
      },
      {
        question: 'What does the `useEffect` hook do in React?',
        options: ['Executes side effects in function components', 'Creates reusable components', 'Handles routing', 'Manages global state', 'Handles form validation'],
        correctAnswer: 'Executes side effects in function components',
      },
      {
        question: 'Which method is used to update the state of a functional component?',
        options: ['useState()', 'this.setState()', 'setState()', 'useEffect()', 'render()'],
        correctAnswer: 'useState()',
      },
      {
        question: 'What is the main difference between props and state in React?',
        options: ['Props are immutable, while state is mutable', 'State is passed from parent to child, while props are local', 'Props are for managing state, while state is for passing data', 'State is for rendering components, while props are for lifecycle methods', 'Props and state are the same'],
        correctAnswer: 'Props are immutable, while state is mutable',
      },
      {
        question: 'Which of the following is a valid React hook?',
        options: ['useState', 'useRender', 'useProps', 'useDOM', 'useLifecycle'],
        correctAnswer: 'useState',
      },
      {
        question: 'How do you define a functional component in React?',
        options: ['const Component = () => { return <div />; }', 'function Component() { return <div />; }', 'const Component = function() { return <div />; }', 'All of the above', 'None of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What is the purpose of `React.StrictMode`?',
        options: ['Helps detect potential issues in the app during development', 'Optimizes performance in production', 'Provides error boundaries', 'Limits component re-renders', 'Ensures that components do not update unnecessarily'],
        correctAnswer: 'Helps detect potential issues in the app during development',
      },
      {
        question: 'Which of the following allows you to prevent unnecessary renders in functional components?',
        options: ['React.memo()', 'useCallback()', 'useMemo()', 'React.PureComponent', 'All of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What does the `useEffect` hook depend on when passed an empty array `[]`?',
        options: ['It runs only once when the component mounts', 'It runs every time the component renders', 'It runs only when the component unmounts', 'It runs every time a prop changes', 'It runs when the component state changes'],
        correctAnswer: 'It runs only once when the component mounts',
      },
      {
        question: 'Which of these can be used to avoid passing props through every level of a component tree?',
        options: ['React Context', 'useState', 'useMemo', 'useReducer', 'React Router'],
        correctAnswer: 'React Context',
      },
      {
        question: 'What is the purpose of the `key` prop in a list of components?',
        options: ['To uniquely identify elements in a list for efficient re-renders', 'To trigger the component re-render', 'To pass data from parent to child', 'To handle side effects', 'To define the component type'],
        correctAnswer: 'To uniquely identify elements in a list for efficient re-renders',
      },
      {
        question: 'What happens when you call `setState()` in a React class component?',
        options: ['It triggers a re-render of the component', 'It updates the state object directly', 'It updates props for the component', 'It automatically calls the render method', 'It triggers a side effect'],
        correctAnswer: 'It triggers a re-render of the component',
      },
      {
        question: 'Which method is used to create a new React element?',
        options: ['React.createElement()', 'React.render()', 'React.createComponent()', 'React.createElementNode()', 'React.createElementChild()'],
        correctAnswer: 'React.createElement()',
      },
      {
        question: 'What is the main role of the `render` method in React?',
        options: ['To return JSX that defines the UI of the component', 'To update state', 'To handle events', 'To optimize performance', 'To manage component lifecycle'],
        correctAnswer: 'To return JSX that defines the UI of the component',
      },
      {
        question: 'What type of data can be passed through props in React?',
        options: ['Strings', 'Numbers', 'Arrays', 'Objects', 'All of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What is the role of the `useMemo` hook in React?',
        options: ['Memoizes values to avoid unnecessary calculations', 'Handles side effects', 'Updates state when a component re-renders', 'Triggers re-renders in functional components', 'Manages context values'],
        correctAnswer: 'Memoizes values to avoid unnecessary calculations',
      },
      {
        question: 'How do you pass event handlers down to child components in React?',
        options: ['Through props', 'Through state', 'Through context', 'By using useEffect', 'Through refs'],
        correctAnswer: 'Through props',
      },
      {
        question: 'Which of the following is a valid React hook for managing form inputs?',
        options: ['useState', 'useReducer', 'useForm', 'useInput', 'useProps'],
        correctAnswer: 'useState',
      },
      {
        question: 'What happens when a React component’s state changes?',
        options: ['The component re-renders', 'The component does not re-render', 'The component’s props are updated', 'The component’s lifecycle methods are triggered', 'None of the above'],
        correctAnswer: 'The component re-renders',
      },
      {
        question: 'Which of these is used for handling routes in a React application?',
        options: ['React Router', 'React Context', 'React Redux', 'React Query', 'React Lifecycle'],
        correctAnswer: 'React Router',
      },
      {
        question: 'What does `ReactDOM.render()` do?',
        options: ['It renders a React component to the DOM', 'It manages the state of React components', 'It triggers side effects', 'It handles the component lifecycle', 'It generates a virtual DOM'],
        correctAnswer: 'It renders a React component to the DOM',
      },
      {
        question: 'What is the purpose of `componentDidMount` in React?',
        options: ['To perform side effects after a component is mounted', 'To trigger re-renders', 'To update the state', 'To handle form submissions', 'To handle events'],
        correctAnswer: 'To perform side effects after a component is mounted',
      },
      {
        question: 'What does the `useCallback` hook do?',
        options: ['Memoizes a function to prevent unnecessary re-renders', 'Triggers side effects in function components', 'Handles component lifecycle', 'Manages state across components', 'None of the above'],
        correctAnswer: 'Memoizes a function to prevent unnecessary re-renders',
      },
      {
        question: 'What is React JSX?',
        options: ['A JavaScript extension syntax that resembles HTML', 'A JavaScript object', 'A JavaScript method for rendering elements', 'A syntax for defining state', 'A templating language'],
        correctAnswer: 'A JavaScript extension syntax that resembles HTML',
      },
      {
        question: 'Which method is used to create a component in React?',
        options: ['function MyComponent() {}', 'React.createComponent()', 'React.createElement()', 'React.Component()', 'function createElement() {}'],
        correctAnswer: 'function MyComponent() {}',
      },
      {
        question: 'What is the purpose of `React.Fragment`?',
        options: ['To group multiple elements without adding extra nodes to the DOM', 'To create new components', 'To manage state', 'To handle side effects', 'To optimize rendering'],
        correctAnswer: 'To group multiple elements without adding extra nodes to the DOM',
      },
      {
        question: 'Which hook is used to manage component lifecycle in function components?',
        options: ['useEffect', 'useState', 'useMemo', 'useContext', 'useRef'],
        correctAnswer: 'useEffect',
      },
      {
        question: 'How do you pass data between components in React?',
        options: ['Through props', 'Through state', 'Through context', 'Through events', 'All of the above'],
        correctAnswer: 'Through props',
      },
      {
        question: 'Which of the following is true about React components?',
        options: ['A component is a function or class that accepts inputs and returns JSX', 'Components do not have lifecycle methods', 'Components cannot accept props', 'State is shared between components', 'A component always returns the same output'],
        correctAnswer: 'A component is a function or class that accepts inputs and returns JSX',
      },
      {
        question: 'What does `useEffect` hook depend on when passed a dependency array with variables?',
        options: ['It runs when the specified variables change', 'It runs every time the component renders', 'It runs only when the component mounts', 'It runs after every re-render', 'It never runs'],
        correctAnswer: 'It runs when the specified variables change',
      },
      {
        question: 'What is the role of keys in React lists?',
        options: ['They help React identify which items have changed, added, or removed', 'They trigger side effects', 'They manage the state of the component', 'They help with routing', 'None of the above'],
        correctAnswer: 'They help React identify which items have changed, added, or removed',
      },
      {
        question: 'What is `React.memo` used for?',
        options: ['To prevent unnecessary re-renders of a component', 'To handle side effects', 'To manage context', 'To memoize functions', 'To trigger lifecycle methods'],
        correctAnswer: 'To prevent unnecessary re-renders of a component',
      },
      {
        question: 'Which method is used to trigger side effects in React components?',
        options: ['useEffect', 'componentDidMount', 'componentWillUnmount', 'setState', 'render'],
        correctAnswer: 'useEffect',
      },
      {
        question: 'How do you conditionally render components in React?',
        options: ['Using conditional statements like if/else or ternary operator', 'Using the componentDidUpdate lifecycle method', 'Using props validation', 'By manually triggering re-renders', 'None of the above'],
        correctAnswer: 'Using conditional statements like if/else or ternary operator',
      },
      {
        question: 'What does `useReducer` do in React?',
        options: ['Helps manage complex state logic', 'Triggers side effects', 'Memoizes data', 'Handles events', 'Optimizes performance'],
        correctAnswer: 'Helps manage complex state logic',
      },
      {
        question: 'What happens when `setState` is called in a class component?',
        options: ['It triggers a re-render of the component', 'It updates props', 'It directly modifies the state object', 'It handles lifecycle methods', 'It triggers side effects'],
        correctAnswer: 'It triggers a re-render of the component',
      },
      {
        question: 'What is `useContext` used for in React?',
        options: ['To share data between components without passing props', 'To handle side effects', 'To memoize values', 'To manage component lifecycle', 'To manage local state'],
        correctAnswer: 'To share data between components without passing props',
      },
      {
        question: 'What is a higher-order component (HOC) in React?',
        options: ['A function that takes a component and returns a new component', 'A component that renders multiple child components', 'A component with its own state', 'A component with lifecycle methods', 'None of the above'],
        correctAnswer: 'A function that takes a component and returns a new component',
      },
      {
        question: 'Which of the following is used to update the DOM in React?',
        options: ['ReactDOM.render()', 'React.createElement()', 'setState()', 'React.updateDOM()', 'None of the above'],
        correctAnswer: 'ReactDOM.render()',
      },
      {
        question: 'How do you handle forms in React?',
        options: ['By managing state with useState or useReducer', 'By using useContext', 'By using React Router', 'By using React.memo', 'None of the above'],
        correctAnswer: 'By managing state with useState or useReducer',
      },
      {
        question: 'What is the purpose of `React.PureComponent`?',
        options: ['To optimize performance by shallow comparing props and state', 'To trigger side effects', 'To handle form validation', 'To manage global state', 'None of the above'],
        correctAnswer: 'To optimize performance by shallow comparing props and state',
      },
      {
        question: 'What does the `componentDidMount` lifecycle method do in React?',
        options: ['Executes after the component is mounted', 'Executes before the component is mounted', 'Executes when the state is updated', 'Executes when the component is unmounted', 'None of the above'],
        correctAnswer: 'Executes after the component is mounted',
      },
      {
        question: 'What is the main purpose of React Router?',
        options: ['To handle navigation and routing in React applications', 'To manage state across components', 'To handle side effects', 'To memoize data', 'None of the above'],
        correctAnswer: 'To handle navigation and routing in React applications',
      },
      {
        question: 'What is the main function of React’s `render` method?',
        options: ['To return JSX', 'To update state', 'To handle side effects', 'To optimize performance', 'To trigger a re-render'],
        correctAnswer: 'To return JSX',
      },
      {
        question: 'What does the `useLayoutEffect` hook do in React?',
        options: ['It runs synchronously after the DOM has been updated', 'It manages global state', 'It handles form validation', 'It triggers a component re-render', 'It handles side effects asynchronously'],
        correctAnswer: 'It runs synchronously after the DOM has been updated',
      },
      {
        question: 'Which lifecycle method is called immediately after a component is added to the DOM in React?',
        options: ['componentDidMount', 'componentWillMount', 'render', 'componentDidUpdate', 'componentWillUpdate'],
        correctAnswer: 'componentDidMount',
      },
      {
        question: 'How do you handle asynchronous data fetching in React?',
        options: ['By using the useEffect hook with async/await', 'By using componentDidUpdate', 'By using setState()', 'By using React Router', 'By using useReducer'],
        correctAnswer: 'By using the useEffect hook with async/await',
      },
      {
        question: 'What is the primary purpose of the `key` prop in React?',
        options: ['To uniquely identify elements in a list for efficient re-rendering', 'To store component state', 'To pass data between components', 'To manage side effects', 'To control the lifecycle of components'],
        correctAnswer: 'To uniquely identify elements in a list for efficient re-rendering',
      },
      {
        question: 'What does the `useRef` hook return in React?',
        options: ['A mutable object that persists across renders', 'The current value of the state', 'A new function', 'A reference to a component instance', 'An updated component state'],
        correctAnswer: 'A mutable object that persists across renders',
      },
      {
        question: 'What is a "controlled component" in React?',
        options: ['A component whose state is controlled by React', 'A component with internal state', 'A component that renders without props', 'A component with no side effects', 'A component that manages routing'],
        correctAnswer: 'A component whose state is controlled by React',
      },
      {
        question: 'What is the use of `React.PureComponent`?',
        options: ['It prevents re-renders if props and state have not changed', 'It allows re-rendering of all components', 'It manages routing in React', 'It stores local state in a component', 'It handles side effects'],
        correctAnswer: 'It prevents re-renders if props and state have not changed',
      },
      {
        question: 'How can you pass data to child components in React?',
        options: ['By using props', 'By using state', 'By using useContext', 'By using useReducer', 'By using refs'],
        correctAnswer: 'By using props',
      },
      {
        question: 'Which method is used for error boundaries in React?',
        options: ['static getDerivedStateFromError', 'componentDidCatch', 'componentWillUnmount', 'renderError', 'getErrorBoundary'],
        correctAnswer: 'componentDidCatch',
      },
      {
        question: 'Which of these hooks is used to optimize performance in React?',
        options: ['useMemo', 'useState', 'useEffect', 'useContext', 'useReducer'],
        correctAnswer: 'useMemo',
      },
      {
        question: 'What is the purpose of `React.Fragment` in React?',
        options: ['To return multiple elements without adding extra nodes to the DOM', 'To handle forms', 'To manage global state', 'To optimize rendering', 'To trigger side effects'],
        correctAnswer: 'To return multiple elements without adding extra nodes to the DOM',
      },
      {
        question: 'What is a "stateless" component in React?',
        options: ['A component that does not have state', 'A component that cannot receive props', 'A component that only handles events', 'A component that doesn’t re-render', 'A component that only contains hooks'],
        correctAnswer: 'A component that does not have state',
      },
      {
        question: 'Which method is used to update the state in a class component?',
        options: ['this.setState()', 'this.updateState()', 'useState()', 'useEffect()', 'render()'],
        correctAnswer: 'this.setState()',
      },
      {
        question: 'What is the purpose of the `useState` hook in React?',
        options: ['To add state to function components', 'To handle side effects', 'To memoize values', 'To handle routing', 'To optimize performance'],
        correctAnswer: 'To add state to function components',
      },
      {
        question: 'Which hook is commonly used to handle side effects in React?',
        options: ['useEffect', 'useCallback', 'useState', 'useReducer', 'useMemo'],
        correctAnswer: 'useEffect',
      },
      {
        question: 'What does `useEffect` with an empty dependency array `[]` do?',
        options: ['It runs once after the component mounts', 'It runs on every render', 'It runs when props change', 'It never runs', 'It runs only when state changes'],
        correctAnswer: 'It runs once after the component mounts',
      },
      {
        question: 'Which function is used to create an element in React?',
        options: ['React.createElement()', 'React.createComponent()', 'React.createNode()', 'React.createInstance()', 'React.renderComponent()'],
        correctAnswer: 'React.createElement()',
      },
      {
        question: 'Which of the following is used for routing in React applications?',
        options: ['React Router', 'React Context', 'React.memo', 'React Lifecycle', 'React Hooks'],
        correctAnswer: 'React Router',
      },
      {
        question: 'What does `React.memo` do?',
        options: ['It prevents unnecessary re-renders of a functional component', 'It manages state', 'It handles side effects', 'It updates the DOM', 'It triggers re-renders'],
        correctAnswer: 'It prevents unnecessary re-renders of a functional component',
      },
      {
        question: 'What is the purpose of the `key` prop in React?',
        options: ['To help React identify which items have changed, added, or removed in a list', 'To store the component state', 'To handle events', 'To optimize rendering', 'None of the above'],
        correctAnswer: 'To help React identify which items have changed, added, or removed in a list',
      },
      {
        question: 'Which React hook is used to persist a value between renders without triggering a re-render?',
        options: ['useRef', 'useMemo', 'useState', 'useEffect', 'useContext'],
        correctAnswer: 'useRef',
      },
      {
        question: 'What is the primary role of the `useContext` hook?',
        options: ['To access and manage the context data in a functional component', 'To manage component state', 'To trigger re-renders of child components', 'To memoize values for performance', 'To handle side effects'],
        correctAnswer: 'To access and manage the context data in a functional component',
      },
      {
        question: 'How can you avoid re-renders in React when props or state have not changed?',
        options: ['By using React.memo()', 'By using useState()', 'By using useReducer()', 'By using componentDidUpdate()', 'By using React.StrictMode'],
        correctAnswer: 'By using React.memo()',
      },
      {
        question: 'Which React hook can be used to store the previous value of a prop or state?',
        options: ['useRef', 'useEffect', 'useState', 'useMemo', 'useLayoutEffect'],
        correctAnswer: 'useRef',
      },
      {
        question: 'What does the `useReducer` hook allow you to do in React?',
        options: ['It allows you to manage complex state logic in function components', 'It handles side effects in components', 'It manages component lifecycle', 'It provides better performance than useState', 'It is used for fetching data'],
        correctAnswer: 'It allows you to manage complex state logic in function components',
      },
      {
        question: 'What is the default value of `useState` if no initial value is provided?',
        options: ['undefined', 'null', 'false', '0', '""'],
        correctAnswer: 'undefined',
      },
      {
        question: 'What is the purpose of `componentWillUnmount` in React?',
        options: ['To clean up resources before a component is removed from the DOM', 'To trigger a re-render', 'To initialize state', 'To update props', 'To handle side effects'],
        correctAnswer: 'To clean up resources before a component is removed from the DOM',
      },
      {
        question: 'What is the difference between `useEffect` and `useLayoutEffect` in React?',
        options: ['`useLayoutEffect` runs synchronously after the DOM has been painted, while `useEffect` runs asynchronously', '`useEffect` runs synchronously, and `useLayoutEffect` runs asynchronously', 'There is no difference between the two', '`useEffect` is for handling state, while `useLayoutEffect` is for managing events', 'They are identical'],
        correctAnswer: '`useLayoutEffect` runs synchronously after the DOM has been painted, while `useEffect` runs asynchronously',
      },
      {
        question: 'What type of values can be passed as the dependency array in `useEffect`?',
        options: ['State variables and props', 'Functions and objects', 'Primitive values and arrays', 'All of the above', 'Only strings and numbers'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'Which of the following is true about React keys?',
        options: ['Keys help React identify which items have changed, added, or removed', 'Keys must be unique among siblings', 'Keys should be static and not change between renders', 'All of the above', 'None of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What does the `useEffect` hook return?',
        options: ['A cleanup function', 'A Promise', 'A state variable', 'A reference to a DOM node', 'An updated JSX element'],
        correctAnswer: 'A cleanup function',
      },
      {
        question: 'What is the function of the `render` method in a class component?',
        options: ['It defines how to render the component’s UI', 'It is used to initialize the state', 'It handles component lifecycle', 'It manages routing', 'It executes side effects'],
        correctAnswer: 'It defines how to render the component’s UI',
      },
      {
        question: 'How can you implement conditional rendering in React?',
        options: ['By using `if` or ternary operators', 'By using React Context', 'By using `useEffect`', 'By using component lifecycle methods', 'By using refs'],
        correctAnswer: 'By using `if` or ternary operators',
      },
      {
        question: 'How can you improve the performance of a large React app?',
        options: ['By using React.memo() and PureComponent', 'By using React.lazy() for code splitting', 'By using React Context for state management', 'By memoizing functions with useCallback', 'All of the above'],
        correctAnswer: 'All of the above',
      },
      {
        question: 'What is the purpose of `React.StrictMode`?',
        options: ['To highlight potential problems in the application during development', 'To optimize the app for production', 'To trigger re-renders during development', 'To log errors in components', 'To manage state more efficiently'],
        correctAnswer: 'To highlight potential problems in the application during development',
      },
      {
        question: 'What is the role of `ReactDOM.createPortal`?',
        options: ['It renders a child component into a DOM node outside the parent component', 'It optimizes component re-renders', 'It manages state across components', 'It handles side effects', 'It simplifies event handling'],
        correctAnswer: 'It renders a child component into a DOM node outside the parent component',
      },
      {
        question: 'What is the purpose of `defaultProps` in React?',
        options: ['To set default values for props if they are not provided', 'To create default state for components', 'To handle side effects in components', 'To trigger re-renders when props change', 'To define component lifecycle methods'],
        correctAnswer: 'To set default values for props if they are not provided',
      },
      {
        question: 'Which method is used to create a reference to a DOM element in React?',
        options: ['useRef', 'createRef', 'getElementById', 'useState', 'useContext'],
        correctAnswer: 'useRef',
      },
      {
        question: 'What is the function of `React.createElement()`?',
        options: ['It creates a new React element', 'It creates a new state object', 'It triggers side effects', 'It renders a component to the DOM', 'It updates the component’s state'],
        correctAnswer: 'It creates a new React element',
      },
      {
        question: 'Which of these hooks is used to optimize the rendering of functions?',
        options: ['useMemo', 'useState', 'useContext', 'useEffect', 'useReducer'],
        correctAnswer: 'useMemo',
      },
      {
        question: 'What is the purpose of `componentDidUpdate` in React?',
        options: ['It is called after a component updates and re-renders', 'It is called before a component updates', 'It initializes the state', 'It handles errors in components', 'It is called when a component mounts'],
        correctAnswer: 'It is called after a component updates and re-renders',
      },
      {
        question: 'What does the `useEffect` hook allow you to do in React?',
        options: ['It allows you to handle side effects in function components', 'It manages component lifecycle', 'It controls the component state', 'It optimizes performance', 'It replaces the render method'],
        correctAnswer: 'It allows you to handle side effects in function components',
      },
      {
        question: 'What is the difference between `useEffect` and `useCallback` in React?',
        options: ['`useEffect` is for side effects, while `useCallback` is for memoizing functions', '`useEffect` is for state management, while `useCallback` is for handling side effects', 'There is no difference', '`useEffect` only works for class components', '`useCallback` is used to update the state'],
        correctAnswer: '`useEffect` is for side effects, while `useCallback` is for memoizing functions',
      },
      {
        question: 'What is the purpose of `useImperativeHandle` in React?',
        options: ['To customize the instance value that is exposed to parent components', 'To handle errors', 'To manage component state', 'To optimize rendering', 'To trigger side effects'],
        correctAnswer: 'To customize the instance value that is exposed to parent components',
      },
      {
        question: 'How do you prevent unnecessary re-renders in React?',
        options: ['By using `React.memo` or `shouldComponentUpdate`', 'By using `useState`', 'By using `useEffect`', 'By optimizing JSX syntax', 'By using the `key` prop'],
        correctAnswer: 'By using `React.memo` or `shouldComponentUpdate`',
      },
      {
        question: 'What is the main use of `useMemo` in React?',
        options: ['To memoize the result of an expensive calculation', 'To store mutable references', 'To update the state', 'To manage side effects', 'To handle forms'],
        correctAnswer: 'To memoize the result of an expensive calculation',
      },
      {
        question: 'What does `React.lazy` do in React?',
        options: ['It allows components to be loaded lazily, improving performance', 'It creates dynamic components', 'It manages state dynamically', 'It prevents re-renders', 'It adds styling to components'],
        correctAnswer: 'It allows components to be loaded lazily, improving performance',
      },
      {
        question: 'What is `useContext` used for in React?',
        options: ['To share state across the component tree without prop drilling', 'To handle side effects', 'To prevent re-renders', 'To manage form validation', 'To update state on every render'],
        correctAnswer: 'To share state across the component tree without prop drilling',
      },
      {
        question: 'How can you optimize large lists in React?',
        options: ['By using `React.memo` and virtualization techniques', 'By rendering all items at once', 'By avoiding the `key` prop', 'By using state instead of props', 'By increasing the component size'],
        correctAnswer: 'By using `React.memo` and virtualization techniques',
      },
      {
        question: 'What is the difference between `componentDidMount` and `useEffect`?',
        options: ['`componentDidMount` is for class components, while `useEffect` is for function components', '`componentDidMount` runs before the component is mounted, and `useEffect` runs after', 'They are the same', '`useEffect` only works for asynchronous tasks', 'Both are used to manage state'],
        correctAnswer: '`componentDidMount` is for class components, while `useEffect` is for function components',
      },
      {
        question: 'How can you prevent a component from re-rendering when props have not changed?',
        options: ['By using `React.memo` or `PureComponent`', 'By using `useState`', 'By using `useEffect`', 'By using `useContext`', 'By using `componentDidUpdate`'],
        correctAnswer: 'By using `React.memo` or `PureComponent`',
      },
      {
        question: 'What is the role of the `key` prop in React?',
        options: ['To uniquely identify elements in lists for efficient re-rendering', 'To manage the state', 'To handle events', 'To control form submission', 'To trigger lifecycle methods'],
        correctAnswer: 'To uniquely identify elements in lists for efficient re-rendering',
      },
      {
        question: 'What does the `useState` hook return in React?',
        options: ['A state variable and a function to update it', 'An array of values', 'A reference to a DOM node', 'A string or number value', 'A function that handles side effects'],
        correctAnswer: 'A state variable and a function to update it',
      },
      {
        question: 'What is the purpose of `React.Fragment`?',
        options: ['To return multiple elements without adding extra nodes to the DOM', 'To handle forms', 'To optimize component re-renders', 'To manage side effects', 'To create stateful components'],
        correctAnswer: 'To return multiple elements without adding extra nodes to the DOM',
      },
      {
        question: 'Which hook should be used to access the previous state or props in React?',
        options: ['useRef', 'useEffect', 'useMemo', 'useState', 'useCallback'],
        correctAnswer: 'useRef',
      },
      {
        question: 'What happens when `setState` is called in a React class component?',
        options: ['It triggers a re-render of the component', 'It updates props', 'It directly modifies the state object', 'It triggers side effects', 'It updates the DOM immediately'],
        correctAnswer: 'It triggers a re-render of the component',
      },
      {
        question: 'Which method is used for class component lifecycle management in React?',
        options: ['Lifecycle methods like `componentDidMount`', 'useEffect', 'useState', 'React.memo', 'None of the above'],
        correctAnswer: 'Lifecycle methods like `componentDidMount`',
      },
      {
        question: 'How does `useEffect` differ from `useLayoutEffect`?',
        options: ['`useEffect` runs asynchronously after DOM updates, while `useLayoutEffect` runs synchronously', '`useEffect` is used only for data fetching, while `useLayoutEffect` handles events', '`useEffect` is for functional components, and `useLayoutEffect` is for class components', 'There is no difference', 'Both hooks are the same'],
        correctAnswer: '`useEffect` runs asynchronously after DOM updates, while `useLayoutEffect` runs synchronously',
      },
      {
        question: 'What is the purpose of `useRef` in React?',
        options: ['To persist mutable values across renders', 'To store component state', 'To trigger side effects', 'To manage event handlers', 'To create JSX elements'],
        correctAnswer: 'To persist mutable values across renders',
      },
      {
        question: 'How does React handle forms?',
        options: ['By using controlled or uncontrolled components', 'By using useState for handling form input', 'By using useEffect to submit forms', 'By using React Router to manage form pages', 'By using React Context'],
        correctAnswer: 'By using controlled or uncontrolled components',
      },
      {
        question: 'What is the purpose of `React.memo`?',
        options: ['To prevent unnecessary re-renders of functional components', 'To manage side effects', 'To handle event listeners', 'To update state', 'To manage context'],
        correctAnswer: 'To prevent unnecessary re-renders of functional components',
      },
      {
        question: 'What does `React.createElement()` do?',
        options: ['It creates a new React element that is later rendered to the DOM', 'It triggers re-renders of components', 'It creates a stateful component', 'It initializes lifecycle methods', 'It manages form input'],
        correctAnswer: 'It creates a new React element that is later rendered to the DOM',
      },
  ];
  
  export default questionsData;
  