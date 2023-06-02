
import './index.css'
import LoginForm from './componenets/LoginForm';
import { ThemeProvider } from './componenets/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
      <LoginForm/>
    </div>
    </ThemeProvider>
    
    
  );
}

export default App;
