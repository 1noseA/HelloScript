package com.sample.dao;

import java.util.List;

import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Select;

import com.sample.Employee;

public interface EmpDao {

	@ResultMap("empResult")
	@Select("select * from employee")
	public List<Employee> findAll();

}
