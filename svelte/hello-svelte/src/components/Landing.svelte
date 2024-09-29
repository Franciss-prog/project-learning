<script>
    // imports
    import { scrollToPage } from "../utils/scroll";
	const sub = 'A Minimalist Javascript Library';
    
</script>

<main class="min-h-screen flex justify-center items-center" id="landing">
	<div class="flex flex-col gap-2 h-[50vh]">
		<span class="text-[120px] font-bold">
			Welcome To <span class="text-orange-600">Svelte!</span>
		</span>
		<span class="text-6xl">{sub.toUpperCase()}</span>
		<button class="flex justify-start items-center bg-orange-500 w-fit px-4 py-2 text-white rounded-2xl"
			on:click={() => scrollToPage("about")}>Learn More</button
		>
	</div>
</main>
