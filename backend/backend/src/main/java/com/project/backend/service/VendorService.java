package com.project.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.backend.dto.VendorRequestDto;
import com.project.backend.repository.VendorRepository;

@Service
public class VendorService {
	@Autowired 
	private VendorRepository vendorRepository;
	
	public List<VendorRequestDto> fetchVendorList(){
		
		List<VendorRequestDto> result = new ArrayList<>();
		
		List<Object[]> rows = vendorRepository.getVendorList();
		for (Object[] row : rows) {
			result.add(
				    new VendorRequestDto(
				        (String) row[0],
				        (String) row[1],
				        (String) row[2],
				        (String) row[3],
				        (String) row[4]
				    )
				);
		}
		
		return result;
	}
	
}
