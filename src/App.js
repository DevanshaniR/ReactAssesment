import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderSubmitView from './views/OrderSubmitView';
import OrderVerifyView from './views/OrderVerifyView';


function App() {
  return (
    <Router>
      <Route path="/orderVerify" exact component={OrderVerifyView} />
      <Route path="/" exact component={OrderSubmitView} />
    </Router>
  );
}
export default App;
