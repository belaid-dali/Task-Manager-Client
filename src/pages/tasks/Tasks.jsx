import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './tasks.scss';
import { useEffect } from 'react';
import { getAllTasks } from '../../reducers/taskSlice';

const Tasks = () => {
	const tasklist = useSelector((state) => state.task);
	const { AllTasks } = tasklist;
	const user = useSelector((state) => state.auth);
	const { currentUser } = user;

	let pendingTask = [];
	let completedTask = [];
	let ongoingTask = []; 

	for (let i = 0; i < AllTasks.length; i++) {
		if (AllTasks[i].status === 'todo') {
			pendingTask.push(AllTasks[i]);
		} else if (AllTasks[i].status === 'done') {
			completedTask.push(AllTasks[i]);
		} else if (AllTasks[i].status === 'doing') { 
			ongoingTask.push(AllTasks[i]);
		}
	}

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllTasks(currentUser.token, currentUser.id));
	}, [dispatch, currentUser.token, currentUser.id]);

	return (
		<div>
			<div className='tasks'>
				<div className='tasks__left'>
					<Sidebar />
				</div>
				<div className='tasks__right'>
					<div className='tasks__rightContent'>
						<h2>Task Status Tracking...</h2>
						<div className='taskcount'>
							<div className='todo box'>Todo - {pendingTask.length}</div>
							<div className='doing box'>Ongoing - {ongoingTask.length}</div> 
							<div className='done box'>Complete - {completedTask.length}</div>
						</div>
						<div className='createButton'>
							<Link to='/taskmanager' className='button'>
								Create Task
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tasks;
