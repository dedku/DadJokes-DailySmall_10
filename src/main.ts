import './style.css'

type Config = {
  headers: Headers
}

type Headers = {
  Accept: string
}

type JSONResponse = {
  joke?: string
}

const jokeEl = document.getElementById('joke') as HTMLDivElement
const jokeBtn = document.getElementById('jokeBtn') as HTMLButtonElement

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(): Promise<void> {
  const config: Config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config) as Response

  const data = await res.json() as JSONResponse

  jokeEl.innerHTML = data.joke!
}
