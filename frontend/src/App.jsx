import Router from "./routes/Routers";
import ReduxProvider from "./redux/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
