<script>
	import RamBase from '$lib/images/companies/rambase.webp';
	import Datek from '$lib/images/companies/datek.webp';
	import Cemit from '$lib/images/companies/cemit.webp';
	import Experis from '$lib/images/companies/experis.webp';
	import Omega from '$lib/images/companies/omega.webp';
</script>

<section id="erfaring">
	<h1 class="text-center">Erfaring & utdanning</h1>
	<div
		class="grid 2xl:gap-10 gap-10 justify-center justify-items-center xl:grid-cols-2 grid-cols-1"
	>
		<article>
			<div>
				<h2>Fullstack utvikler</h2>
				<h2 class="green-linear-gradient">RamBase</h2>
				<p>2024 - d.d.</p>
			</div>
			<img src={RamBase} alt="RamBase" width="240" height="240" loading="lazy" />
			<!-- <p>Fullstack utvikler.</p> -->
		</article>
		<article>
			<div>
				<h2>App utvikler</h2>
				<h2 class="green-linear-gradient">Datek Next</h2>
				<p>2022 - 2023</p>
			</div>
			<img src={Datek} alt="Datek Next" width="240" height="240" loading="lazy" />
			<!-- <p>Konsulent, utleid til Haugaland Kraft.</p> -->
		</article>
		<article>
			<div>
				<h2>Web utvikler</h2>
				<h2 class="green-linear-gradient">Cemit Digital</h2>
				<p>2021 - 2022</p>
			</div>
			<img src={Cemit} alt="Cemit Digital" width="240" height="240" loading="lazy" />
			<!-- <p>Konsulent, utleid fra Experis Academy. Fast ansatt siste halv året. React.js utvikler</p> -->
		</article>
		<article>
			<div>
				<!-- <h2>Fullstack .NET Program</h2> -->
				<h2>.NET Program</h2>
				<!-- <h2 class="green-linear-gradient">Experis Academy Norway</h2> -->
				<h2 class="green-linear-gradient">Experis Academy</h2>
				<p>2020 - 2021</p>
			</div>
			<img src={Experis} alt="Experis Academy Norway" width="240" height="240" loading="lazy" />
			<!-- <p>
			Gikk på .NET programmet til Experis, fra januar til mai. Utleid til Cemit Digital som
			konsulent fra juni 2020 og utover.
		</p> -->
		</article>
		<article class="justify-self-center">
			<div>
				<h2>Systemutvikler</h2>
				<h2 class="green-linear-gradient">Omega 365</h2>
				<p>2018 - 2019</p>
			</div>
			<img src={Omega} alt="Omega 365" width="240" height="240" loading="lazy" />
			<!-- <p>Systemutvikling og testing av PIMS 365.</p> -->
		</article>
	</div>
</section>

<style>
	article {
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		/* max-width: 50rem; */
		background: var(--brand-light-dark);
		border-radius: 1rem;
		overflow: hidden;
		flex-direction: column-reverse;
		/* max-width: 240px; */
		width: 240px;
	}
	article > div {
		padding: 2rem;
		display: grid;
		align-content: center;
	}
	.green-linear-gradient {
		padding: 0.3rem 0 1.5rem;
	}
	p {
		font-size: 1.5rem;
		padding: 0;
	}
	@media (min-width: 640px) {
		article {
			flex-direction: row;
			width: 100%;
		}
	}
	@media (min-width: 1024px) {
		article {
			flex-direction: row;
			width: 70%;
		}
	}
	@media (min-width: 1280px) {
		article {
			width: 100%;
		}
	}
	/* @media (min-width: 768px) {
		article {
			min-width: 673px;
		}
	}
	@media (min-width: 900px) {
		article {
			min-width: 683px;
			min-width: 571.5px;
		}
	} */
</style>
