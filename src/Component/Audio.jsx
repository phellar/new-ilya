import React from 'react'
import { Link } from 'react-router-dom'

const Audio = () => {
  return (
    <>
        <section className='just-section'>
            <div className="container">
            <h2 className='event-head'>Listen to our Comradium songs</h2>
            {/* <iframe src="https://audiomack.com/embed/mr-gyration-media-entertainment-international/song/i-love-kegite" scrolling="no" width="50%" height="252" frameborder="0" title="I LOVE KEGITE"></iframe>
            <iframe src="https://audiomack.com/embed/mr-gyration-media-entertainment-international/song/agbaletu-efcc-3" width="50%" height="252" frameborder="0" title="Ire Owuro"></iframe>
             */}
                
                <ul className='audio'>
                    <li><Link to="https://audiomack.com/mr-gyration-media-entertainment-international/song/i-love-kegite?share-user-id=142030352" target='blank'>I love kegite</Link></li>
                    <li><Link to="https://audiomack.com/mr-gyration-media-entertainment-international/album/agbaletu-2?share-user-id=142030352" target='blank'>Agbaletu</Link></li>
                    <li><Link to="https://audiomack.com/jayblaq-4/song/gbogbo-adaba128kbpsm4a" target='blank'>Gbogbo Adaba</Link></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Audio