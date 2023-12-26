import { useDispatch, useSelector } from "react-redux"
import { getMemes } from "../features/meme/memeSlice";
import { useEffect, useState } from "react";

const Meme = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = () => {
      console.log("Fetch started....")
      dispatch(getMemes())
    }
    fetch()
  }, [])
  const [memes] = useSelector(store => store.meme)
  const [randomMeme, setRandomMeme] = useState(memes?.[0])
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

  const pickRandomMeme = () => {
    const randomNum = Math.floor(Math.random() * memes.length)
    setRandomMeme(memes[randomNum])
  }

  return (<>
    {memes &&
      (<section className="max-w-sm mt-6 text-zinc-100">
        <div className="flex gap-6">
          <input className="rounded-md indent-2 py-1 text-black" placeholder="Top Text" type="text" value={topText} onChange={e => setTopText(e.target.value)} />
          <input className="rounded-md indent-2 py-1 text-black" placeholder="Bottom Text" type="text" value={bottomText} onChange={e => setBottomText(e.target.value)} />
        </div>
        <button className="border border-zinc-100 mt-6 py-2 rounded-md self-center w-full h-full max-w-sm" onClick={pickRandomMeme}>Generate random template</button>
        <figure className="text-center mt-6">
          <div className="relative">
            {randomMeme &&
              <>
                <p className="absolute left-1/2 -translate-x-1/2  text-2xl font-bold text-border">{topText}</p>
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-border">{bottomText}</p>
              </>
            }
            <img className="w-full" src={randomMeme?.url} />
          </div>
          <figcaption>{randomMeme?.name}</figcaption>
        </figure>
      </section>
      )
    }
  </>
  )
}

export default Meme
