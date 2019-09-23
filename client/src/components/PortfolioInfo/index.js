import React from 'react';

function PortfolioInfo(props) {
	return (
		<article data-project={props.projectNum}>
			<h3>{props.title}</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Vitae tenetur in ipsum. Voluptatibus et sed rerum illo
				dignissimos quo autem vitae dolore voluptatum repellendus?
				Eveniet facere accusamus at similique autem? A accusamus sunt
				iure repellendus quis id tempore commodi dignissimos
				consequatur nemo architecto expedita rerum ipsa neque dicta
				doloremque velit accusantium temporibus, adipisci, nostrum eum
				quisquam totam incidunt repellat? Nam. Quasi, ex eaque
				reiciendis, maiores ducimus esse facere maxime laudantium
				culpa beatae consectetur odio, quia ipsam iusto possimus.
				Officia libero minus incidunt. Dolore quisquam eius ea
				doloribus. Quibusdam, voluptate necessitatibus!
			</p>
		</article>
	);
}

export default PortfolioInfo;
