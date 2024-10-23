import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Education {
  year: string;
  title: string;
  description: string;
}

interface Experience {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  educations = [
    { 
      year: '2018 - 2022', 
      title: 'Licenciatura en Ciencias de la Computación', 
      description: 'Universidad Tecnológica de Innovación. Especialización en IA y Aprendizaje Automático. Proyecto: Algoritmo de análisis de sentimientos en redes sociales. Graduado con honores. GPA: 3.9/4.0.'
    },
    {
      year: '2022 - 2023',
      title: 'Maestría en Ciberseguridad',
      description: 'Instituto Superior de Tecnología Avanzada. Enfoque en seguridad de redes y criptografía. Tesis: Sistema de detección de intrusos para IoT. Beca de excelencia académica.'
    },
    {
      year: '2023',
      title: 'Certificación en Desarrollo Cloud',
      description: 'Academia Cloud Global. Especialización en arquitecturas serverless y contenedores. Proyecto: Aplicación de microservicios en AWS con Kubernetes. Premio a la innovación.'
    }
  ];

  experiences = [
    {
      year: '2022 - Presente',
      title: 'Desarrollador Full Stack Senior',
      description: 'TechSolutions Inc. Desarrollo de apps web con Angular, Node.js y MongoDB. Implementación de CI/CD. Mejora del 40% en rendimiento. Mentor de desarrolladores junior.'
    },
    {
      year: '2020 - 2022',
      title: 'Ingeniero de Machine Learning',
      description: 'DataInnovate Corp. Modelos de ML para predicción de comportamiento. Pipelines de datos con Apache Spark. Publicación sobre redes neuronales recurrentes.'
    },
    {
      year: '2019 - 2020',
      title: 'Desarrollador de Software Junior',
      description: 'StartupTech. Desarrollo de app móvil de fitness con React Native. Integraciones con APIs. Mejora del proceso de QA. Participación en hackathons internos.'
    }
  ];

}
