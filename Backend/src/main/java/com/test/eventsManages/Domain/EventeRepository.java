package com.test.eventsManages.Domain;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventeRepository extends MongoRepository<Evente, String> {
	public List<Evente> findAllByCratedById(String id);

}
