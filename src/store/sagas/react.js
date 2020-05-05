const { Component } = React
const { Provider, connect } = ReactRedux
const { createStore, applyMiddleware } = Redux
const { takeEvery, takeLatest, delay } = ReduxSaga
const { put, call, fork, join } = ReduxSaga.effects
const createSagaMiddleware = ReduxSaga.default

/*** Actions ***/
const INCREMENT = 'e.INCREMENT'
const ASYNC_INCREMENT = 'e.ASYNC_INCREMENT'
const CALL_FAKE_API = 'e.CALL_FAKE_API'
const RECORD_USER = 'e.RECORD_USER'

/*** Action Creators ***/
// Action for incrementing count synchronously
const increment = () => ({
  type: INCREMENT,
})
// Action for incrementing count asynchronously
const asyncIncrement = seconds => ({
  type: ASYNC_INCREMENT,
  seconds
})
// Action for calling a fake api call
// There's no case for this one in the reducer because
// the process will be taken by the redux-saga, (see below on rootSaga)
const callFakeApi = () => ({
  type: CALL_FAKE_API
})

// App initial state
const initialState = {
  count: 0,
  user: null
}
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      // Add 1 to count
      return Object.assign({}, state, { count: state.count + 1 })
    }
    case RECORD_USER: {
      // Record some user data
      const { result } = action
      return Object.assign(
        {},
        state,
        { user: `NAME: ${result.name} GENDER: ${result.gender}` }
      )
    }
    default: return state
  }
}

// Create a saga
function* rootSaga () {
  // Catch all actions with type ASYNC_INCREMENT
  // This would take every ASYNC_INCREMENT action type
  yield takeEvery(ASYNC_INCREMENT, sagaAsyncIncrement)

  // Catch all actions with type CALL_FAKE_API
  // takeLatest will only take the last action type CALL_FAKE_API and
  // the others that were not completed before the latest
  // will be cancelled
  yield takeLatest(CALL_FAKE_API, fetchData)
}

// Function to be called by saga taking action ASYNC_INCREMENT
// The data that was passed in the action creator will also be passed to saga
function* sagaAsyncIncrement (payload) {
  const { seconds } = payload

  // Wait after how many seconds
  yield delay(seconds * 1000)

  // Dispatch an action with type INCREMENT
  // redux-saga "put" effect acts as a redux dispatch
  yield put({ type: INCREMENT })
}

// Declare some function that would return some data
// This can be an Api Call
const getUserData = () => {
  return {
    name: 'John Doe',
    gender: 'Male'
  }
}

// Function to be called by saga taking action CALL_FAKE_API
function* fetchData () {
  // Simulate some server delay
  const forked = yield fork(testForkJoin);
  yield delay(1500)
  // Call a function
  // redux-saga "call" effect allows you to call a function
  const testResult = yield join(forked);
  console.log('Test Result:', testResult);

  const result = yield call(getUserData)
  yield put({ type: RECORD_USER, result })
}

function* testForkJoin () {
  yield delay(1500);

  return 1;
}

// Create a saga middleware
const sagaMiddleware = createSagaMiddleware()

// Create a redux store
// Apply the saga middleware to the store by calling applyMiddleware from redux
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

// Run the saga
sagaMiddleware.run(rootSaga)

// Main App Container
class App extends Component {
  constructor(props) {
    super(props)

    this.handleAsyncIncrement = this.handleAsyncIncrement.bind(this)
  }
  handleAsyncIncrement (seconds) {
    // Call the asyncIncrement action and pass the parameter seconds
    this.props.asyncIncrement(seconds)
  }
  render () {
    const { count, increment, callFakeApi, user } = this.props
    return (
      <div>
        <div className="count">{count}</div>
        <button onClick={increment}>
          Synchronous Increment
        </button>
        <button onClick={() => { this.handleAsyncIncrement(3) }}>
          Increment After 3 seconds
        </button>
        <button onClick={() => { this.handleAsyncIncrement(5) }}>
          Increment After 5 seconds
        </button>
        <button onClick={callFakeApi}>Call Fake Api</button>
        {user && <div className="user">{user}</div>}
      </div>
    )
  }
}

// Mapping states to properties
const mapStateToProps = state => ({
  count: state.count,
  user: state.user
})
// Mapping action creators to properties
const mapDispatchToProps = ({
  increment,
  asyncIncrement,
  callFakeApi
})
// Container connected to redux
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

// Container that provides App to be connected to the redux
const Main = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

// Render the application
ReactDOM.render(<Main />, document.getElementById('app'))
