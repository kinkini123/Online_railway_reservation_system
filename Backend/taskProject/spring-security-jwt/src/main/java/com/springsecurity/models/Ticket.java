package com.springsecurity.models;

import java.util.List;

public class Ticket {
	

	private String id;

	private String coach_no;

	private int seat_no;
	private String emailId;
	
	
	public Ticket() {
		super();
	}

	public Ticket(String id, String coach_no, int seat_no) {
		super();
		this.id = id;
		this.coach_no = coach_no;
		this.seat_no = seat_no;
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCoach_no() {
		return coach_no;
	}

	public void setCoach_no(String coach_no) {
		this.coach_no = coach_no;
	}

	public int getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(int seat_no) {
		this.seat_no = seat_no;
	}


	

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", coach_no=" + coach_no + ", seat_no=" + seat_no + ", emailId=" + emailId + "]";
	}

	

	
}