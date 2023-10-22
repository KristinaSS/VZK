import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    // Add more properties as needed
  };

  submitForm() {
    // Add logic to handle form submission (e.g., send data to a server)
    console.log('Form submitted:', this.formData);
  }
}
