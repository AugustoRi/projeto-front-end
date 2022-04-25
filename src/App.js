import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Listagem } from "./pages/listagem";
import { InformacoesCursos } from "./pages/InformacoesCursos";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listagem />}/>
        <Route path="/:curso/:id" element={<InformacoesCursos />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
