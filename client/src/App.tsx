import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Auth from './utils/auth'


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql', // local db
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App" style={{ padding: '60px 15% 0px 15%' }}>
        <h1 style={{ marginBottom: 60 }}><span style={{ color: 'red', fontWeight: 'bold' }}>T</span>ype-GraphQL <span style={{ color: 'red', fontWeight: 'bold' }}>T</span>ypeORM <span style={{ color: 'red', fontWeight: 'bold' }}>T</span>ypescript <span style={{ color: 'red', fontWeight: 'bold' }}>T</span>odo <span style={{ color: 'red', fontWeight: 'bold' }}>T</span>racker!</h1>

        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/user/:username" element={<TodoList />} />
          </Routes>


        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
