import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
}

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  menuOpen = false;
  activeSection = 'home';

  skills: Skill[] = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 82 },
    { name: 'Angular', level: 78 },
    { name: 'PHP', level: 75 },
    { name: 'SQL / PostgreSQL', level: 78 },
    { name: 'C++', level: 72 },
    { name: 'C# / .NET', level: 70 },
    { name: 'Git & GitHub', level: 76 }
  ];

  projects: Project[] = [
    {
      title: 'LogiTrack Delivery Management System',
      category: 'Full-Stack Web Application',
      description:
        'A delivery management system for managing customers, drivers, vehicles, deliveries, payments and delivery tracking.',
      technologies: [
        'Angular',
        '.NET',
        'C#',
        'PostgreSQL'
      ],
      github: 'https://github.com/Sewmieman'
    },
    {
      title: 'Kebele Management System',
      category: 'Graduation Project',
      description:
        'A system designed to organize and manage kebele-related information and administrative activities.',
      technologies: [
        'PHP',
        'JavaScript',
        'SQL',
        'HTML',
        'CSS'
      ],
      github: 'https://github.com/Sewmieman'
    },
    {
      title: 'Training Management API',
      category: 'Backend API and frontend application',
      description:
        'A .NET API project for managing students, courses and enrollment operations.',
      technologies: [
        'C#',
        '.NET',
        'REST API',
        'SQL'
      ],
      github: 'https://github.com/Sewmieman'
    }
  ];

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  scrollTo(section: string): void {
    this.menuOpen = false;

    document
      .getElementById(section)
      ?.scrollIntoView({
        behavior: 'smooth'
      });
  }

  downloadCV(): void {
    window.open(
      'cv/sewmehon-melak-emiru-cv.pdf',
      '_blank'
    );
  }

  @HostListener('window:scroll')
  onScroll(): void {

    const position = window.scrollY + 200;

    for (const item of [...this.navItems].reverse()) {

      const element =
        document.getElementById(item.id);

      if (
        element &&
        element.offsetTop <= position
      ) {
        this.activeSection = item.id;
        break;
      }
    }
  }
}