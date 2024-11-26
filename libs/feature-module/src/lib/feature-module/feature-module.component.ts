import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-module.component.html',
  styleUrl: './feature-module.component.css',
})
export class FeatureModuleComponent {}
