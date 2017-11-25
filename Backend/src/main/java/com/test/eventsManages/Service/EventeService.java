package com.test.eventsManages.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.eventsManages.Domain.Evente;
import com.test.eventsManages.Domain.EventeRepository;

@Service
public class EventeService {
	
	@Autowired
	private EventeRepository er;
	

	public void add(Evente e){
		er.save(e);
	}
	
	public List<Evente> getAllByUser(String id){
		return er.findAllByCratedById(id);
	}
	
	public List<Evente> getAll(){
		return er.findAll();
	}
	
	public void delete(String id) {
		er.delete(id);
	}
	
	public void Update(Evente e) {
		er.save(e);
	}
}
