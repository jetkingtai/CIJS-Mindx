import blog1img from '../../img/blog1.png'
import blog2img from '../../img/blog2.png'
import blog3img from '../../img/blog3.png'
import blog4img from '../../img/blog4.png'

export const Blog = () => {
    const blogs = [
        {
            img: blog2img,
            header: 'jeans',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            date: 'June 6, 2019    By Rickie Baroch'
        },
        {
            img: blog3img,
            header: 'City',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            date: 'June 6, 2019    By Rickie Baroch'
        },
        {
            img: blog4img,
            header: 'Photography',
            content: 'One of Saturn’s largest rings may be newer than anyone',
            date: 'June 6, 2019    By Rickie Baroch'
        }
    ]
    const result = () => {
        const haha = blogs.map(function (value) {
            return (
                <div className="blog">
                    <div className="blog-img">
                        <img className='blog-img-main' src={value.img} alt="" />
                    </div>
                    <div className="blog-content">
                        <span>{value.header}</span>
                        <span>{value.content}</span>
                        <span>{value.date}</span>
                    </div> 
                </div>
            )
        })
        return haha
    }
    return result()

}