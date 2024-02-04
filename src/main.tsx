import React from 'react'
import ReactDOM from 'react-dom/client'
import { ModeProvider } from './style/ModeProvider.tsx'
import Theme from './style/ThemeWrapper.tsx';
import App from './App.tsx'
import { GlobalStyle } from './style/GlobalStyles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModeProvider>
      <Theme>
        <App />
        <GlobalStyle />
      </Theme>
    </ModeProvider>
  </React.StrictMode>,
)
