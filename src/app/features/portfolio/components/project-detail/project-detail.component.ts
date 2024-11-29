import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();

  currentImageIndex = 0;

  nextImage() {
    if (this.project.images.length > this.currentImageIndex + 1) {
      this.currentImageIndex++;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  closeDetail() {
    this.close.emit();
  }
} 