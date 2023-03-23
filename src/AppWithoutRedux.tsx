import { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import SearchedList from './components/SearchedList';
import usersData from './data/users.data.json';
import User from './interfaces/User.interface';
function AppWithoutRedux() {
	const [searchedUsers, setSearchedUsers] = useState<User[]>([]);

	const handleFilter = (searchText: string) => {
		console.log('searchText: ', searchText);
		const filtered = usersData.filter(
			(item) =>
				item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				item.username.toLowerCase().includes(searchText.toLowerCase())
		);
		setSearchedUsers(filtered);
	};

	return (
		<div className='App'>
			<Searchbar handleFilter={handleFilter} />
			{searchedUsers.length ? <SearchedList data={searchedUsers} /> : null}
		</div>
	);
}

export default AppWithoutRedux;
