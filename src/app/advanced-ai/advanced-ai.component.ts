import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-advanced-ai',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './advanced-ai.component.html',
  styleUrl: './advanced-ai.component.css',
 
})
export class AdvancedAiComponent {
 

 // Initially, no section is active

  syllabus = [
    {
      title: 'Introduction to Advanced AI and Machine Learning',
      description: 'This section provides an in-depth understanding of AI foundations, including machine learning principles, neural networks, and advanced algorithms used in AI-driven systems.'
    },
    {
      title: 'Deep Learning and Neural Networks',
      description: 'Covers various types of neural networks, including convolutional and recurrent neural networks, along with practical examples.'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Explores techniques for teaching machines to understand and generate human language.'
    },
    {
      title: 'Reinforcement Learning',
      description: 'Teaches the fundamentals of reinforcement learning algorithms, like Q-learning, and their applications in AI.'
    },
    {
      title: 'Generative Adversarial Networks (GANs)',
      description: 'Provides an understanding of GANs, a class of machine learning frameworks, and their real-world applications in AI.'
    },
    {
      title: 'AI Ethics and Fairness',
      description: 'Discusses ethical implications of AI, including fairness, bias, and the moral responsibility of AI developers.'
    },
    {
      title: 'Capstone Project: Building an AI Application',
      description: 'A hands-on project where students build a functional AI application from scratch.'
    }
  ];
  activeSection: number | null = null;
  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index;
  }
  activeVideo: number | null = null;
  activeClassDetails: number | null = null; 
  videos = [
    {
      title: 'Introduction to Advanced AI',
      description: 'An overview of advanced AI concepts.',
      subClasses: ['Basics of AI', 'Advanced Topics', 'Applications'],
      link: '/videos/intro-to-ai',
      
    },
    {
      title: 'Deep Learning Fundamentals',
      description: 'Understanding the basics of deep learning.',
      link: '/videos/deep-learning',
      subClasses: [
        'Neural Networks 101',
        'Convolutional Neural Networks'
      ]
    },
    {
      title: 'Natural Language Processing Techniques',
      description: 'Exploring NLP and its applications.',
      link: '/videos/nlp',
      subClasses: [
        'Text Processing Techniques',
        'Sentiment Analysis'
      ]
    },
    {
      title: 'Reinforcement Learning Concepts',
      description: 'Learning about RL strategies and techniques.',
      link: '/videos/reinforcement-learning',
      subClasses: [
        'Markov Decision Processes',
        'Q-Learning Basics'
      ]
    },
    {
      title: 'Introduction to GANs',
      description: 'A guide to Generative Adversarial Networks.',
      link: '/videos/gans',
      subClasses: [
        'Basic GAN Architecture',
        'Applications of GANs'
      ]
    }
  ];
  
  toggleVideo(index: number) {
    this.activeVideo = this.activeVideo === index ? null : index; // Toggle video
    this.activeClassDetails = null; // Reset class details when toggling videos
  }

 


  uploadClass(title: string): void {
    console.log(`Uploading class for: ${title}`);
    // Implement your upload logic here
  }

  
  

  showClassDetails(index: number) {
    this.activeClassDetails = this.activeClassDetails === index ? null : index; // Toggle class details
  }
  
}
