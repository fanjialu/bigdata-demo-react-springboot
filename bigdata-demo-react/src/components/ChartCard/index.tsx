import { Card } from "antd"
import "./index.scss"

const ChartCard = ({ title, content, key, lineCapacity }:
    {
        title: string,
        content: any,
        key: string | number,
        lineCapacity: number
    }) => {

    // lineCapacity = 4;

    return <li className="chart-card" key={key}>
        <Card title={title} className="card">
            <div className="content">{content}</div>
            {false&&<div>{lineCapacity}</div>}
        </Card>
    </li>

}

export default ChartCard