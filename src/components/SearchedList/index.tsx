import User from '../../interfaces/User.interface';
const SearchedList = (props: { data: User[] }) => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<td>User Id</td>
						<td>Full Name</td>
						<td>Username</td>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.username}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default SearchedList;
