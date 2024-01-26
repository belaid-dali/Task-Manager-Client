import './App.css';
import Navbar from './components/navbar/Navbar';
import Signin from './components/singinups/Signin';
import Signup from './components/singinups/Signup';
import Home from './pages/homepage/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TaskManager from './pages/taskmanaging/TaskManager';
import RequireAuth from './utils/RequireAuth';
import { useSelector } from 'react-redux';
import Tasks from './pages/tasks/Tasks';

function App() {
	const { auth } = useSelector((state) => ({ ...state }));
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={!auth.currentUser ? <Signin /> : <Tasks />}
					/>
					<Route
						path='/signup'
						element={!auth.currentUser ? <Signup /> : <Tasks />}
					/>
					<Route
						path='/taskmanager'
						element={
							<RequireAuth>
								<TaskManager />
							</RequireAuth>
						}
					/>
					<Route
						path='/tasks'
						element={
							<RequireAuth>
								<Tasks />
							</RequireAuth>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;