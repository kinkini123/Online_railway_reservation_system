package com.securityimpl.models;

public class Ticket {

	private int id;

	private String coach_no;

	private int seat_no;

	public Ticket() {
		super();
	}

	public Ticket(int id, String coach_no, int seat_no) {
		super();
		this.id = id;
		this.coach_no = coach_no;
		this.seat_no = seat_no;

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	@Override
	public String toString() {
		return "Ticket [id=" + id + ", coach_no=" + coach_no + ", seat_no=" + seat_no + "]";
	}

}