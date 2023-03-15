import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/faturas" element={<Button variant='contained' color='primary'>teste</Button>} />
      {/* qualquer outra rota redirenciona para pagina de fatura */}
      <Route path='*' element={<Navigate to="/faturas" />} />
    </Routes>
  );

}