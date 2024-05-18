import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingService } from 'src/app/services/Booking.Services'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
  public users: any = [];
  public fullname: string = "";
  selected!: Date | null;
  startDate = new Date(1990, 0, 1);

  dateClassPredicate = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? 'disabled-date' : '';
  };

  constructor(private auth: AuthService, private bookingService: BookingService) {}

  ngOnInit(): void {}

  booking: any = {};

  onSubmit() {
    this.bookingService.addBooking(this.booking).subscribe(
      response => {
        console.log('Booking added successfully:', response);
      },
      error => {
        console.error('Error adding booking:', error);
      }
    );
  }

  cancelBooking() {
    if (this.selected) {
      // Format the date to YYYY-MM-DD
      const date = this.formatDate(this.selected);
      console.log('Selected date for cancellation:', date);  // Add logging here
      this.bookingService.cancelBooking(date).subscribe(
        response => {
          console.log('Booking cancelled successfully:', response);
        },
        error => {
          console.error('Error cancelling booking:', error);
        }
      );
    } else {
      console.error('No date selected for cancellation.');
    }
  }
  
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
    
}

//save changes