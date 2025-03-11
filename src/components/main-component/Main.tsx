import { useState, useEffect } from 'react';
import './Main.css';

export interface MemeData {
  imageUrl: string;
  topText: string;
  bottomText: string;
}

export interface MemeApi {
  url: string;
  id: string;
  name: string;
}

export interface MemeResponse {
  success: boolean;
  data: {
    memes: MemeApi[];
  };
}

export default function Main() {
  const defaultMemeData: MemeData = {
    imageUrl: 'http://i.imgflip.com/1bij.jpg',
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
  }
  const [memeData, setMemeData] = useState<MemeData>(defaultMemeData);
  const MEME_URL = 'https://api.imgflip.com/get_memes';

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(name, value);
    setMemeData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    fetch(MEME_URL)
      .then((response) => response.json())
      .then((data: MemeResponse) => {
        const { memes } = data.data;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes?.[randomIndex] ? memes[randomIndex] : 
          memes[0] ? memes[0] : { url: defaultMemeData.imageUrl };
        setMemeData((prev) => ({ ...prev, imageUrl: randomMeme.url }));
    }).catch((error) => {
      console.error('Error fetching meme data:', error);
    });
  }, []);

  return (
      <main>
          <div className="form">
              <label>Top Text
                  <input
                      type="text"
                      placeholder="One does not simply"
                      name="topText"
                      onChange={handleChange}
                      value={memeData?.topText}
                  />
              </label>

              <label>Bottom Text
                  <input
                      type="text"
                      placeholder="Walk into Mordor"
                      name="bottomText"
                      onChange={handleChange}
                      value={memeData?.bottomText}
                  />
              </label>
              <button>Get a new meme image 🖼</button>
          </div>
          <div className="meme">
              {memeData?.imageUrl && <img src={memeData?.imageUrl} alt="Meme picture"/>}
              <span className="top">{memeData?.topText}</span>
              <span className="bottom">{memeData?.bottomText}</span>
          </div>
      </main>
  )
}