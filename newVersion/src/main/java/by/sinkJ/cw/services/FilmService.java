package by.sinkJ.cw.services;

import org.springframework.stereotype.Service;

import by.sinkJ.cw.model.Film;

@Service
public class FilmService extends AbstractService<Film> implements GService<Film> {

	@Override
	protected Class<Film> getTClass() {
		return Film.class;
	}

}
