import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userString = localStorage.getItem('user');

        if (!token || !userString) {
            navigate('/auth');
            return;
        }

        try {
            const userData = JSON.parse(userString);
            setUser(userData);
        } catch (error) {
            console.error('Failed to parse user data:', error);
            navigate('/auth');
        }
    }, [navigate]);

    if (!user) {
        return null; // or return a loading spinner
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Date of Birth</th>
                        <th className="py-2 px-4">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border py-2 px-4">{user.name}</td>
                        <td className="border py-2 px-4">{new Date(user.dob).toLocaleDateString()}</td>
                        <td className="border py-2 px-4">{user.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;