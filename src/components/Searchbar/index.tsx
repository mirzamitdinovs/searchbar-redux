import React from 'react';

const Searchbar = (props: { handleFilter: any }) => {
	return (
		<div>
			<input
				type='text'
				placeholder='Enter user'
				onChange={(e) => {
					props.handleFilter(e.target.value);
				}}
			/>
		</div>
	);
};

export default Searchbar;
