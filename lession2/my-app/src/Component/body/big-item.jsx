import bigimg from  '../../img/bigitemimg.png'

export const Bigitem = () => {
    return(
        <div className="big-item">
            <div className="big-item-img">
                <img className='big-item-img-main' src={bigimg} alt="" />
            </div>
            <div className="big-item-content">
                <span>Summer</span>
                <span>One of Saturn’s largest rings may be newer than anyone</span>
                <span>June 6, 2019    By Rickie Baroch    6 comments</span>
                <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</span>
            </div>
        </div>
    )
}