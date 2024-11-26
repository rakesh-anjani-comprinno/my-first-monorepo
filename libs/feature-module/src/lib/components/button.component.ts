import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '@my-first-monorepo/angular-materail-module';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {}
