import { Component, Input, computed } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface FrontendMetric {
  label: string;
  value: string;
  description: string;
}

interface FrontendComponentItem {
  name: string;
  type: string;
  description: string;
  status: 'ready' | 'active' | 'optimized';
}

interface FrontendPractice {
  title: string;
  description: string;
}

interface FrontendScreen {
  label: string;
  value: string;
}

interface FrontendLog {
  type: 'UI' | 'STATE' | 'API' | 'RESPONSIVE' | 'BUILD';
  message: string;
}

@Component({
  selector: 'app-frontend-lab-module',
  standalone: true,
  templateUrl: './frontend-lab-module.component.html',
})
export class FrontendLabModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'UI Component Laboratory',
        title: 'Frontend Lab',
        subtitle:
          'Clean, responsive and maintainable interfaces built with Angular, TypeScript, TailwindCSS and reactive state.',
        description:
          'My frontend work focuses on building real business interfaces: dashboards, forms, reusable components, responsive layouts, API-driven views and clear user flows.',
        dashboardLabel: 'Live UI preview',
        componentsLabel: 'Component system',
        practicesLabel: 'Frontend practices',
        stackLabel: 'Frontend stack',
        consoleLabel: 'UI runtime console',
        tableLabel: 'Enterprise table sample',
        formLabel: 'Reactive form sample',
        metrics: [
          {
            label: 'Components',
            value: 'Reusable',
            description: 'Cards, tables, shells, buttons, inputs and visual states.',
          },
          {
            label: 'State',
            value: 'Reactive',
            description: 'Signals, computed values and controlled UI updates.',
          },
          {
            label: 'Layouts',
            value: 'Responsive',
            description: 'Desktop-first polish with mobile-safe adaptations.',
          },
        ] as FrontendMetric[],
        screens: [
          { label: 'Dashboard', value: 'Financial overview' },
          { label: 'Forms', value: 'Validated workflows' },
          { label: 'Tables', value: 'Responsive records' },
          { label: 'Auth', value: 'Login and guards' },
        ] as FrontendScreen[],
        components: [
          {
            name: 'Dashboard Card',
            type: 'UI Block',
            description:
              'Shows business metrics with clear hierarchy and compact visual structure.',
            status: 'ready',
          },
          {
            name: 'Reactive Form',
            type: 'Angular Form',
            description: 'Handles validations, disabled states, loading feedback and user errors.',
            status: 'active',
          },
          {
            name: 'Responsive Table',
            type: 'Data View',
            description: 'Turns complex rows into readable mobile cards when space is limited.',
            status: 'optimized',
          },
          {
            name: 'Feature Shell',
            type: 'Layout',
            description:
              'Keeps screens consistent with headers, actions, states and content slots.',
            status: 'ready',
          },
        ] as FrontendComponentItem[],
        practices: [
          {
            title: 'Component separation',
            description:
              'Large screens are split into smaller components to keep files readable and maintainable.',
          },
          {
            title: 'Responsive first',
            description:
              'Interfaces are designed to remain usable on desktop, tablets and mobile devices.',
          },
          {
            title: 'State clarity',
            description:
              'Loading, empty, error and success states are visible instead of being hidden in the flow.',
          },
          {
            title: 'Business UI focus',
            description:
              'The priority is not decoration only, but clarity for users working with real processes.',
          },
        ] as FrontendPractice[],
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Signals',
          'Computed',
          'Reactive Forms',
          'Responsive UI',
          'Dashboards',
          'REST API Consumption',
          'Reusable Components',
        ],
        logs: [
          { type: 'UI', message: 'Rendering dashboard cards and interface blocks' },
          { type: 'STATE', message: 'Signals updated without unnecessary UI noise' },
          { type: 'API', message: 'REST payload mapped to view model' },
          { type: 'RESPONSIVE', message: 'Layout adapted for mobile viewport' },
          { type: 'BUILD', message: 'Frontend module compiled successfully' },
        ] as FrontendLog[],
      };
    }

    return {
      eyebrow: 'Laboratorio de componentes UI',
      title: 'Frontend Lab',
      subtitle:
        'Interfaces limpias, responsivas y mantenibles construidas con Angular, TypeScript, TailwindCSS y estado reactivo.',
      description:
        'Mi trabajo frontend se enfoca en construir interfaces empresariales reales: dashboards, formularios, componentes reutilizables, layouts responsivos, vistas conectadas a APIs y flujos claros para el usuario.',
      dashboardLabel: 'Vista previa UI',
      componentsLabel: 'Sistema de componentes',
      practicesLabel: 'Buenas prácticas frontend',
      stackLabel: 'Stack frontend',
      consoleLabel: 'Consola de ejecución UI',
      tableLabel: 'Ejemplo de tabla empresarial',
      formLabel: 'Ejemplo de formulario reactivo',
      metrics: [
        {
          label: 'Componentes',
          value: 'Reutilizables',
          description: 'Cards, tablas, shells, botones, inputs y estados visuales.',
        },
        {
          label: 'Estado',
          value: 'Reactivo',
          description: 'Signals, valores computados y actualizaciones controladas de interfaz.',
        },
        {
          label: 'Layouts',
          value: 'Responsivos',
          description: 'Diseños pulidos en escritorio con adaptación segura para móvil.',
        },
      ] as FrontendMetric[],
      screens: [
        { label: 'Dashboard', value: 'Resumen financiero' },
        { label: 'Formularios', value: 'Flujos validados' },
        { label: 'Tablas', value: 'Registros responsivos' },
        { label: 'Auth', value: 'Login y guards' },
      ] as FrontendScreen[],
      components: [
        {
          name: 'Dashboard Card',
          type: 'Bloque UI',
          description:
            'Muestra métricas de negocio con jerarquía clara y estructura visual compacta.',
          status: 'ready',
        },
        {
          name: 'Reactive Form',
          type: 'Formulario Angular',
          description:
            'Maneja validaciones, estados deshabilitados, carga, errores y feedback al usuario.',
          status: 'active',
        },
        {
          name: 'Responsive Table',
          type: 'Vista de datos',
          description:
            'Convierte filas complejas en cards legibles para móvil cuando el espacio es limitado.',
          status: 'optimized',
        },
        {
          name: 'Feature Shell',
          type: 'Layout',
          description:
            'Mantiene pantallas consistentes con encabezados, acciones, estados y slots de contenido.',
          status: 'ready',
        },
      ] as FrontendComponentItem[],
      practices: [
        {
          title: 'Separación por componentes',
          description:
            'Las pantallas grandes se dividen en piezas pequeñas para mantener archivos claros y mantenibles.',
        },
        {
          title: 'Responsive primero',
          description:
            'Las interfaces se diseñan para funcionar bien en escritorio, tablets y celulares.',
        },
        {
          title: 'Claridad de estado',
          description:
            'Los estados de carga, vacío, error y éxito se muestran de forma visible dentro del flujo.',
        },
        {
          title: 'UI orientada a negocio',
          description:
            'La prioridad no es solo decorar, sino dar claridad a usuarios que trabajan con procesos reales.',
        },
      ] as FrontendPractice[],
      stack: [
        'Angular',
        'TypeScript',
        'TailwindCSS',
        'Signals',
        'Computed',
        'Reactive Forms',
        'Responsive UI',
        'Dashboards',
        'Consumo de APIs REST',
        'Componentes reutilizables',
      ],
      logs: [
        { type: 'UI', message: 'Renderizando cards de dashboard y bloques de interfaz' },
        { type: 'STATE', message: 'Signals actualizados sin ruido visual innecesario' },
        { type: 'API', message: 'Payload REST mapeado hacia modelo de vista' },
        { type: 'RESPONSIVE', message: 'Layout adaptado para viewport móvil' },
        { type: 'BUILD', message: 'Módulo frontend compilado correctamente' },
      ] as FrontendLog[],
    };
  });

  getStatusClass(status: FrontendComponentItem['status']): string {
    const classes: Record<FrontendComponentItem['status'], string> = {
      ready: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-200',
      active: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
      optimized: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
    };

    return classes[status];
  }

  getLogClass(type: FrontendLog['type']): string {
    const classes: Record<FrontendLog['type'], string> = {
      UI: 'text-sky-300',
      STATE: 'text-cyan-300',
      API: 'text-emerald-300',
      RESPONSIVE: 'text-amber-300',
      BUILD: 'text-lime-300',
    };

    return classes[type];
  }
}
