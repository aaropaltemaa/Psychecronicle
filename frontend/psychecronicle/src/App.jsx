import theme from './assets/styles/Theme'
import { ThemeProvider } from '@mui/material/styles';
import Menu from './components/Containers/Menu';
import MenuHeader from './components/UI/MenuHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuHeader />
        <div className="main-content" style={{ paddingTop: 200, paddingLeft: 300 }}>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App