import theme from './assets/styles/Theme'
import { ThemeProvider } from '@mui/material/styles';
import MenuHeader from './components/UI/MenuHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuHeader />
        <Routes>
          <Route path="/" element={<MenuHeader />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App