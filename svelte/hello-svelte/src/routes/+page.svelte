<script lang="ts">
	import Landing from '../components/Landing.svelte';
	import About from '../components/About.svelte';
	import Contacts from '../components/Contacts.svelte';
    import { scrollToPage } from '../utils/scroll';
</script>

<!-- Landing -->
<main class="px-20 py-10">
	<nav class="h-20 flex justify-between items-center w-[90%] fixed">
		<a href="/" class="font-bold text-xl text-orange-600">SVELTE</a>
		<ul class="flex flex-row gap-10">
			<button on:click={() => scrollToPage('landing')}><li>Home</li></button>
			<button on:click={() => scrollToPage('about')}><li>About</li></button>
			<button on:click={() => scrollToPage('contacts')}><li>Contacts</li></button>
		</ul>
	</nav>
	<Landing />
	<About />
	<Contacts />
</main>
