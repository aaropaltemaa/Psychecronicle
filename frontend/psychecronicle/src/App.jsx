import theme from './assets/styles/Theme'
import { ThemeProvider } from '@mui/material/styles';
import Menu from './components/Containers/Menu';
import MenuHeader from './components/UI/MenuHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pioneers from './components/Containers/Pioneers';
import Pioneer from './components/Containers/Pioneer';
import SearchBar from './components/Containers/SearchBar';
import ConceptList from './components/Containers/Concepts/ConceptList';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuHeader />
        <div className="main-content" style={{ paddingTop: 200, paddingLeft: 300 }}>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/psychologists" element={<Pioneers />} />
            <Route path="/psychologists/:id" element={<Pioneer />} />
            <Route path="/search" element={<SearchBar />} />
            <Route path="/concepts" element={<ConceptList />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App