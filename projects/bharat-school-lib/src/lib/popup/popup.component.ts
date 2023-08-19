import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() popupMessage = '';
  @Output() popupSubmitted = new EventEmitter<string | null>();
  inputValue = '';

  closePopup(): void {
    this.inputValue = '';
    this.popupSubmitted.emit(null); // Emit null to indicate the popup was closed without submitting
  }

  submitInput(): void {
    this.popupSubmitted.emit(this.inputValue);
    this.inputValue = ''; // Reset the input field after submission
  }
}
