package by.sinkJ.cw.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "t_films")
public class Film {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "film_id")
	private int id;
	
	@Column(name = "film_name")
	private String name;
	
	@Column(name = "film_image")
	private String image;
	
	@Column(name = "short_description")
	private String sDescription;
	
	@Column(name = "date")
	private String date;
	
	@Column(name = "producer")
	private String producer;
	
	@Column(name = "raiting")
	private double raiting;
	
	@Column
	private String region;
	
	@Column(name = "profit")
	private int profit;
	
	
	public Film() {
		
	}


	public Film(int id, String name, String sDescription, String date, String producer, double raiting, String region,
			int profit,String image) {
		this.id = id;
		this.name = name;
		this.sDescription = sDescription;
		this.date = date;
		this.producer = producer;
		this.raiting = raiting;
		this.region = region;
		this.profit = profit;
		this.image = image;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getsDescription() {
		return sDescription;
	}


	public void setsDescription(String sDescription) {
		this.sDescription = sDescription;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getProducer() {
		return producer;
	}


	public void setProducer(String producer) {
		this.producer = producer;
	}


	public double getRaiting() {
		return raiting;
	}


	public void setRaiting(double raiting) {
		this.raiting = raiting;
	}


	public String getRegion() {
		return region;
	}


	public void setRegion(String region) {
		this.region = region;
	}


	public int getProfit() {
		return profit;
	}


	public void setProfit(int profit) {
		this.profit = profit;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	@Override
	public String toString() {
		return "Film [id=" + id + ", name=" + name + ", image=" + image + ", sDescription=" + sDescription + ", date="
				+ date + ", producer=" + producer + ", raiting=" + raiting + ", region=" + region + ", profit=" + profit
				+ "]";
	}	
}
