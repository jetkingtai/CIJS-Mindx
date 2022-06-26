import blog1img from '../../img/blog1.png'

export const AboutTheAuthor = () => {
    return (
        <div className="about-the-author">
            <div className="about-the-author-img">
                <img className='about-the-author-img-main' src={blog1img} alt="" />
            </div>
            <div className="bout-the-author-content">
                <h2>Kate Willems</h2>
                <span>Food & cooking bloger</span>
                <span>Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</span>
            </div>
            <div className="about-the-autho-btn">
                Continue Reading
            </div>
        </div>
    )
}