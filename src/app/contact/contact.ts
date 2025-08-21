import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  standalone: true,
  template: `
    <h2>Contact Me</h2>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  `,
  styleUrls: ['./contact.css'], 
})
export class Contact {

}
