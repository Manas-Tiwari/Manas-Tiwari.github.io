
const divJoke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

const configAxios = {
	headers: { Accept: 'application/json' }
};

async function dadJokes() {
	const res = await axios.get('https://icanhazdadjoke.com/', configAxios);
	if (res.data.status != 200) {
		const p = document.createElement('p');
		p.append(`Server Not Responded. Status Code : ${res.data.status}`);
		divJoke.append(p);
	}
	const p = document.createElement('p');
	const joke = res.data.joke;
	p.append(joke);
	divJoke.append(p);
}

dadJokes().catch((e) => {
	const p = document.createElement('p');
	p.append(`Something went wrong. ${e}`);
	divJoke.append(p);
	console.log('Something went wrong, please try again later. ', e);
});

btn.addEventListener('click', () => {
	divJoke.innerText = ' ';
	dadJokes();
});
