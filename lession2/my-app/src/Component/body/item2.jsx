import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img3 from '../../img/img3.png'
import img4 from '../../img/img4.png'
import img5 from '../../img/img5.png'
import img6 from '../../img/img6.png'
import img7 from '../../img/img7.png'
import img8 from '../../img/img8.png'
import img9 from '../../img/img9.png'
import img10 from '../../img/img10.png'
export const Item2 = () => {
    const items = [
        {
            img: img7,
            title: 'Tourism',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            bottom: 'June 6, 2019    By Rickie Baroch'
        },
        {
            img: img8,
            title: 'Tourism',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            bottom: 'June 6, 2019    By Rickie Baroch'
        },
        {
            img: img9,
            title: 'Tourism',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            bottom: 'June 6, 2019    By Rickie Baroch'
        },
        {
            img: img10,
            title: 'Tourism',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            bottom: 'June 6, 2019    By Rickie Baroch'
        }
    ]
    const result = () => {
        const haha = items.map(function(value){
            return (
                <div className="img-div">
                    <div className="img-swap">
                        <img className='img-main-item' src={value.img} alt="" />
                        <div className="img-with-item-content">
                            <span>{value.title}</span>        
                            <span>{value.content}</span>        
                            <span>{value.bottom}</span>        
                        </div>

                    </div>
                </div>
            )
        })
        return haha;
    }
    return result()
        
}




