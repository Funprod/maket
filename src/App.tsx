import './App.css';
import { Box } from './component/Box.styled';
import { CardComponent } from './layout/card/Card';



function App() {
  return (
    <div className="App">
      <Box>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Box>
    </div>
  );
}

export default App;
