import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={
                        localStorage.getItem('token') 
                            ? <Navigate to="/dashboard" replace /> 
                            : <Navigate to="/auth" replace />
                    } 
                />
                <Route path="/auth" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;