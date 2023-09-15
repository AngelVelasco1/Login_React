import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormularyRouter } from './routers/Formulary';
import { HomeRouter } from './routers/Home';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path= "/" element= {<HomeRouter />} />
              <Route path= "/login/" element= {<FormularyRouter />} />
            </Routes>
        </BrowserRouter>
    )
}