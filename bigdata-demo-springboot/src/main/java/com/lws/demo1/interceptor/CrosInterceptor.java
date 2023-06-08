package com.lws.demo1.interceptor;


import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 通过拦截器配置解决浏览器跨域的问题
 */
public class CrosInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        //表示接受任意域名的请求,也可以指定域名
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));

        //该字段可选，是个布尔值，表示是否可以携带cookie
        response.setHeader("Access-Control-Allow-Credentials", "true");

        response.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");

        response.setHeader("Access-Control-Allow-Headers", "*");

        /**
         * 方将头部带自定义信息的请求方式称为带预检（preflighted）的跨域请求。
         * 在实际调用接口之前，会首先发出一个options请求，检测服务端是否支持真实的请求进行跨域的请求。
         * 真实请求在options请求中，通过request-header将 Access-Control-Request-Headers
         * 与Access-Control-Request-Method发送给后台，另外浏览器会自行加上一个Origin请求地址。
         *
         * 加入下面那代码是为了防止options请求导致报错
         */
        if (HttpMethod.OPTIONS.equals(request.getMethod())){
            return true;
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
