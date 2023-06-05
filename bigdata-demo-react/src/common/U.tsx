const U = {
    price: {

        formatPrice: (value: any) => {
            value = value / 100;
            value += '';
            const list = value.split('.');
            const prefix = list[0].charAt(0) === '-' ? '-' : '';
            let num = prefix ? list[0].slice(1) : list[0];
            let result = '';
            while (num.length > 3) {
                result = `,${num.slice(-3)}${result}`;
                num = num.slice(0, num.length - 3);
            }
            if (num) {
                result = num + result;
            }
            return `¥ ${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
        },

        cent2yuan: (price: any, withSymbol: any) => {
            let ret: any = 0;
            if (!isNaN(price)) {
                ret = (price / 100).toFixed(2);
            }
            return (withSymbol ? '￥' : '') + ret;

        },

    },

    str: {
        rn2br: (str: string): string => {
            return str.replace(/(\r\n)|(\n)/g, '<br>');
        },
        isNull: (s: any): boolean => {
            return (s === null || typeof s === 'undefined');
        },
        isEmpty: (s: any): boolean => {
            if (U.str.isNull(s)) {
                return true;
            }
            if (typeof s != 'string') {
                return false;
            }
            return s.length === 0;
        },
        isNotEmpty: (s: string | null | undefined): boolean => {
            return !U.str.isEmpty(s);
        },
        trim: (x: string): string => {
            return x.replace(/^\s+|\s+$/gm, '');
        },
        isChinaMobile: (mobile: string = ''): boolean => {
            return mobile.length === 11;
        },
        passwordLengthValid: (password: string = ""): boolean => {
            return password.length <= 18 && password.length >= 6;
        },
        randomString: (len: number) => {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let maxIndex = chars.length;
            let s = '';
            for (let i = 0; i < len; i++) {
                s += chars.charAt(Math.floor(Math.random() * maxIndex));
            }
            return s;
        }
    },

    date: {
        remainingTime: (remainTime: number) => {
            let day: number = parseInt((remainTime / (24 * 3600 * 1000)).toString())

            let hour = parseInt(((remainTime % (24 * 3600 * 1000)) / 3600000).toString());

            let minute = parseInt(((remainTime % 3600000) / 60000).toString());

            let second = parseInt(((remainTime % 60000) / 1000).toString());

            let res = '';
            if (day > 0) {
                res = day + '天';
            } if (hour > 0) {
                res = res + (hour + '时')
            } if (minute > 0) {
                res = res + (minute + '分')
            }
            res = res + (second + '秒')

            return res;

        },
        format: (date: Date, fmt: string): (string | null) => {
            if (!date || !fmt) {
                return null;
            }
            var o: any = {
                'M+': date.getMonth() + 1, // 月份
                'd+': date.getDate(), // 日
                'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
                'H+': date.getHours(), // 小时
                'm+': date.getMinutes(), // 分
                's+': date.getSeconds(), // 秒
                'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
                'S': date.getMilliseconds(),
            };
            var week: any = {
                '0': '\u65e5',
                '1': '\u4e00',
                '2': '\u4e8c',
                '3': '\u4e09',
                '4': '\u56db',
                '5': '\u4e94',
                '6': '\u516d',
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')
                    .substr(4 - RegExp.$1.length));
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt
                    .replace(
                        RegExp.$1,
                        ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f'
                            : '\u5468')
                            : '')
                        + week[date.getDay() + '']);
            }
            for (var k in o) {
                if (new RegExp('(' + k + ')').test(fmt)) {
                    fmt = fmt.replace(RegExp.$1,
                        (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k])
                            .substr(('' + o[k]).length)));
                }
            }
            return fmt;
        }
    },

    setWXTitle: (t: string): void => {
        let i = document.createElement('iframe');
        i.style.display = 'none';
        i.onload = () => {
            setTimeout(() => {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
        document.title = t + ' - 汇购';
    },
    htmlstr: {

        html2dom: (html: string) => {
            let dom = document.createElement("div");
            dom.innerHTML = html;
            return dom;
        }

    },

    url: {
        getDomainFromUrl: (url: string) => {
            let offset = url.indexOf("//");
            let offset2 = url.indexOf("/", offset + 2);
            if (offset2 === -1) {
                return url.substring(offset + 2);
            }
            return url.substring(offset + 2, offset2);
        }
    },
    base64: {
        getBlobBydataURI: (dataURI: string, type: string) => {
            let binary = atob((dataURI || '').split(',')[1]);
            let array = [];
            for (let i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type });
        }

    },
    array: {
        swap: (arr: Array<any>, index1: number, index2: number) => {
            arr[index1] = arr.splice(index2, 1, arr[index1])[0];
            return arr;
        },

        remove: (arr: Array<any>, index: number) => {
            if (isNaN(index) || index > arr.length) {
                return [];
            }
            arr.splice(index, 1);
            return arr;
        },

        insert: (arr: Array<any>, index: number, item: any) => {
            arr.splice(index, 0, item);
            return arr;
        },

        insertLast: (arr: Array<any>, item: any) => {
            arr.splice(arr.length, 0, item);
            return arr;
        }

    }
}

export default U;
