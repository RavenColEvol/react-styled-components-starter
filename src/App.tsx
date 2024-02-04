import { useMode } from './style/ModeProvider';
import styled from "styled-components"

const Button = styled.button`
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.text};
  padding: 1rem 2rem;
  border-radius: .5rem;
  outline: none;
  border: none;
  cursor: pointer;
`

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme.color.primary};
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.color.text};
`

function App() {
  const [mode, setMode] = useMode();
  const handleToggle = () => {
    setMode((mode) => mode === 'light' ? 'dark' : 'light');
  }
  return (
    <Container>
      <Title>Toggle Pixels</Title>
      <Button onClick={handleToggle}>Switch To {mode.toUpperCase()} Theme</Button>
    </Container>
  )
}

export default App
