package by.sinkJ.cw.DAO;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import by.sinkJ.cw.model.Film;
@Repository
public class FilmDAOImpl extends AbstractGenericDAO<Film>{

	@Override
	protected Class<Film> getTClass() {
		return Film.class;
	}

	@Override
	public List<Film> getAll(EntityManager em) {
		return em.createQuery("from" + " " + getTClass().getName() + "", getTClass()).getResultList();
	}
	
}
