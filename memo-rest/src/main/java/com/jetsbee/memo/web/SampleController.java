package com.jetsbee.memo.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

	@RequestMapping("/")
	public String sampleIt(){
		return "Hello! Welcome to Spring Boot Sample. ";
	}
}
