package by.sinkJ.cw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import by.sinkJ.cw.model.Film;

@Controller
@RequestMapping(value = "/films")
public class FilmController extends AbstractController<Film>{

}
