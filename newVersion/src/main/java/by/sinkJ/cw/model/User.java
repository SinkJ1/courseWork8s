package by.sinkJ.cw.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
@Table(name = "t_user")
public class User implements Serializable {

	/**
	 * 
	 */

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "user_name")
	private String name;
	
	private String eMail;
	
	private String password;

	public User() {
		
	}
	
	public User(int id, String name, String eMail, String password) {
		this.id = id;
		this.name = name;
		this.eMail = eMail;
		this.password = password;
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

	public String geteMail() {
		return eMail;
	}

	public void seteMail(String eMail) {
		this.eMail = eMail;
	}

	@Column(name = "password")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", eMail=" + eMail + ", password=" + password + "]";
	}
	
	
	
}
