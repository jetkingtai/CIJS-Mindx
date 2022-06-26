import picture from "../../img/background.png"
export const Header_background = () => {
    return (
        <div className="content-background">
            <img className="img" src={picture} alt="" />
            <div className="content-img">
                <span>Vehicle</span>
                <span>One of Saturn’s largest rings may be newer than anyone</span>
                <span>June 6, 2019    By Rickie Baroch    4 comments</span>
            </div>
        </div>
    )
}