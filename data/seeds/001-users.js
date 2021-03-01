exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('users').del().then(function() {
		// Inserts seed entries
		return knex('users').insert([
			{
				id: '00u9ykbazjm5Kfguw5d6',
				email: 'executivedirector@gmail.com',
				first_name: 'Freddie',
				last_name: 'Thorne',
				role: 'executive_director'
			},
			{
				id: '00u9yoetkifWx06KM5d6',
				email: 'supervisor@gmail.com',
				first_name: 'Arthur',
				last_name: 'Shelby',
				role: 'supervisor'
			},
			{
				id: '00u9ykcuajdbxpj7K5d6',
				email: 'casemanager@gmail.com',
				first_name: 'Linda',
				last_name: 'Shelby',
				role: 'case_manager'
			},
			{
				id: '00u9yiiwcYlzOYfBc5d6',
				email: 'guest@gmail.com',
				first_name: 'Thomas',
				last_name: 'Shelby',
				role: 'guest'
			},
			{
				id: '00u9yjt8gDzUYwiSt5d6',
				email: 'pending@gmail.com',
				first_name: 'Ruby',
				last_name: 'Rose',
				role: 'pending'
			},
			{
				id: '00u9yjnk7GU3iOPv65d6',
				email: 'guest2@gmail.com',
				first_name: 'Rain',
				last_name: 'Williams',
				role: 'guest'
			}
		]);
	});
};
