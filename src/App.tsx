import AppProvider from './context/AppProvider';
import ServiceProvider from './context/service/ServiceProvider';
import HomePage from './Pages/Home';

function App() {
  return (
    <AppProvider>
      <ServiceProvider>
        <HomePage />
      </ServiceProvider>
    </AppProvider>
  );
}

export default App;
