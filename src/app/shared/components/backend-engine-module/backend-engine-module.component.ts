import { Component, Input, computed } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface BackendEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  description: string;
}

interface BackendLayer {
  name: string;
  description: string;
  code: string;
}

interface BackendPractice {
  title: string;
  description: string;
}

interface BackendLog {
  type: 'INFO' | 'AUTH' | 'SERVICE' | 'DB' | 'RESPONSE';
  message: string;
}

@Component({
  selector: 'app-backend-engine-module',
  standalone: true,
  templateUrl: './backend-engine-module.component.html',
})
export class BackendEngineModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Backend Runtime Environment',
        title: 'Backend Engine',
        subtitle:
          'Structured APIs, business logic, validation, authentication and database integration for enterprise web systems.',
        description:
          'My backend work focuses on building maintainable services with clear responsibilities: controllers for HTTP communication, services for business rules, repositories for persistence and DTOs for clean data transfer.',
        architectureLabel: 'Modular / Hexagonal Architecture',
        flowTitle: 'Backend execution flow',
        flowBadge: 'REST → Use Case → Domain → Ports → Adapters',
        consoleLabel: 'API runtime console',
        endpointsLabel: 'Endpoint samples',
        stackLabel: 'Backend stack',
        practicesLabel: 'Engineering practices',
        responseLabel: 'Simulated response',
        layers: [
          {
            name: 'Inbound Adapter',
            code: 'REST Controller',
            description:
              'Receives HTTP requests and translates external input into application commands.',
          },
          {
            name: 'Application Use Case',
            code: 'Use Case / Service',
            description:
              'Coordinates the process flow, validates actions and executes business operations.',
          },
          {
            name: 'Domain Core',
            code: 'Business Rules',
            description:
              'Contains the central business logic, independent from frameworks and infrastructure.',
          },
          {
            name: 'Outbound Adapter',
            code: 'Repository / External API',
            description:
              'Implements ports for persistence, databases, external services or infrastructure.',
          },
        ] as BackendLayer[],
        endpoints: [
          {
            method: 'GET',
            path: '/api/clients/search',
            description: 'Search client summaries using filters.',
          },
          {
            method: 'GET',
            path: '/api/clients/{id}',
            description: 'Load a detailed client profile.',
          },
          {
            method: 'POST',
            path: '/api/clients/{id}/relations',
            description: 'Create a validated relationship between entities.',
          },
          {
            method: 'PUT',
            path: '/api/clients/{id}/resources',
            description: 'Update structured business information.',
          },
          {
            method: 'POST',
            path: '/api/payments/process',
            description: 'Process a controlled payment workflow.',
          },
        ] as BackendEndpoint[],
        logs: [
          { type: 'INFO', message: 'Incoming request received: GET /api/clients/search' },
          { type: 'AUTH', message: 'JWT token validated successfully' },
          { type: 'SERVICE', message: 'Business rules executed in service layer' },
          { type: 'DB', message: 'Oracle query completed without errors' },
          { type: 'RESPONSE', message: 'HTTP 200 OK · payload mapped to DTO' },
        ] as BackendLog[],
        stack: [
          'Java',
          'Spring Boot',
          'Jakarta EE',
          'REST APIs',
          'JWT',
          'DTOs',
          'Validation',
          'Swagger',
          'Postman',
          'Oracle',
          'JDBC',
          'Transactions',
        ],
        practices: [
          {
            title: 'Layer separation',
            description: 'Clear division between controllers, services, repositories and DTOs.',
          },
          {
            title: 'Validation first',
            description: 'Input data is checked before executing business logic.',
          },
          {
            title: 'Traceable processes',
            description: 'Important actions are designed to preserve state, audit and consistency.',
          },
          {
            title: 'Secure access',
            description: 'Authentication and authorization are considered through JWT and guards.',
          },
        ] as BackendPractice[],
        response: `{
  "success": true,
  "status": 200,
  "message": "Backend engine ready",
  "data": {
    "layer": "service",
    "validated": true,
    "database": "connected"
  }
}`,
      };
    }

    return {
      eyebrow: 'Entorno de ejecución backend',
      title: 'Backend Engine',
      subtitle:
        'APIs estructuradas, lógica de negocio, validación, autenticación e integración con base de datos para sistemas web empresariales.',
      description:
        'Mi trabajo backend se enfoca en construir servicios mantenibles con responsabilidades claras: controladores para comunicación HTTP, servicios para reglas de negocio, repositorios para persistencia y DTOs para transferencia limpia de datos.',
      architectureLabel: 'Arquitectura modular / hexagonal',
      flowTitle: 'Flujo de ejecución backend',
      flowBadge: 'REST → Caso de uso → Dominio → Puertos → Adaptadores',
      consoleLabel: 'Consola de ejecución API',
      endpointsLabel: 'Ejemplos de endpoints',
      stackLabel: 'Stack backend',
      practicesLabel: 'Buenas prácticas',
      responseLabel: 'Respuesta simulada',
      layers: [
        {
          name: 'Adaptador de entrada',
          code: 'REST Controller',
          description:
            'Recibe peticiones HTTP y traduce la entrada externa hacia comandos de aplicación.',
        },
        {
          name: 'Caso de uso',
          code: 'Use Case / Service',
          description:
            'Coordina el flujo del proceso, valida acciones y ejecuta operaciones de negocio.',
        },
        {
          name: 'Núcleo de dominio',
          code: 'Business Rules',
          description:
            'Contiene la lógica central del negocio, independiente de frameworks e infraestructura.',
        },
        {
          name: 'Adaptador de salida',
          code: 'Repository / External API',
          description:
            'Implementa puertos hacia persistencia, bases de datos, servicios externos o infraestructura.',
        },
      ] as BackendLayer[],
      endpoints: [
        {
          method: 'GET',
          path: '/api/clientes/buscar',
          description: 'Buscar resúmenes de clientes mediante filtros.',
        },
        {
          method: 'GET',
          path: '/api/clientes/{id}',
          description: 'Cargar el perfil detallado de un cliente.',
        },
        {
          method: 'POST',
          path: '/api/clientes/{id}/relaciones',
          description: 'Crear una relación validada entre entidades.',
        },
        {
          method: 'PUT',
          path: '/api/clientes/{id}/recursos',
          description: 'Actualizar información empresarial estructurada.',
        },
        {
          method: 'POST',
          path: '/api/pagos/procesar',
          description: 'Procesar un flujo de pago controlado.',
        },
      ] as BackendEndpoint[],
      logs: [
        { type: 'INFO', message: 'Petición recibida: GET /api/clientes/buscar' },
        { type: 'AUTH', message: 'Token JWT validado correctamente' },
        { type: 'SERVICE', message: 'Reglas de negocio ejecutadas en capa de servicio' },
        { type: 'DB', message: 'Consulta Oracle completada sin errores' },
        { type: 'RESPONSE', message: 'HTTP 200 OK · respuesta mapeada a DTO' },
      ] as BackendLog[],
      stack: [
        'Java',
        'Spring Boot',
        'Jakarta EE',
        'REST APIs',
        'JWT',
        'DTOs',
        'Validaciones',
        'Swagger',
        'Postman',
        'Oracle',
        'JDBC',
        'Transacciones',
      ],
      practices: [
        {
          title: 'Separación por capas',
          description: 'División clara entre controladores, servicios, repositorios y DTOs.',
        },
        {
          title: 'Validación primero',
          description: 'Los datos de entrada se verifican antes de ejecutar reglas de negocio.',
        },
        {
          title: 'Procesos trazables',
          description:
            'Las acciones importantes se diseñan cuidando estado, auditoría y consistencia.',
        },
        {
          title: 'Acceso seguro',
          description: 'La autenticación y autorización se consideran mediante JWT y guards.',
        },
      ] as BackendPractice[],
      response: `{
  "success": true,
  "status": 200,
  "message": "Backend engine ready",
  "data": {
    "layer": "service",
    "validated": true,
    "database": "connected"
  }
}`,
    };
  });

  getMethodClass(method: BackendEndpoint['method']): string {
    const classes: Record<BackendEndpoint['method'], string> = {
      GET: 'border-emerald-300/30 bg-emerald-300/[0.08] text-emerald-200',
      POST: 'border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-200',
      PUT: 'border-amber-300/30 bg-amber-300/[0.08] text-amber-200',
      PATCH: 'border-violet-300/30 bg-violet-300/[0.08] text-violet-200',
      DELETE: 'border-red-300/30 bg-red-300/[0.08] text-red-200',
    };

    return classes[method];
  }

  getLogClass(type: BackendLog['type']): string {
    const classes: Record<BackendLog['type'], string> = {
      INFO: 'text-cyan-300',
      AUTH: 'text-emerald-300',
      SERVICE: 'text-amber-300',
      DB: 'text-violet-300',
      RESPONSE: 'text-lime-300',
    };

    return classes[type];
  }
}
