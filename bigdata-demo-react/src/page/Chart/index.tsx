import { Area, G2, Gauge, Line, Liquid, Pie, RingProgress, TinyArea } from "@ant-design/charts";
import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import { U } from "../../common";
import { Button, Progress } from "antd";

interface ChartDate {
    time: string
    number: number
}

export const FirstChart: React.FC = () => {

    const [data, setData] = useState<ChartDate[]>([]);



    const loadData = () => {
        fetch("/data.json").then((res) => {
            res.json().then((_res) => {
                const _data = _res.data.data.reverse();
                const dayBegin = Math.floor(new Date(new Date(_data[0].ctime).setHours(0, 0, 0, 0)).getTime());
                const dayOver = Math.floor(new Date(new Date(_data[0].ctime).setHours(23, 59, 59, 999)).getTime());
                const filterData = _data.filter((item: any) => item.ctime > dayBegin && item.ctime < dayOver)
                console.log(filterData);

                setData([])
                filterData.forEach((item: any) => {
                    const dateString: string = (U.date.format(new Date(item.ctime), "HH:mm") || "") + ""
                    let index = data.findIndex((item: ChartDate) => item.time === dateString);
                    if (index < 0) {
                        data.push({ time: dateString, number: 1 })
                    } else {
                        data[index].number = data[index].number + 1;
                    }
                });
                setData(data)
                console.log(data);

                // console.log(chartData);
            })
        })
    }
    useEffect(() => {
        loadData();
    }, []);

    const config = {
        background: "#fff",
        padding: 50,
        xField: 'time',
        yField: 'number',
        // xAxis: {
        //     tickCount: 5,
        // },
        style: {
            fill: "#fff"
        },
        smooth: true,
        title: {
            visible: true,
            text: '直播当天评论数量',
        },
        //   description: {
        //     visible: true,
        //     text: '这是一个关于配置图表标题和描述文本内容的demo',
        //   },
    };

    const ref: any = useRef();
    // 导出图片
    const downloadImage = () => {
        ref.current?.getChart().downloadImage();
    };
    // 获取图表 base64 数据
    const toDataURL = () => {
        console.log(ref.current?.getChart().toDataURL());
    };
    return <div className="chart">
        <Button onClick={downloadImage} type="primary">下载图表</Button>
        ----
        <Button onClick={toDataURL}>查看信息</Button>
        <Line ref={ref} {...config} data={data} />
    </div>
};

export const MyLiquid = () => {
    const config = {
        percent: 0.65,
        shape: 'diamond',
        outline: {
            border: 2,
            distance: 4,
        },
        wave: {
            length: 128,
        },
        // pattern: {
        //     type: 'line',
        // },
    };
    return <Liquid pattern={{ type: "line" }} className="liquid"  {...config} />;
}

export const DemoTinyArea = () => {
    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
    ];
    const config = {
        height: 60,
        autoFit: false,
        data,
        smooth: true,
        color: '#E5EDFE',
        // pattern: {
        //     type: 'line',
        //     cfg: {
        //         stroke: '#5B8FF9',
        //     },
        // },
    };
    return <TinyArea pattern={{
        type: 'line',
        cfg: {
            stroke: '#5B8FF9',
        },
    }} padding={[0, 80]} {...config} />;
};

export const DemoLine = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        //   padding: 'auto',
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
    };

    return <Line padding={[0, 110]} {...config} />;
};

export const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'Date',
        yField: 'scales',
        // annotations: [
        //     {
        //         type: 'text',
        //         position: ['min', 'median'],
        //         content: '中位数',
        //         offsetY: -4,
        //         style: {
        //             textBaseline: 'bottom',
        //         },
        //     },
        //     {
        //         type: 'line',
        //         start: ['min', 'median'],
        //         end: ['max', 'median'],
        //         style: {
        //             stroke: 'red',
        //             lineDash: [2, 2],
        //         },
        //     },
        // ],
    };

    return <Area padding={[0, 110]} {...config} />;
};

export const DemoLine2 = () => {
    const data = [
        {
            year: '1991',
            value: 3,
        },
        {
            year: '1992',
            value: 4,
        },
        {
            year: '1993',
            value: 3.5,
        },
        {
            year: '1994',
            value: 5,
        },
        {
            year: '1995',
            value: 4.9,
        },
        {
            year: '1996',
            value: 6,
        },
        {
            year: '1997',
            value: 7,
        },
        {
            year: '1998',
            value: 9,
        },
        {
            year: '1999',
            value: 13,
        },
    ];
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return <Line padding={[0, 110]} {...config} />;
};

export const DemoRingProgress = () => {
    const config = {
        height: 70,
        width: 70,
        autoFit: false,
        percent: 0.7,
        color: ['#5B8FF9', '#E8EDF3'],
    };
    return <RingProgress style={{ fontSize: "14px" }} {...config} />;
};

export const DemoGauge = () => {
    const config = {
        percent: 0.75,
        range: {
            color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        // indicator: null,
        statistic: {
            title: {
                offsetY: -36,
                style: {
                    fontSize: '14px',
                    color: '#4B535E',
                },
                formatter: () => '70%',
            },
            // content: {
            //   style: {
            //     fontSize: '14px',
            //     lineHeight: '44px',
            //     color: '#4B535E',
            //   },
            // },
        },
    };
    return <Gauge {...config} />;
};

export const DemoPie = () => {
    const G = G2.getEngine('canvas');
    const data = [
        {
            type: '分类一',
            value: 100,
        },
        {
            type: '分类二',
            value: 200,
        },
        {
            type: '分类三',
            value: 300,
        },
        {
            type: '分类四',
            value: 100,
        },
        {
            type: '分类五',
            value: 100,
        },
        {
            type: '其他',
            value: 200,
        },
    ];
    const cfg = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.75,
        // legend: false,
        label: {
            type: 'spider',
            labelHeight: 40,
            formatter: (data: any, mappingData: any) => {
                const group = new G.Group({});
                group.addShape({
                    type: 'circle',
                    attrs: {
                        x: 0,
                        y: 0,
                        width: 40,
                        height: 50,
                        r: 5,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 10,
                        y: 8,
                        text: `${data.type}`,
                        fill: mappingData.color,
                    },
                });
                group.addShape({
                    type: 'text',
                    attrs: {
                        x: 0,
                        y: 25,
                        text: `${data.value}个 ${data.percent * 100}%`,
                        fill: 'rgba(0, 0, 0, 0.65)',
                        fontWeight: 700,
                    },
                });
                return group;
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
    };
    const config = cfg;
    return <Pie {...config} />;
};


export const DemoProgress = () => {
    const config = {
        height: 100,
        width: 300,
        autoFit: false,
        percent: 70,
        color: ['#5B8FF9', '#E8EDF3'],
    };
    return <Progress style={{ fontSize: "14px" }} {...config} />;
};
