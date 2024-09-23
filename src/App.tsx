
import './App.css';
import { MainContent } from './components/MainContent';
import { MainLayout } from './components/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <MainContent />
      </MainLayout>
    </div>
  );
}

export default App;
