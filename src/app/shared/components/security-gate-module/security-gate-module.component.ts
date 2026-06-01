import { Component, Input, computed } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface SecurityLayer {
  code: string;
  name: string;
  description: string;
}

interface SecurityCheck {
  title: string;
  status: 'protected' | 'monitored' | 'validated' | 'hardened';
  description: string;
}

interface SecurityPractice {
  title: string;
  description: string;
}

interface SecurityLog {
  type: 'AUTH' | 'JWT' | 'CORS' | 'OWASP' | 'HEADER' | 'RATE';
  message: string;
}

@Component({
  selector: 'app-security-gate-module',
  standalone: true,
  templateUrl: './security-gate-module.component.html',
})
export class SecurityGateModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Application protection layer',
        title: 'Security Gate',
        subtitle:
          'Authentication, authorization, secure headers, CORS control, validation, OWASP awareness and defensive API practices.',
        description:
          'This module represents my security mindset when building web systems: protect access, validate inputs, avoid exposing sensitive data, configure secure responses and analyze risks with tools such as OWASP ZAP.',
        flowLabel: 'Request protection flow',
        checksLabel: 'Security checks',
        practicesLabel: 'Defensive practices',
        stackLabel: 'Security stack',
        consoleLabel: 'Security runtime',
        responseLabel: 'Protected response',
        layers: [
          {
            code: 'REQ',
            name: 'Incoming Request',
            description:
              'The system receives a request and evaluates origin, headers, method and route.',
          },
          {
            code: 'AUTH',
            name: 'Auth Guard',
            description:
              'Access is controlled before sensitive resources or protected modules are reached.',
          },
          {
            code: 'JWT',
            name: 'Token Validation',
            description:
              'The token is checked to confirm identity, expiration and authorization context.',
          },
          {
            code: 'ROLE',
            name: 'Role Check',
            description:
              'Permissions are evaluated to prevent unauthorized actions or horizontal access.',
          },
          {
            code: 'RES',
            name: 'Secure Response',
            description:
              'The response avoids sensitive leaks and includes controlled security behavior.',
          },
        ] as SecurityLayer[],
        checks: [
          {
            title: 'JWT Authentication',
            status: 'protected',
            description: 'Token-based access control for protected routes and API operations.',
          },
          {
            title: 'CORS Policy',
            status: 'validated',
            description:
              'Origins, methods and headers are configured to avoid permissive exposure.',
          },
          {
            title: 'OWASP ZAP Testing',
            status: 'monitored',
            description: 'DAST scans and manual checks help identify common web vulnerabilities.',
          },
          {
            title: 'Security Headers',
            status: 'hardened',
            description:
              'Headers reduce browser-level risks and improve frontend/backend protection.',
          },
        ] as SecurityCheck[],
        practices: [
          {
            title: 'Validate every input',
            description:
              'Forms, payloads and route parameters should be validated before processing.',
          },
          {
            title: 'Avoid data leaks',
            description:
              'Errors and responses should not expose internal paths, stack traces or private data.',
          },
          {
            title: 'Control access',
            description:
              'Protected actions must verify identity, role and ownership of the requested resource.',
          },
          {
            title: 'Harden deployment',
            description:
              'Nginx, SSL, rate limits and secure headers strengthen the production surface.',
          },
        ] as SecurityPractice[],
        logs: [
          { type: 'AUTH', message: 'Protected route intercepted by auth guard' },
          { type: 'JWT', message: 'Token signature and expiration validated' },
          { type: 'CORS', message: 'Origin policy checked before response' },
          { type: 'OWASP', message: 'DAST findings reviewed and documented' },
          { type: 'HEADER', message: 'Security headers attached to response' },
          { type: 'RATE', message: 'Rate limit rules prepared for sensitive endpoints' },
        ] as SecurityLog[],
        stack: [
          'JWT',
          'CORS',
          'OWASP',
          'OWASP ZAP',
          'Auth Guards',
          'Role Checks',
          'Input Validation',
          'Rate Limits',
          'Security Headers',
          'Nginx',
          'SSL/TLS',
          'Error Handling',
        ],
        response: `{
  "status": 200,
  "access": "granted",
  "token": "validated",
  "role": "authorized",
  "headers": ["X-Content-Type-Options", "X-Frame-Options"],
  "sensitiveDataExposed": false
}`,
      };
    }

    return {
      eyebrow: 'Capa de protección de aplicación',
      title: 'Security Gate',
      subtitle:
        'Autenticación, autorización, headers seguros, control CORS, validación, criterio OWASP y prácticas defensivas para APIs.',
      description:
        'Este módulo representa mi enfoque de seguridad al construir sistemas web: proteger accesos, validar entradas, evitar exposición de datos sensibles, configurar respuestas seguras y analizar riesgos con herramientas como OWASP ZAP.',
      flowLabel: 'Flujo de protección de request',
      checksLabel: 'Controles de seguridad',
      practicesLabel: 'Prácticas defensivas',
      stackLabel: 'Stack de seguridad',
      consoleLabel: 'Ejecución de seguridad',
      responseLabel: 'Respuesta protegida',
      layers: [
        {
          code: 'REQ',
          name: 'Request entrante',
          description: 'El sistema recibe una petición y evalúa origen, headers, método y ruta.',
        },
        {
          code: 'AUTH',
          name: 'Auth Guard',
          description:
            'El acceso se controla antes de llegar a recursos sensibles o módulos protegidos.',
        },
        {
          code: 'JWT',
          name: 'Validación de token',
          description:
            'El token se revisa para confirmar identidad, expiración y contexto de autorización.',
        },
        {
          code: 'ROLE',
          name: 'Control de rol',
          description:
            'Los permisos se evalúan para evitar acciones no autorizadas o acceso horizontal.',
        },
        {
          code: 'RES',
          name: 'Respuesta segura',
          description:
            'La respuesta evita filtraciones sensibles e incluye comportamiento de seguridad controlado.',
        },
      ] as SecurityLayer[],
      checks: [
        {
          title: 'Autenticación JWT',
          status: 'protected',
          description:
            'Control de acceso basado en tokens para rutas protegidas y operaciones de API.',
        },
        {
          title: 'Política CORS',
          status: 'validated',
          description: 'Orígenes, métodos y headers configurados para evitar exposición permisiva.',
        },
        {
          title: 'Pruebas OWASP ZAP',
          status: 'monitored',
          description:
            'Escaneos DAST y pruebas manuales ayudan a detectar vulnerabilidades web comunes.',
        },
        {
          title: 'Headers de seguridad',
          status: 'hardened',
          description: 'Los headers reducen riesgos del navegador y fortalecen frontend/backend.',
        },
      ] as SecurityCheck[],
      practices: [
        {
          title: 'Validar cada entrada',
          description:
            'Formularios, payloads y parámetros de ruta deben validarse antes de procesarse.',
        },
        {
          title: 'Evitar filtración de datos',
          description:
            'Errores y respuestas no deben exponer rutas internas, stack traces o datos privados.',
        },
        {
          title: 'Controlar accesos',
          description:
            'Las acciones protegidas deben verificar identidad, rol y pertenencia del recurso solicitado.',
        },
        {
          title: 'Fortalecer despliegue',
          description:
            'Nginx, SSL, rate limits y headers seguros reducen la superficie de exposición.',
        },
      ] as SecurityPractice[],
      logs: [
        { type: 'AUTH', message: 'Ruta protegida interceptada por auth guard' },
        { type: 'JWT', message: 'Firma y expiración del token validadas' },
        { type: 'CORS', message: 'Política de origen revisada antes de responder' },
        { type: 'OWASP', message: 'Hallazgos DAST revisados y documentados' },
        { type: 'HEADER', message: 'Headers de seguridad adjuntados a la respuesta' },
        { type: 'RATE', message: 'Reglas de rate limit preparadas para endpoints sensibles' },
      ] as SecurityLog[],
      stack: [
        'JWT',
        'CORS',
        'OWASP',
        'OWASP ZAP',
        'Auth Guards',
        'Control de roles',
        'Validación de entradas',
        'Rate Limits',
        'Headers de seguridad',
        'Nginx',
        'SSL/TLS',
        'Manejo de errores',
      ],
      response: `{
  "status": 200,
  "access": "granted",
  "token": "validated",
  "role": "authorized",
  "headers": ["X-Content-Type-Options", "X-Frame-Options"],
  "sensitiveDataExposed": false
}`,
    };
  });

  getStatusClass(status: SecurityCheck['status']): string {
    const classes: Record<SecurityCheck['status'], string> = {
      protected: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      monitored: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
      validated: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
      hardened: 'border-rose-300/25 bg-rose-300/[0.08] text-rose-200',
    };

    return classes[status];
  }

  getLogClass(type: SecurityLog['type']): string {
    const classes: Record<SecurityLog['type'], string> = {
      AUTH: 'text-emerald-300',
      JWT: 'text-cyan-300',
      CORS: 'text-amber-300',
      OWASP: 'text-rose-300',
      HEADER: 'text-violet-300',
      RATE: 'text-orange-300',
    };

    return classes[type];
  }
}
