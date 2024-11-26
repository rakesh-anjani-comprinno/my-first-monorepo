import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-component.component.html',
  styleUrl: './ui-component.component.scss',
})
export class UiComponentComponent {}
