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
    return messages
}

export default {
    getLiveChats,
}