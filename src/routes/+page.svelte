<script>
	import Header from './../components/Header.svelte';
	import Hero from './../components/landing-page/Hero.svelte';
	import Footer from '../components/Footer.svelte';
	import Services from '../components/landing-page/Services.svelte';
	import Experience from '../components/landing-page/Experience.svelte';
	import Contact from '../components/landing-page/Contact.svelte';
</script>

<svelte:head>
	<title>Jon Erik Ullvang</title>
	<meta name="description" content="Jon Erik Ullvang" />
</svelte:head>

<Header />
<main>
	<Hero />
	<Services />
	<Experience />
	<Contact />
</main>
<Footer />
