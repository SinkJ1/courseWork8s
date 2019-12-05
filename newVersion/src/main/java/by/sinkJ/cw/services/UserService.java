package by.sinkJ.cw.services;


import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import by.sinkJ.cw.model.User;

@Service
public class UserService extends AbstractService<User> implements GService<User> {

	private final Logger log = LogManager.getLogger(UserService.class);
	
	protected Class<User> getTClass() {
		return User.class;

	}


}
