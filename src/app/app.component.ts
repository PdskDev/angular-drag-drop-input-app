import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
