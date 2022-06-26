import fot1img from '../../img/fot1.png'
import fot2img from '../../img/fot2.png'
import fot3img from '../../img/fot3.png'
import fot4img from '../../img/fot4.png'
import fot5img from '../../img/fot5.png'
import fot6img from '../../img/fot6.png'

export const Fotimg = () => {
    const fotimgs = [fot1img,fot2img,fot3img,fot4img,fot5img,fot6img]
    const haha = fotimgs.map(function(value) {
        return (
            <div className="fot-img">
                <img className='img-of-fot' src={value} alt="" />
            </div>
        )
    })
    return haha
}