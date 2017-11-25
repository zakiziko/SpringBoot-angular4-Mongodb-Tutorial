package com.test.eventsManages.Domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Evente {
	
	@Id
	private String id;
	private String name,adress,description;
	@DBRef
	private User cratedBy;
	
	
	public Evente(String name, String adress, String description) {
		super();
		this.name = name;
		this.adress = adress;
		this.description = description;
	}
	public Evente() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Evente(String name, String adress, String description, User cratedBy) {
		super();
		this.name = name;
		this.adress = adress;
		this.description = description;
		this.cratedBy = cratedBy;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public User getCratedBy() {
		return cratedBy;
	}
	public void setCratedBy(User cratedBy) {
		this.cratedBy = cratedBy;
	}
	public String getId() {
		return id;
	}

	
	

}
