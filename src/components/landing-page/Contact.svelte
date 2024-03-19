<script>
	import mailIcon from '$lib/icons/mail.webp';
	import phoneIcon from '$lib/icons/phone.webp';
	import locationIcon from '$lib/icons/location.webp';

	let status = '';

	/**
	 *
	 * @param {any} data
	 */
	const handleSubmit = async (data) => {
		status = 'Sender...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			// status = result.message || 'Success';
			status = 'Meldingen er sendt!';
		}
	};
</script>

<section id="kontakt">
	<h1 class="text-center">Kontakt</h1>
	<div class="flex justify-between gap-10 lg:gap-20 flex-col lg:flex-row">
		<div class="lg:w-1/2 flex flex-col">
			<p id="marginBottom" class="text-center sm:text-left">
				Ønsker du å diskutere et prosjekt eller en idé? Jeg vil gjerne høre fra deg!<br />Jeg er her
				for å hjelpe deg med å realisere din nettside eller app.<br />Takk for at du vurderer mine
				tjenester!
			</p>
			<div class="flex items-center self-center sm:self-start">
				<img src={mailIcon} alt="mail" width="40" height="40" />
				<p>jon.erik.ullvang@gmail.com</p>
			</div>
			<div class="flex items-center self-center sm:self-start">
				<img src={phoneIcon} alt="phone" width="40" height="40" />
				<p>+47 948 40 018</p>
			</div>
			<div class="flex items-center self-center sm:self-start">
				<img src={locationIcon} alt="location" width="40" height="40" />
				<p>Flotmyrgata 199<br /> 5525 Haugesund</p>
			</div>
		</div>
		<form class="lg:w-1/2 grid gap-6" on:submit|preventDefault={handleSubmit}>
			<input type="hidden" name="access_key" value="54131da1-c368-43ac-9ac7-d635154c703c" />

			<div>
				<label for="name">Navn</label>
				<input type="text" id="name" name="name" placeholder="Navn" required />
			</div>
			<div>
				<label for="email">E-post</label>
				<input type="email" id="email" name="email" placeholder="E-post" required />
			</div>
			<div>
				<label for="phone">Telefon</label>
				<input type="tel" id="phone" name="phone" placeholder="Telefon" />
			</div>
			<div>
				<label for="subject">Emne</label>
				<input type="text" id="subject" name="subject" placeholder="Emne" />
			</div>
			<div>
				<label for="message">Melding</label>
				<textarea id="message" name="message" placeholder="Melding" rows="4" required></textarea>
			</div>
			<button class="justify-self-center sm:justify-self-start">Send</button>
			<p class="!m-0 h-7">{status}</p>
		</form>
	</div>
</section>

<style>
	p {
		margin: 1.5rem 0;
		padding: 0;
	}
	label {
		display: block;
		margin-bottom: 0.2rem;
	}
	form > div > * {
		width: 100%;
	}
	input,
	textarea {
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		padding: 0.4rem;
	}
	button {
		background: linear-gradient(to bottom right, var(--brand-green), var(--brand-neon-green));
		color: black;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		width: 10rem;
	}
	img {
		display: inline-block;
		margin-right: 1rem;
		height: 2.5rem;
	}
	#marginBottom {
		margin-bottom: 4rem;
	}
	@media (max-width: 1024px) {
		#marginBottom {
			margin-top: 0px;
			margin-bottom: 2rem;
		}
	}
</style>
