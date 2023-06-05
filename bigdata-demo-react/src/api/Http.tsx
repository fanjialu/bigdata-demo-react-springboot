import { U } from "../common";

async function getLiveChats() {
    const res = (await (await fetch("./data.json")).json()).data;
    const { data = [] } = res
    const messages = data.map((item: any) => {
        return {
            time: U.date.format(new Date(item.ctime), "yyyy-MM-dd,HH:mm:ss"),
            text: item.content,
            name: item.nickname
        }
    }).reverse();

    // const ul = document.getElementById("ul");
    // messages.forEach(({ time, text, name }, index) => {
    //     const node = document.createElement("li");
    //     const textnode = document.createTextNode((index + 1) + " ----> " + time + " ----> " + name + " ----> " + text);
    //     node.appendChild(textnode);
    //     ul.appendChild(node)
    // })
    return messages
}

export default {
    getLiveChats,
}