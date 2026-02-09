package com.project.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.backend.dto.VendorRequestDto;
import com.project.backend.service.VendorService;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/vendor")
public class VendorController {
	
	@Autowired
	private VendorService vendorService;
	
	@GetMapping("/list")
	public ResponseEntity<List<VendorRequestDto>> getAllVendor(){
		return ResponseEntity.ok(vendorService.fetchVendorList()); 
	}
}
