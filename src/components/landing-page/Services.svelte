<script>
	// import profile from '$lib/images/profil.webp';
	import hostingIcon from '$lib/icons/hosting.webp';
	import designIcon from '$lib/icons/design.webp';
	import developmentIcon from '$lib/icons/development.webp';
	import marketingIcon from '$lib/icons/marketing.webp';
</script>

<section id="tjenester">
	<h1>Tjenester jeg tilbyr</h1>
	<div
		class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center flex-wrap xl:gap-10 md:gap-10 gap-8"
	>
		<article>
			<h2>Design<br class="hidden sm:block" /><br /></h2>
			<img src={designIcon} alt="Hosting" width="41" height="38" />
			<ul>
				<li>Web og mobil design</li>
				<li>UI/UX</li>
				<li>Prototyper</li>
				<li>Brukertesting</li>
				<li>Logo</li>
				<li>Responsiv design</li>
			</ul>
		</article>
		<article>
			<h2>Utvikling<br class="hidden sm:block" /><br /></h2>
			<img src={developmentIcon} alt="Development" width="41" height="38" />
			<ul>
				<li>Nettside</li>
				<li>Nettbutikk (E-handel)</li>
				<li>Mobilapp</li>
				<li>Publiseringssystem (CMS)</li>
				<li>Bookingsystem</li>
				<li>Desktop app</li>
			</ul>
		</article>
		<article>
			<h2>Digital<br />Markedsføring</h2>
			<img src={marketingIcon} alt="Marketing" width="41" height="38" />
			<ul>
				<li>Søkemotoroptimalisering (SEO)</li>
				<li>Sosiale medier</li>
				<li>E-postmarkedsføring</li>
				<li>Google Ads</li>
				<li>Facebook Ads</li>
				<li>Instagram Ads</li>
			</ul>
		</article>
		<article>
			<h2>Hosting<br class="hidden sm:block" /><br /></h2>
			<img src={hostingIcon} alt="Hosting" width="41" height="38" />
			<ul>
				<li>Webhotell</li>
				<li>Domene</li>
				<li>E-post</li>
				<li>SSL-sertifikat</li>
				<li>Backup</li>
				<li>Oppdateringer</li>
			</ul>
		</article>
	</div>
</section>

<style>
	h1,
	h2 {
		text-align: center;
	}
	article {
		background: var(--brand-light-dark);
		padding: 2rem 1rem;
		border-radius: 1rem;
	}
	img {
		margin: 1.5rem auto;
	}
	li {
		list-style: none;
		translate: 0;
		text-align: center;
	}
	@media (min-width: 1280px) {
		li {
			text-align: left;
			translate: 1.2rem;
			list-style: disc outside none;
		}
		img {
			margin: 2.5rem auto;
		}
	}
</style>
