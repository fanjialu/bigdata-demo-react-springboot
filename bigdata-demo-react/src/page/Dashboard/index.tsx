import { Tabs } from "antd";
import ChartCard from "../../components/ChartCard";
import PageBar from "../../components/PageBar";
import { DemoArea, DemoGauge, DemoLine, DemoLine2, DemoPie, DemoProgress, DemoRingProgress, DemoTinyArea, MyLiquid } from "../Chart";
import './index.scss'

const Dashboard = () => {
    const navs = [{
        key: "1",
        label: "Metrics (2)",
        number: 10,
        type: "none"
    }, {
        key: "2",
        label: "Heatmaps (1)",
        number: 10,
    }, {
        key: "3",
        label: "Config History (3)",
        number: 10,
    }, {
        key: "4",
        label: "Metric Actions",
        number: 10,
        type: "select",
        // children: [1, 2, 3]
    }, {
        key: "5",
        label: "Last 1 hour",
        number: 10,
        type: "select",
        // children: [1, 2, 3]
    },
    ]
    const getText = (title: string, color: string, size: number) => {
        return <p style={{ color: color, fontSize: `${size}px`, fontWeight: "600" }}>{title}</p>
    }
    const chatCardList = [
        {
            title: "HDFs Disk Usage",
            content: <MyLiquid />,
        }, {
            title: "DataNodes Live",
            content: getText("3/10", "#FF7979", 25),
        }, {
            title: "Hors Links",
            content: getText("Active Name Node Standby Name Wode 1 DataNodes", "#2BA700", 13),
        }, {
            title: "Memory Usage",
            content: <DemoTinyArea />,
        }, {
            title: "Network Usage",
            content: <DemoLine />,
        }, {
            title: "CPU Usage",
            content: <DemoArea />,
        }, {
            title: "Cluster Load",
            content: <DemoLine2 />,
        }, {
            title: "NameNode Heap",
            content: <DemoRingProgress />,
        }, {
            title: "NameNode RPC",
            content: getText("0.14 ms", "#45B220", 25),
        }, {
            title: "NameNode CPU wio",
            content: getText("N/A", "#E5E5E5", 25),
        }, {
            title: "NameNade uptime",
            content: getText("39.3 ms", "#45B220", 25),
        }, {
            title: "ResourceManager Heap",
            content: <DemoGauge />,
        }, {
            title: "RsourceManager Uptime",
            content: getText("40.7 min", "#45B220", 25),
        }, {
            title: "YARN Memory",
            content: <DemoPie/>,
        }, {
            title: "NodeManagers Live",
            content: <DemoProgress />,
        }, {
            title: "YARN Links",
            content: getText("Resourcemanager 1 NodeMan agers", "#2BA700", 13),
        }
    ]

    return <>
        <div className="dashboard">
            <PageBar title="Hello Stephanie!" desc=" Keep up the good work!" />
            <Tabs className="navs" defaultActiveKey="1" items={navs} />
            <div className="card-wrap">
                {chatCardList.map((item, index) => {
                    return <ChartCard key={index} title={item.title} content={item.content} lineCapacity={4} />
                })}
            </div>
        </div>
    </>
}
export default Dashboard;