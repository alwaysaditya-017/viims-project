package com.project.backend.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.backend.dto.VendorRequestDto;
import com.project.backend.entity.VendorEntity;

public interface VendorRepository extends JpaRepository<VendorEntity, UUID> {
	boolean existsByEmail(String email);
	
	/*
	 * @Query(nativeQuery = true , value =
	 * "select name , email, phone , address , status from vendors") public
	 * List<Object[]> getVendotList();
	 */
	
	
	 @Query("SELECT v.name , v.email, v.phone , v.address , v.status FROM VendorEntity v")
	    List<Object[]> getVendorList();
	
}