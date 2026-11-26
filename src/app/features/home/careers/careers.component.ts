import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../../directives/reveal.directive';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

interface Job {
  title: string;
  location: string;
  department: string;
  type: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective, PageHeaderComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent {
  @ViewChild('openings') openings!: ElementRef<HTMLElement>;

  joinUs =
    'At BrainsBit, we foster and inspire innovative ideas to support growth and value addition. We are passionate about the work we do. Following a transparent system and keeping the communication channels open, we commute ideas and suggestions within the team. We invest in our people and offer them numerous learning and development opportunities. Join us to be a part of a visionary team.';

  jobs: Job[] = [
    {
      title: 'Software Engineer',
      location: 'Dhaka',
      department: 'Engineering',
      type: 'Permanent - Full Time',
    },
    {
      title: 'Operations Manager (Business Development)',
      location: 'Dhaka',
      department: 'Sales',
      type: 'Permanent - Full Time',
    },
    {
      title: 'Project Manager',
      location: 'Dhaka',
      department: 'Engineering',
      type: 'Permanent - Full Time',
    },
  ];

  locations = ['Dhaka'];
  departments = ['Accounting', 'Engineering', 'Sales'];

  // Filters
  query = '';
  location = '';
  department = '';

  get filteredJobs(): Job[] {
    const q = this.query.trim().toLowerCase();
    return this.jobs.filter(
      (j) =>
        (!q || j.title.toLowerCase().includes(q)) &&
        (!this.location || j.location === this.location) &&
        (!this.department || j.department === this.department),
    );
  }

  scrollToOpenings() {
    this.openings.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
