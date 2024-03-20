<script>
	import profile from '$lib/images/profil.webp';
	import profileSmall from '$lib/images/profil-small.webp';
</script>

<section class="flex flex-col lg:flex-row gap-20 2xl:gap-80">
	<div class="grid">
		<h1 class="m-0 text-center sm:text-left">
			Design og utvikling av nettsider, nettbutikk og mobilapper
		</h1>
		<p class="pt-5 pb-10 sm:pb-20 text-center sm:text-left">
			Jeg heter Jon Erik Ullvang og er en systemutvikler med snart 5 års erfaring. Til vanlig jobber
			jeg som systemutvikler hos RamBase, men driver med frilans oppdrag på fritiden. Min store
			lidenskap er systemutvikling og jeg hjelper privatpersoner og små bedrifter med design,
			utvikling og digital marketsføring av applikasjoner for alle digitale flater.
		</p>
		<button class="justify-self-center sm:justify-self-start">
			<a href="#kontakt" class="hover:no-underline"
				>Kontakt meg <span class="hidden sm:inline">for en uforpliktende prat</span></a
			>
		</button>
	</div>
	<div id="borderImage">
		<picture>
			<source
				media="(min-width:700px)"
				width="488"
				height="488"
				srcset={profile}
				class="max-w-none"
				style="border-radius: 50%;"
			/>
			<img
				alt="jon erik ullvang"
				width="250"
				height="250"
				src={profileSmall}
				class="max-w-none"
				style="border-radius: 50%;"
			/>
		</picture>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#borderImage {
		border-radius: 50%;
		padding: 0.5rem;
		background: linear-gradient(to bottom right, var(--brand-green), var(--brand-neon-green));
	}
	button {
		background: linear-gradient(to bottom right, var(--brand-green), var(--brand-neon-green));
		padding: 1rem 1.5rem;
		border-radius: 4rem;
	}
	button a {
		color: black;
	}
	img {
		max-width: clamp(250px, 35vw, 488px);
	}
</style>
