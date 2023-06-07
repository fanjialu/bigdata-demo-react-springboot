import { Avatar, Button, Input, Tooltip } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined, UserOutlined, AntDesignOutlined } from "@ant-design/icons"
import "./index.scss"
import { Link } from "react-router-dom"

const tabs = [
    {
        value: "/",
        label: "Dashboard"
    }, {
        value: "/services",
        label: "Services"
    }, {
        value: "/hosts",
        label: "Hosts"
    }, {
        value: "/alerts",
        label: "Alerts"
    }, {
        value: "/admin",
        label: "Admin"
    }
]

export const HeaderContent = ({ collapsed, setCollapsed }: any) => {
    return <>
        <div className="header-content">
            <span className="header-left">
                <Button
                    className='menu-icon'
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined color='#fff' /> : <MenuFoldOutlined color='#fff' />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 80,
                        height: 60,
                    }}
                />
                <Input
                    placeholder="Search Projects"
                    className="search-input"
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                />
                <div className="line-y"></div>

                <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
            </span>
            <span className="header-right">
                <ul className="tabs">
                    {tabs.map(({ value, label }: any) => {
                        return <li key={value}>
                            <Link to={value}>{label}</Link>
                        </li>
                    })}
                </ul>
                <span className="login-status">
                    <span className="name">{"Stephanie"}</span>
                    <Avatar src={"https://avatars.githubusercontent.com/u/113871206?s=96&v=4"} />
                </span>
            </span>


        </div>
    </>
}