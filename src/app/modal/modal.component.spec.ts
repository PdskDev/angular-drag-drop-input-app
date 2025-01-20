import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropModule, FormsModule, ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with one input', () => {
    expect(component.inputs.length).toBe(1);
    expect(component.inputs[0]).toBe('Input 1');
  });

  it('should add input when addInput is called', () => {
    component.addInput();
    expect(component.inputs.length).toBe(2);
    expect(component.inputs[1]).toBe('Input 2');
  });

  it('should not add input when limit is reached', () => {
    for (let i = 1; i < 10; i++) {
      component.addInput();
    }
    expect(component.inputs.length).toBe(10);
    component.addInput();
    expect(component.inputs.length).toBe(10);
  });

  it('should remove input when removeInput is called', () => {
    component.addInput();
    component.removeInput(0);
    expect(component.inputs.length).toBe(1);
    expect(component.inputs[0]).toBe('Input 2');
  });

  it('should emit close event when close is called', () => {
    spyOn(component.closeModal, 'emit');
    component.close();
    expect(component.closeModal.emit).toHaveBeenCalled();
  });

  it('should reorder inputs on drop', () => {
    component.inputs = ['Input 1', 'Input 2', 'Input 3'];
    const event = {
      previousIndex: 0,
      currentIndex: 2,
    } as any;

    component.drop(event);
    expect(component.inputs).toEqual(['Input 2', 'Input 3', 'Input 1']);
  });
});
