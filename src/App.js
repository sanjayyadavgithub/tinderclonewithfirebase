import './App.css';
import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards/TinderCards';
import SwipeButton from './Components/SwipeButton/SwipeButton';
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'
import Chats from './Components/Chats/Chats';
import ChatScreen from "./Components/ChatScreen/ChatScreen";
function App() {
  return (
    <div className="app">
        {/**Header of tenders */}
        
      <Router>
        
          <Switch>
          {/* Main Page */}
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButton />
          </Route>
          {/* Chat list Page */}
          <Route exact path="/chat">
            <Header backButton="/" />
             <Chats />
          </Route>
          {/*char area page */}
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          </Switch>
        </Router>
        {/**swipeButton of tenders */}
        
    </div>
  );
}

export default App;
