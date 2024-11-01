import React from 'react'
import { Link } from 'react-router-dom'
import { PiMusicNotesSimpleBold } from "react-icons/pi";

const Audio = () => {
  return (
    <>
        <section className='just-section'>
            <div className="container">
            <h2 className='event-head'>Listen to our Comradic songs</h2>     
                <ul className='audio'>
                
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/mr-gyration-media-entertainment-international/song/i-love-kegite?share-user-id=142030352" target='blank'> I love kegite</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/mr-gyration-media-entertainment-international/album/agbaletu-2?share-user-id=142030352" target='blank'>Agbaletu</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/jayblaq-4/song/gbogbo-adaba128kbpsm4a" target='blank'>Gbogbo Adaba</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/jagaban-lee/song/kegite-gyration-woro-2?share-user-id=68917189" target='blank'>Kegites Gyration Woro</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/stephencoleman112/song/world-gyration-2324-jara" target='blank'>World Gyration</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/yeyeogeimade/song/ariya-highlife" target='blank'>Ariya Highlife</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/lov-gyration-africa/song/love-jara-2018-1" target='blank'>Love Jara</Link></li>
                    <li className='CTA'><PiMusicNotesSimpleBold /> <Link to="https://audiomack.com/lov-gyration-africa/song/jo-gbaske-lele" target='blank'>Jo Gbaskele</Link></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Audio