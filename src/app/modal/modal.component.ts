import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DragDropModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
  inputs: string[] = ['Input 1'];

  addInput() {
    if (this.inputs.length < 10) {
      this.inputs.push(`Input ${this.inputs.length + 1}`);
    }
  }

  removeInput(index: number) {
    this.inputs.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.inputs, event.previousIndex, event.currentIndex);
  }
}
