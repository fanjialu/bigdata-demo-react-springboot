import "./index.scss"
import pagebarback from "../../assets/image/page-bar.png"
const PageBar = ({ title, desc }: { title: string, desc: string }) => {

    return <div className="page-bar">
        <div className="left">
            <div className="title">{title}</div>
            <div className="desc">{desc}</div>
        </div>
        <div className="right">
            <img src={pagebarback} />
        </div>
    </div>
}

export default PageBar;