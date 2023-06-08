package com.lws.demo1.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JsonData {
    /**
     * 状态码：0表示成功，1表示处理中，-1表示失败
     */
    private Integer code;

    /**
     * 业务数据
     */
    private Object data;

    /**
     * 信息描述
     */
    private String msg;
    /**
     * 请求成功，不用返回数据
     * @return
     */
    public static JsonData buildSuccess(String msg){
        return new JsonData(200,null,msg);
    }

    /**
     * 成功，返回数据
     * @param data
     * @return
     */
    public static JsonData buildSuccess(Object data){
        return new JsonData(200,data,"Success");
    }

    /**
     * 失败，返回错误信息和固定状态码-1
     * @param msg
     * @return
     */
    public static JsonData buildError(String msg){
        return new JsonData(500,null,msg);
    }

    /**
     * 失败，返回自定义状态码和错误信息
     * @param code
     * @param msg
     * @return
     */
    public static JsonData buildError(Integer code,String msg){
        return new JsonData(code,null,msg);
    }

}
