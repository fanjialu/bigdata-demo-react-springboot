import { Card } from "antd"
import "./index.scss"

const ChartCard = ({ title, content, key, width, aspectRatio }:
    {
        title: string,
        content: any,
        key: string | number,
        width: string,
        aspectRatio: string,
    }) => {

    // lineCapacity = 4;

    return <li className="chart-card" style={{ aspectRatio: aspectRatio, width: width }} key={key}>
        <Card title={title} className="card">
            <div className="content">{content}</div>
        </Card>
    </li>

}

export default ChartCard