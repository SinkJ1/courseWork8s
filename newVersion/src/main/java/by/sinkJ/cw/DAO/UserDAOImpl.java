package by.sinkJ.cw.DAO;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;
import by.sinkJ.cw.interfaces.UserDAO;
import by.sinkJ.cw.model.User;

@Repository
public class UserDAOImpl extends AbstractGenericDAO<User> implements UserDAO {

	private static UserDAOImpl instance;

	private UserDAOImpl() {
	}

	protected Class<User> getTClass() {
		return User.class;

	}

	public static UserDAOImpl getInstance() {
		if (instance == null) {
			instance = new UserDAOImpl();
			return instance;
		}
		return instance;
	}

}
