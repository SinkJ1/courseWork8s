package by.sinkJ.cw.interfaces;

import java.util.List;
import java.util.Map;
import javax.persistence.EntityManager;

public interface GenericDAO<T> {

	void add(EntityManager em, T object);

	void update(EntityManager em, T object);

	void delete(EntityManager em, Integer id);

	T findById(EntityManager em, Integer id);

	List<T> getAll(EntityManager em);

	List<T> findByFiltr(Map<String, String> map, EntityManager createEntityManager);
}
