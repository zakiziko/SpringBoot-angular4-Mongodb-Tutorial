package com.test.eventsManages.Web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.test.eventsManages.Domain.Evente;
import com.test.eventsManages.Domain.User;
import com.test.eventsManages.Service.*;

@RestController
public class Controller {
	
	@Autowired
	private UserService us;
	@Autowired
	private EventeService es;
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST,value="/user/register")
	public String register(@RequestBody User u){
		if(us.registre(u)){
			return "GOOD";
		}else{
			return "email not available";
		}
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping("/user/login/{email}/{password}")
	public User login(@PathVariable String email,@PathVariable String password){
		return us.login(email, password);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST,value="/evente/create")
	public Evente addEvent(@RequestBody Evente e){
		//e.setCratedBy(us.byId(id));
	    es.add(e);
		return e;
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping("/events")
	public List<Evente> AllEvents(){
		return  es.getAll();
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping("/user/events/{id}")
	public List<Evente> AllEventsByUser(@PathVariable String id){
		return  es.getAllByUser(id);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(method = RequestMethod.PUT,value="/evente/Update")
	public void updateEvent(@RequestBody Evente e){
		es.Update(e);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@RequestMapping(method = RequestMethod.DELETE,value="/evente/{id}")
	public void DeleteEvent(@PathVariable String id){
		es.delete(id);
	}

}
