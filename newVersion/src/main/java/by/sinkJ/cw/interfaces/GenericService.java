package by.sinkJ.cw.interfaces;

import java.util.List;
import java.util.Map;

public interface GenericService<T> {

	void add(T object);

	void update(T object);

	void delete(Integer id);

	T findById(Integer id);

	List<T> getAll();
	
	List<T> findByFiltr(Map<String, String> map);

}
