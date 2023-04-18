import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import ResultsSection from './layout/ResultsSection';
import SiteHeader from './layout/SiteHeader';

function App() {
  return (
    <div className='App'>
      <SiteHeader />
      <Main>
        <Header>GitHub Users</Header>
        <ResultsSection>TODO</ResultsSection>
      </Main>
    </div>
  );
}

export default App;
