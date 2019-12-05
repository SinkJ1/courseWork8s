package by.sinkJ.cw.services;

import java.util.List;

public interface GService<T> {

	void add(T entity);
	
	void update(T entity);
	
	void delete(int id);
	
	T findById(int id);
	
	List<T> getAll();
}
