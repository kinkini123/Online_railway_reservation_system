package com.bookinginfoservice.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bookinginfoservice.model.Booking;
import com.bookinginfoservice.model.Train;
import com.bookinginfoservice.service.BookingService;

@RestController
@RequestMapping("/bookingdetails")
@CrossOrigin()
public class BookingController {

	@Autowired
	private BookingService bservice;
	@Autowired
	private RestTemplate restt;

	@PostMapping("/{i}")
	public Booking insertBooking(@RequestBody Booking book) {

		String name = book.getTrain_name();
		Train t = restt.getForObject("http://localhost:8031/traindetails/s/{name}", Train.class, name);
		book.setTrain_no(t.getTrain_no());
		book.setDestination(t.getTo_destination());
		book.setStart_from(t.getStart_from());
		
		System.out.println("Data saved !!");
		book.setId(UUID.randomUUID().toString());
		Booking b = bservice.save(book);

		System.out.println(b);
		return b;

	}

	@GetMapping("/ga/{id}")
	public Booking getAllBookingDetailById(@PathVariable("id") String id) {
		Optional<Booking> op = bservice.findById(id);
		Booking b = op.get();
		if (op.isPresent()) {

			return b;
		} else {
			return null;
		}
	}

	@GetMapping("/getAllBooking/{emailId}")
	public Booking getAllBookingByEmailId(@PathVariable("emailId") String emailId) {
		Booking op = bservice.findByemailId(emailId);

		return op;

	}

	@GetMapping("/g")
	public List<Booking> getAllBookingDetails() {
		List<Booking> list = new ArrayList();
		bservice.findAllDetails().forEach(list::add);
		return list;
	}

//	@PutMapping("/u/{id}")
//	public Booking UpdateBookingById(@PathVariable("id") String train_no, @RequestBody Booking book) {
//		Optional<Booking> op = bservice.findById(id);
//		if (op.isPresent()) {
//			Booking b = op.get();
//			t.setPrice(book.getPrice());
//			
//
//			tservice.save(t);
//			return t;
//		} else {
//			return null;
//		}
//	}
//	@PutMapping("/u/{id}")
//	public Booking UpdateBookingById(@PathVariable("id") String id, @RequestBody Booking book) {
//		Optional<Booking> op = bservice.findById(id);
//		if (op.isPresent()) {
//			Booking b = op.get();
//			b.setAge(book.getAge());
//			b.setDestination(book.getDestination());
//			b.setFname(book.getFname());
//			b.setLname(book.getLname());
//			b.setStart_from(book.getStart_from());
//			b.setTrain_name(book.getTrain_no());
//			b.setTrain_no(book.getTrain_no());
//			
//
//			bservice.save(b);
//			return b;
//		} else {
//			return null;
//		}
//	}

	@PutMapping("/updateBooking")
	public Booking updateBooking(@RequestBody Booking b) {
		return bservice.save(b);
	}

	@DeleteMapping("/d/{id}")
	public ResponseEntity<String> deleteBookingDetailsById(@PathVariable("id") String id) {
		Optional<Booking> op = bservice.findById(id);
		if (op.isPresent()) {
			Booking b = op.get();

			bservice.deleteById(id);
			return new ResponseEntity<String>("Deleted successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Booking_id not found", HttpStatus.NOT_FOUND);
		}

	}

}