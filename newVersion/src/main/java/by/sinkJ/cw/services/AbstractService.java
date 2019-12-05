package by.sinkJ.cw.services;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.TransactionException;
import org.springframework.beans.factory.annotation.Autowired;

import by.sinkJ.cw.DAO.AbstractGenericDAO;

public abstract class AbstractService<T> implements GService<T> {
	
	protected abstract Class<T> getTClass();
	
	private final Logger log = LogManager.getLogger(getTClass());
	
	@Autowired
	private EntityManagerFactory factory;

	@Autowired
	private AbstractGenericDAO<T> dao;

	public void add(T entity) {
		EntityManager em = null;
		try {
			em = factory.createEntityManager();
			em.getTransaction().begin();
			dao.add(em, entity);
			em.getTransaction().commit();
		} catch (TransactionException te) {
			em.getTransaction().rollback();
			log.error(te);
			throw new RuntimeException(te);
		} finally {
			if (em != null) {
				em.close();
			}
		}
	}

	public void update(T entity) {
		EntityManager em = null;
		try {
			em = factory.createEntityManager();
			em.getTransaction().begin();
			dao.update(em, entity);
			em.getTransaction().commit();
		} catch (TransactionException te) {
			em.getTransaction().rollback();
			log.error(te);
			throw new RuntimeException(te);
		} finally {
			if (em != null) {
				em.close();
			}
		}
	}

	public void delete(int id) {
		EntityManager em = null;
		try {
			em = factory.createEntityManager();
			em.getTransaction().begin();
			dao.delete(em, id);
			em.getTransaction().commit();
		} catch (TransactionException te) {
			em.getTransaction().rollback();
			log.error(te);
			throw new RuntimeException(te);
		} finally {
			if (em != null) {
				em.close();
			}
		}
	}

	public T findById(int id) {
		return dao.findById(factory.createEntityManager(), id);
	}

	public List<T> getAll() {
		return dao.getAll(factory.createEntityManager());
	}
	
}
