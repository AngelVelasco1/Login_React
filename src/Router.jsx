import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormularyRouter } from './routers/Formulary';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route path= "login/" element= {<FormularyRouter />} />
            </Routes>
        </BrowserRouter>
    )
}