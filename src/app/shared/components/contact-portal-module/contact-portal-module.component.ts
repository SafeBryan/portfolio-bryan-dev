import { Component, Input, computed, signal } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  type: 'email' | 'github' | 'linkedin' | 'cv' | 'location';
  description: string;
  external: boolean;
}

interface ContactSignal {
  label: string;
  value: string;
  description: string;
}

interface ContactLog {
  type: 'STATUS' | 'LINK' | 'CV' | 'PROFILE' | 'READY';
  message: string;
}

@Component({
  selector: 'app-contact-portal-module',
  standalone: true,
  templateUrl: './contact-portal-module.component.html',
})
export class ContactPortalModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  selectedChannelId = signal('email');

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Professional connection gateway',
        title: 'Contact Portal',
        subtitle:
          'A direct connection hub for opportunities, collaboration, technical profiles and CV access.',
        description:
          'This module keeps the closing experience simple and professional: clear contact channels, public profiles and a direct way to download or review my CV.',
        statusLabel: 'Connection status',
        statusValue: 'Available for opportunities',
        statusDescription:
          'Open to internships, junior full stack roles, local opportunities, hybrid work and professional growth.',
        channelsLabel: 'Connection channels',
        selectedLabel: 'Selected channel',
        signalsLabel: 'Professional signals',
        consoleLabel: 'Connection runtime',
        responseLabel: 'Portal response',
        actionLabel: 'Open channel',
        channels: [
          {
            id: 'email',
            label: 'Email',
            value: 'Professional email',
            href: 'bryanpazmi1977@gmail.com',
            type: 'email',
            description:
              'Best channel for formal opportunities, interviews, project conversations or professional contact.',
            external: false,
          },
          {
            id: 'github',
            label: 'GitHub',
            value: 'SafeBryan',
            href: 'https://github.com/SafeBryan',
            type: 'github',
            description:
              'Public repositories, technical experiments, portfolio source code and development activity.',
            external: true,
          },
          {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'Bryan Pazmiño',
            href: 'https://www.linkedin.com/in/bryan-pazmiño-4a7a89338',
            type: 'linkedin',
            description: 'Professional profile, experience, education, skills and career updates.',
            external: true,
          },
          {
            id: 'cv',
            label: 'CV',
            value: 'Download CV',
            href: 'assets/cv/bryan-pazmino-cv.pdf',
            type: 'cv',
            description:
              'Resume with professional profile, experience, education, projects and technical stack.',
            external: true,
          },
          {
            id: 'location',
            label: 'Location',
            value: 'Ambato, Ecuador',
            href: '#',
            type: 'location',
            description:
              'General location for local, hybrid or remote opportunities. Exact private address is not shared.',
            external: false,
          },
        ] as ContactChannel[],
        signals: [
          {
            label: 'Role',
            value: 'Junior Full Stack Developer',
            description: 'Angular, Java, Spring Boot, Oracle, APIs and business systems.',
          },
          {
            label: 'Focus',
            value: 'Enterprise Web Apps',
            description: 'Financial, educational and administrative systems.',
          },
          {
            label: 'Availability',
            value: 'Open',
            description: 'Professional opportunities, internships and growth-focused roles.',
          },
        ] as ContactSignal[],
        logs: [
          { type: 'STATUS', message: 'Professional availability checked' },
          { type: 'PROFILE', message: 'Public developer profiles attached' },
          { type: 'CV', message: 'Resume access prepared' },
          { type: 'LINK', message: 'Connection channels loaded' },
          { type: 'READY', message: 'Contact portal ready for interaction' },
        ] as ContactLog[],
        response: `{
  "portal": "contact",
  "status": "available",
  "role": "Junior Full Stack Developer",
  "location": "Ambato, Ecuador",
  "channels": ["Email", "GitHub", "LinkedIn", "CV"],
  "privateDataExposed": false
}`,
      };
    }

    return {
      eyebrow: 'Portal de conexión profesional',
      title: 'Contact Portal',
      subtitle:
        'Un punto de conexión directo para oportunidades, colaboración, perfiles técnicos y acceso al CV.',
      description:
        'Este módulo mantiene el cierre de la experiencia de forma clara y profesional: canales de contacto, perfiles públicos y una forma directa de descargar o revisar mi CV.',
      statusLabel: 'Estado de conexión',
      statusValue: 'Disponible para oportunidades',
      statusDescription:
        'Abierto a pasantías, roles junior full stack, oportunidades locales, trabajo híbrido y crecimiento profesional.',
      channelsLabel: 'Canales de conexión',
      selectedLabel: 'Canal seleccionado',
      signalsLabel: 'Señales profesionales',
      consoleLabel: 'Ejecución de conexión',
      responseLabel: 'Respuesta del portal',
      actionLabel: 'Abrir canal',
      channels: [
        {
          id: 'email',
          label: 'Correo',
          value: 'Correo profesional',
          href: 'bryanpazmi1977@gmail.com',
          type: 'email',
          description:
            'Mejor canal para oportunidades formales, entrevistas, conversaciones de proyecto o contacto profesional.',
          external: false,
        },
        {
          id: 'github',
          label: 'GitHub',
          value: 'SafeBryan',
          href: 'https://github.com/SafeBryan',
          type: 'github',
          description:
            'Repositorios públicos, experimentos técnicos, código fuente del portafolio y actividad de desarrollo.',
          external: true,
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          value: 'Bryan Pazmiño',
          href: 'https://www.linkedin.com/in/bryan-pazmiño-4a7a89338',
          type: 'linkedin',
          description:
            'Perfil profesional, experiencia, educación, habilidades y actualizaciones de carrera.',
          external: true,
        },
        {
          id: 'cv',
          label: 'CV',
          value: 'Descargar CV',
          href: 'assets/cv/bryan-pazmino-cv.pdf',
          type: 'cv',
          description:
            'Currículum con perfil profesional, experiencia, formación, proyectos y stack técnico.',
          external: true,
        },
        {
          id: 'location',
          label: 'Ubicación',
          value: 'Ambato, Ecuador',
          href: '#',
          type: 'location',
          description:
            'Ubicación general para oportunidades locales, híbridas o remotas. No se comparte dirección privada exacta.',
          external: false,
        },
      ] as ContactChannel[],
      signals: [
        {
          label: 'Rol',
          value: 'Junior Full Stack Developer',
          description: 'Angular, Java, Spring Boot, Oracle, APIs y sistemas empresariales.',
        },
        {
          label: 'Enfoque',
          value: 'Aplicaciones Web Empresariales',
          description: 'Sistemas financieros, educativos y administrativos.',
        },
        {
          label: 'Disponibilidad',
          value: 'Abierto',
          description: 'Oportunidades profesionales, pasantías y roles orientados a crecimiento.',
        },
      ] as ContactSignal[],
      logs: [
        { type: 'STATUS', message: 'Disponibilidad profesional verificada' },
        { type: 'PROFILE', message: 'Perfiles públicos de desarrollador adjuntados' },
        { type: 'CV', message: 'Acceso a currículum preparado' },
        { type: 'LINK', message: 'Canales de conexión cargados' },
        { type: 'READY', message: 'Portal de contacto listo para interacción' },
      ] as ContactLog[],
      response: `{
  "portal": "contact",
  "status": "available",
  "role": "Junior Full Stack Developer",
  "location": "Ambato, Ecuador",
  "channels": ["Email", "GitHub", "LinkedIn", "CV"],
  "privateDataExposed": false
}`,
    };
  });

  selectedChannel = computed(() => {
    return (
      this.content().channels.find((channel) => channel.id === this.selectedChannelId()) ??
      this.content().channels[0]
    );
  });

  selectChannel(channelId: string): void {
    this.selectedChannelId.set(channelId);
  }

  getChannelClass(type: ContactChannel['type']): string {
    const classes: Record<ContactChannel['type'], string> = {
      email: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
      github: 'border-slate-300/25 bg-slate-300/[0.08] text-slate-200',
      linkedin: 'border-blue-300/25 bg-blue-300/[0.08] text-blue-200',
      cv: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      location: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
    };

    return classes[type];
  }

  getLogClass(type: ContactLog['type']): string {
    const classes: Record<ContactLog['type'], string> = {
      STATUS: 'text-emerald-300',
      LINK: 'text-cyan-300',
      CV: 'text-amber-300',
      PROFILE: 'text-blue-300',
      READY: 'text-lime-300',
    };

    return classes[type];
  }
}
