import { Button, Input, Progress } from "antd";
import PageBar from "../../components/PageBar";
import { Menus } from "../../constants/constants";
import './index.scss'
import { SearchOutlined } from '@ant-design/icons'
import ChartCard from "../../components/ChartCard";


const nodes = [
    {
        key: "1",
        title: "NameNode",
        process: [
            { name: "NameNode Java heap size", value: "7GB/100GB" },
            { name: "NameNode Server threads", value: "7GB/100GB" },
        ]
    },
    {
        key: "2",
        title: "DataNode",
        process: [
            { name: "DataNode failed disk tolerance", value: "7GB/100GB" },
            { name: "DataNode maximum Java heap eize", value: "7GB/100GB" },
        ]
    }
]
const Services = () => {

    return (
        <div className="services">
            <PageBar title="Customize Services" desc="We have come up with recommended configuratiors for the services you selected. Customize them as you see fit." />
            <div className="actions-bar">
                <ul className="left-wrap">
                    {Menus.map((item) => {
                        return <li key={item.key}>
                            <a > {item.label}</a>
                        </li>
                    })}
                </ul>
            </div>
            <div className="actions-bar">
                <div className="left-wrap">
                    <Button className="button" type="primary" danger>Settings</Button>
                    <Button className="button" color="#FFBA53" style={{ color: "#FFBA53", borderColor: "#FFBA53" }}>Advanced</Button>
                </div>
                <div className="right-wrap">
                    <a href="">Group</a>
                    <Button className="button" type="primary">Default{"(3)"}</Button>
                    <a href="">Manage Config Groups</a>
                    <Input
                        placeholder="Search Projects"
                        className="search-input"
                        prefix={<SearchOutlined className="site-form-item-icon" />}
                    />
                </div>
            </div>
            <div className="nodes">
                {nodes.map((item) => {
                    return <ChartCard title={item.title} key={item.key} width="25%" aspectRatio="400/467" content={<div className="content">
                        <p>{item.title + " directories"}</p>
                        <Input.TextArea rows={4} placeholder={`/hadoop/hdfs/${item.title.toLocaleLowerCase()}`} maxLength={6} />
                        {item.process.map((p) => {
                            return <div className="p-wrap">
                                <p>{p.name}</p>
                                <Progress strokeColor={"rgb(107,159,255)"} percent={70}  size={[300, 25]} />
                            </div>
                        })}

                    </div>} />
                })}

            </div>

        </div>
    )

}

export default Services;