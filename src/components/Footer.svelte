<script>
	import Facebook from '$lib/icons/social-media/facebook.webp';
	import LinkedIn from '$lib/icons/social-media/linkedin.webp';
	import Instagram from '$lib/icons/social-media/instagram.webp';
	import UpArrow from '$lib/icons/up-arrow.webp';
</script>

<footer class="flex justify-center mt-8 md:mt-24">
	<div class="flex-col flex md:flex-row container px-10 justify-between items-center gap-12 py-16">
		<p class="p-0">2024 © Jon Erik Ullvang</p>
		<div class="flex gap-8">
			<a href="https://www.facebook.com/jonerikullvang" target="_blank">
				<img src={Facebook} alt="Facebook" width="40" height="40" />
			</a>
			<a href="https://www.linkedin.com/in/ullvang" target="_blank">
				<img src={LinkedIn} alt="LinkedIn" width="40" height="40" />
			</a>
			<a href="https://www.instagram.com/ullvang/" target="_blank">
				<img src={Instagram} alt="Instagram" width="40" height="40" />
			</a>
		</div>
		<a href="#top" class="flex gap-3">
			<img src={UpArrow} alt="Up arrow" width="20" height="20" class="h-5" />
			Til toppen
		</a>
	</div>
</footer>

<style>
	footer {
		background: var(--brand-light-dark);
	}
</style>
