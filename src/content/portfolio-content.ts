export type LocaleKey = 'en' | 'de';

type ProfileEntry = {
  period: string;
  title: string;
  school?: string;
  company?: string;
  details?: string;
  summary?: string;
  bullets: string[];
};

type QuickFact = {
  value: string;
  label: string;
};

type PortfolioProfile = {
  name: string;
  location: string;
  email: string;
  phone: string;
  photo: string;
  summary: string;
  motivation: string;
  languages: string[];
  skills: {
    programming: string[];
    machineLearning: string[];
    strengths: string[];
  };
  education: Array<{
    period: string;
    title: string;
    school: string;
    details: string;
  }>;
  projects: Array<{
    period: string;
    title: string;
    summary: string;
    bullets: string[];
  }>;
  experience: Array<{
    period: string;
    title: string;
    company: string;
    bullets: string[];
  }>;
};

type PortfolioCopy = {
  title: string;
  description: string;
  nav: {
    home: string;
    education: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    introPrefix: string;
    lead: string;
    motivationPrefix: string;
    locationSuffix: string;
    languageBadgeLabel: string;
    languageBadgeHref: string;
    actions: {
      contact: string;
      primaryDownload: string;
      secondaryDownload: string;
    };
    alt: string;
  };
  quickFacts: QuickFact[];
  overview: {
    educationLabel: string;
    focusLabel: string;
    locationLabel: string;
    availabilityLabel: string;
    education: string;
    focus: string;
    location: string;
    availability: string;
    languages: string;
  };
  sections: {
    education: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  cardTags: {
    education: string;
    project: string;
    experience: string;
  };
  skills: {
    programming: string;
    machineLearning: string;
    strengths: string;
  };
  contact: {
    heading: string;
    body: string;
    labels: {
      email: string;
      phone: string;
      location: string;
    };
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      invalidJson: string;
      invalidName: string;
      invalidEmail: string;
      invalidMessage: string;
      genericError: string;
    };
  };
  footer: string;
};

type LocaleContent = {
  profile: PortfolioProfile;
  copy: PortfolioCopy;
};

const sharedSkills = {
  programming: ['Python', 'R', 'SQL', 'Git', 'Jupyter', 'Linux'],
  machineLearning: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn'],
  strengths: [
    'Machine Learning & Artificial Intelligence',
    'Deep Learning',
    'Data Analytics & Visualization',
    'Optimization & Performance Engineering',
    'Critical Thinking & Problem Solving'
  ]
};

export const portfolioContent: Record<LocaleKey, LocaleContent> = {
  en: {
    profile: {
      name: 'Nitin Kumar',
      location: 'Nuremberg, Germany',
      email: 'nitinkumar23092000@gmail.com',
      phone: '+49 17662584545',
      photo: '/images/profile-photo.jpg',
      summary:
        'Data Science master\'s student at FAU Erlangen-Nurnberg focused on machine learning, AI, and optimization, with project experience in deep learning, inference performance, and practical problem solving.',
      motivation:
        'I am looking for thesis and entry-level opportunities where I can contribute to applied AI, data-driven decision-making, and impactful product work.',
      languages: ['English (C1)', 'German (B1)'],
      skills: sharedSkills,
      education: [
        {
          period: 'Sep 2023 - Present',
          title: 'M.Sc. Data Science',
          school: 'Friedrich-Alexander-Universitat Erlangen-Nurnberg',
          details:
            'Relevant coursework: Artificial Intelligence, Machine Learning, Deep Learning, Discrete Optimization, Business Intelligence, Python Programming, Mathematics of Learning.'
        },
        {
          period: 'Apr 2022 - Sep 2023',
          title: 'M.Sc. Data Science',
          school: 'Technische Universitat Dortmund',
          details:
            'Relevant coursework: Advanced Statistics, Data Visualization, Database Management, Python Programming, R Programming, Big Data Analytics.'
        },
        {
          period: 'Jul 2018 - Jul 2021',
          title: 'B.Sc. Mathematical Sciences',
          school: 'University of Delhi, New Delhi',
          details:
            'Relevant coursework: Statistical Methods, Database Management, Python Programming, Linear Algebra, Calculus.'
        }
      ],
      projects: [
        {
          period: 'Mar 2026 - Present',
          title: 'AI Systems Project',
          summary:
            'Designed and evaluated corpus-analysis pipelines to extract structural patterns for intelligent system behavior.',
          bullets: [
            'Developed meta-artifacts such as domain-specific languages, algorithmic frameworks, and system components for scalable AI workflows.',
            'Built and validated custom datasets with domain experts to keep the work grounded in quality data and real-world relevance.',
            'Focused on system architecture, algorithmic benchmarking, and applied AI with production-readiness in mind.'
          ]
        },
        {
          period: 'Oct 2025 - Apr 2026',
          title: 'Hardware Optimization - CPU & GPU Inference',
          summary:
            'Optimized ML inference pipelines on MNIST and CIFAR-10 to improve throughput and latency across CPU and GPU architectures.',
          bullets: [
            'Benchmarked batch normalization, mixed-precision training, and shared-memory tiling to identify the best configurations.',
            'Analyzed runtime behavior, hardware utilization, and energy efficiency to support scalable deployment.',
            'Built experience in performance engineering that maps well to embedded and edge-AI scenarios.'
          ]
        }
      ],
      experience: [
        {
          period: 'Jul 2024 - Present',
          title: 'Working Student - Sales',
          company: 'Der Beck GmbH, Nuremberg',
          bullets: [
            'Customer advising, sales support, and daily store operations.',
            'Observed customer behavior, sales dynamics, and demand cycles.',
            'Monitored returns and inventory movements to identify patterns for operational decisions.',
            'Built a practical foundation for forecasting and waste-reduction thinking.'
          ]
        }
      ]
    },
    copy: {
      title: 'Nitin Kumar | Data Science & AI Portfolio',
      description:
        'A responsive personal website for Nitin Kumar showcasing data science, machine learning, projects, education, and contact details.',
      nav: {
        home: 'Home',
        education: 'Education',
        projects: 'Projects',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact'
      },
      hero: {
        introPrefix: "Hi, I'm",
        lead:
          'Data Science master\'s student at FAU Erlangen-Nurnberg focused on machine learning, AI, and optimization, with project experience in deep learning, inference performance, and practical problem solving.',
        motivationPrefix:
          'I am looking for thesis and entry-level opportunities where I can contribute to applied AI, data-driven decision-making, and impactful product work.',
        locationSuffix: 'Based in Nuremberg, Germany and comfortable working in English and German.',
        languageBadgeLabel: 'DE',
        languageBadgeHref: '/de',
        actions: {
          contact: 'Contact',
          primaryDownload: 'CV',
          secondaryDownload: 'CV (DE)'
        },
        alt: 'Portrait of Nitin Kumar'
      },
      quickFacts: [
        { value: 'Machine Learning', label: 'Core focus' },
        { value: 'Python / PyTorch', label: 'Preferred stack' },
        { value: 'Nuremberg, DE', label: 'Based in' },
        { value: 'Master thesis ready', label: 'Availability' }
      ],
      overview: {
        educationLabel: 'Education',
        focusLabel: 'Focus',
        locationLabel: 'Location',
        availabilityLabel: 'Availability',
        education: 'FAU Erlangen-Nürnberg M.Sc. Data Science',
        focus: 'Applied AI, optimization, and benchmarking',
        location: 'Nuremberg, Germany',
        availability: 'Thesis and entry-level roles',
        languages: 'Languages'
      },
      sections: {
        education: 'Education',
        projects: 'Projects',
        experience: 'Work experience',
        skills: 'Skills',
        contact: 'Contact'
      },
      cardTags: {
        education: 'Education',
        project: 'Project',
        experience: 'Work experience'
      },
      skills: {
        programming: 'Programming & tools',
        machineLearning: 'Machine learning stack',
        strengths: 'Strengths'
      },
      contact: {
        heading: "Let's talk",
        body:
          'I am especially interested in thesis projects, applied AI, and entry-level roles where I can help turn data into practical results.',
        labels: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location'
        },
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'you@example.com',
          messagePlaceholder: 'Tell me about the role, thesis, or project you have in mind.',
          submit: 'Send message',
          sending: 'Sending...',
          success: 'Your email app should open with the message prefilled.',
          invalidJson: 'Something went wrong.',
          invalidName: 'Please share your name.',
          invalidEmail: 'Please enter a valid email address.',
          invalidMessage: 'Please add a short message with a bit more detail.',
          genericError: 'Could not open your email app.'
        }
      },
      footer: 'Built from the CV documents in this workspace.'
    }
  },
  de: {
    profile: {
      name: 'Nitin Kumar',
      location: 'Nürnberg, Deutschland',
      email: 'nitinkumar23092000@gmail.com',
      phone: '+49 17662584545',
      photo: '/images/profile-photo.jpg',
      summary:
        'Masterstudent der Data Science an der FAU Erlangen-Nürnberg mit Schwerpunkt Machine Learning, KI und Optimierung sowie Projekterfahrung in Deep Learning, Inferenz-Performance und praxisnaher Problemlösung.',
      motivation:
        'Ich suche Abschlussarbeiten und Einstiegspositionen, in denen ich zu angewandter KI, datengetriebenen Entscheidungen und wirkungsvoller Produktarbeit beitragen kann.',
      languages: ['Englisch (C1)', 'Deutsch (B1)'],
      skills: sharedSkills,
      education: [
        {
          period: 'Sep 2023 - heute',
          title: 'M.Sc. Data Science',
          school: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
          details:
            'Relevante Inhalte: Künstliche Intelligenz, Machine Learning, Deep Learning, Diskrete Optimierung, Business Intelligence, Python-Programmierung, Mathematik des Lernens.'
        },
        {
          period: 'Apr 2022 - Sep 2023',
          title: 'M.Sc. Data Science',
          school: 'Technische Universität Dortmund',
          details:
            'Relevante Inhalte: Fortgeschrittene Statistik, Datenvisualisierung, Datenbankmanagement, Python-Programmierung, R-Programmierung, Big-Data-Analytics.'
        },
        {
          period: 'Jul 2018 - Jul 2021',
          title: 'B.Sc. Mathematical Sciences',
          school: 'University of Delhi, New Delhi',
          details:
            'Relevante Inhalte: Statistische Methoden, Datenbankmanagement, Python-Programmierung, Lineare Algebra, Analysis.'
        }
      ],
      projects: [
        {
          period: 'Mar 2026 - heute',
          title: 'AI Systems Project',
          summary:
            'Entwicklung und Bewertung von Korpus-Analyse-Pipelines, um strukturelle Muster für intelligentes Systemverhalten zu extrahieren.',
          bullets: [
            'Entwickelte Meta-Artefakte wie domänenspezifische Sprachen, algorithmische Frameworks und Systemkomponenten für skalierbare KI-Workflows.',
            'Aufbau und Validierung eigener Datensätze gemeinsam mit Fachexperten, um die Arbeit eng an qualitativ hochwertigen und praxisnahen Daten auszurichten.',
            'Fokus auf Systemarchitektur, algorithmisches Benchmarking und angewandte KI mit Blick auf Produktionsreife.'
          ]
        },
        {
          period: 'Okt 2025 - Apr 2026',
          title: 'Hardware Optimization - CPU & GPU Inference',
          summary:
            'Optimierung von ML-Inferenzpipelines auf MNIST und CIFAR-10, um Durchsatz und Latenz auf CPU- und GPU-Architekturen zu verbessern.',
          bullets: [
            'Benchmarking von Batch Normalization, Mixed-Precision-Training und Shared-Memory-Tiling zur Identifikation der besten Konfigurationen.',
            'Analyse von Laufzeitverhalten, Hardwareauslastung und Energieeffizienz zur Unterstützung skalierbarer Deployments.',
            'Aufbau von Erfahrung in Performance Engineering mit gutem Bezug zu Embedded- und Edge-AI-Szenarien.'
          ]
        }
      ],
      experience: [
        {
          period: 'Jul 2024 - heute',
          title: 'Werkstudent - Verkauf',
          company: 'Der Beck GmbH, Nürnberg',
          bullets: [
            'Kundenberatung, Verkaufsunterstützung und tägliche Abläufe im Store.',
            'Beobachtung von Kundenverhalten, Verkaufsdynamiken und Nachfragezyklen.',
            'Überwachung von Retouren- und Warenbewegungen zur Identifikation operativer Muster.',
            'Aufbau einer praxisnahen Grundlage für Prognosen und Abfallreduktion.'
          ]
        }
      ]
    },
    copy: {
      title: 'Nitin Kumar | Data Science- & KI-Portfolio',
      description:
        'Eine responsive persönliche Website für Nitin Kumar mit Fokus auf Data Science, Machine Learning, Projekte, Ausbildung und Kontaktdaten.',
      nav: {
        home: 'Start',
        education: 'Ausbildung',
        projects: 'Projekte',
        experience: 'Berufserfahrung',
        skills: 'Skills',
        contact: 'Kontakt'
      },
      hero: {
        introPrefix: 'Hallo, ich bin',
        lead:
          'Masterstudent der Data Science an der FAU Erlangen-Nürnberg mit Schwerpunkt Machine Learning, KI und Optimierung sowie Projekterfahrung in Deep Learning, Inferenz-Performance und praxisnaher Problemlösung.',
        motivationPrefix:
          'Ich suche Abschlussarbeiten und Einstiegspositionen, in denen ich zu angewandter KI, datengetriebenen Entscheidungen und wirkungsvoller Produktarbeit beitragen kann.',
        locationSuffix: 'Ansässig in Nürnberg und sicher im Arbeiten auf Deutsch und Englisch.',
        languageBadgeLabel: 'EN',
        languageBadgeHref: '/',
        actions: {
          contact: 'Kontakt',
          primaryDownload: 'Lebenslauf',
          secondaryDownload: 'Lebenslauf (EN)'
        },
        alt: 'Porträt von Nitin Kumar'
      },
      quickFacts: [
        { value: 'Machine Learning', label: 'Kernfokus' },
        { value: 'Python / PyTorch', label: 'Bevorzugter Stack' },
        { value: 'Nürnberg, DE', label: 'Standort' },
        { value: 'Masterarbeit bereit', label: 'Verfügbarkeit' }
      ],
      overview: {
        educationLabel: 'Ausbildung',
        focusLabel: 'Fokus',
        locationLabel: 'Ort',
        availabilityLabel: 'Verfügbarkeit',
        education: 'FAU Erlangen-Nürnberg M.Sc. Data Science',
        focus: 'Angewandte KI, Optimierung und Benchmarking',
        location: 'Nürnberg, Deutschland',
        availability: 'Abschlussarbeiten und Einstiegsrollen',
        languages: 'Sprachen'
      },
      sections: {
        education: 'Ausbildung',
        projects: 'Projekte',
        experience: 'Berufserfahrung',
        skills: 'Skills',
        contact: 'Kontakt'
      },
      cardTags: {
        education: 'Ausbildung',
        project: 'Projekt',
        experience: 'Berufserfahrung'
      },
      skills: {
        programming: 'Programmierung & Tools',
        machineLearning: 'Machine-Learning-Stack',
        strengths: 'Stärken'
      },
      contact: {
        heading: 'Lassen Sie uns sprechen',
        body:
          'Ich interessiere mich besonders für Abschlussarbeiten, angewandte KI und Einstiegsrollen, in denen ich Daten in praktische Ergebnisse übersetzen kann.',
        labels: {
          email: 'E-Mail',
          phone: 'Telefon',
          location: 'Ort'
        },
        form: {
          name: 'Name',
          email: 'E-Mail',
          message: 'Nachricht',
          namePlaceholder: 'Ihr Name',
          emailPlaceholder: 'sie@example.com',
          messagePlaceholder: 'Erzählen Sie mir von der Rolle, Thesis oder dem Projekt, das Sie planen.',
          submit: 'Nachricht senden',
          sending: 'Wird gesendet...',
          success: 'Ihr E-Mail-Programm sollte sich mit der vorbereiteten Nachricht öffnen.',
          invalidJson: 'Etwas ist schiefgelaufen.',
          invalidName: 'Bitte geben Sie Ihren Namen an.',
          invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          invalidMessage: 'Bitte schreiben Sie eine kurze Nachricht mit etwas mehr Details.',
          genericError: 'Das E-Mail-Programm konnte nicht geöffnet werden.'
        }
      },
      footer: 'Erstellt auf Basis der CV-Dokumente in diesem Workspace.'
    }
  }
};
