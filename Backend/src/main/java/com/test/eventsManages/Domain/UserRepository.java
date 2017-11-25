package com.test.eventsManages.Domain;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>{
	public User findOneByEmail(String email);
	public User findOneByEmailAndPassword(String email,String password);
}
