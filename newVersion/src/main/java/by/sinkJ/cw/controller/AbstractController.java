package by.sinkJ.cw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import by.sinkJ.cw.interfaces.GenericService;
import by.sinkJ.cw.services.AbstractService;

public abstract class AbstractController<T> {

	@Autowired
	private AbstractService<T> genericService;


	@PostMapping(produces = "application/json;charset=UTF-8")
	public ResponseEntity<T> add(@RequestBody T entity) {
		genericService.add(entity);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(value = "/{id}", produces = "application/json;charset=UTF-8")
	public ResponseEntity<T> getOne(@PathVariable("id") Integer id) {
		
		return ResponseEntity.ok(genericService.findById(id));
	}

	@GetMapping(produces = "application/json;charset=UTF-8")
	public ResponseEntity<List<T>> getAll() {
		return ResponseEntity.ok(genericService.getAll());
	}



}
