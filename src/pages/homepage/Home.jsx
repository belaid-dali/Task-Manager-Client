import './home.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { currentUser } = auth;
	return (
		<div className='home'>
			<div className='home__container'>
				<h2>Let's manage our Tasks</h2>
				<p>Using Task Manager Bae.</p>

				{currentUser && currentUser.token ? (
					<Link to='/tasks' className='button'>
						Get Started
					</Link>
				) : (
					<Link to='/signin' className='button'>
						Get Started
					</Link>
				)}
			</div>
		</div>
	);
};

export default Home;