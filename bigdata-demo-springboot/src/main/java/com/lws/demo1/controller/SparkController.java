package com.lws.demo1.controller;

import com.lws.demo1.utils.JsonData;
import com.lws.demo1.utils.ShellUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/Spark")
@CrossOrigin
public class SparkController {
    @GetMapping("/install")
    public JsonData install(){
        String cmd = "sh /root/shell/sparkinstall.sh";
        return JsonData.buildSuccess(ShellUtils.runShell(cmd));
    }
}
