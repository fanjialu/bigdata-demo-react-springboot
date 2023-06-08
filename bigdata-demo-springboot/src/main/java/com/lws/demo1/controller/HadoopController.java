package com.lws.demo1.controller;

import com.lws.demo1.utils.JsonData;
import com.lws.demo1.utils.ShellUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/Hadoop")
@CrossOrigin
public class HadoopController {
    /**
     * Hadoop 安装配置
     * @return
     */
    @GetMapping("/install")
    public JsonData install(){
        String cmd = "sh /root/shell/hadoopinstall.sh";
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }

    /**
     * 开启Hadoop服务
     * @return
     */
    @GetMapping("/start")
    public JsonData start(){
        String cmd = "sh /root/shell/starthadoop.sh";
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }

    /**
     * 暂停Hadoop服务
     * @return
     */
    @GetMapping("/stop")
    public JsonData stop(){
        String cmd = "sh /root/shell/stophadoop.sh";
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }
}
