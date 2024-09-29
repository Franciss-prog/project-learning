
	// function to scrollToPage
	export const scrollToPage = (id: string): void => {
		// get the section
		const section = document.getElementById(id);

		section?.scrollIntoView({ behavior: 'smooth' });
	};