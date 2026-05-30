import { Component, Input, computed } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface DatabaseTable {
  name: string;
  code: string;
  description: string;
  fields: string[];
}

interface DatabaseRelation {
  from: string;
  to: string;
  type: string;
  description: string;
}

interface DatabaseSkill {
  title: string;
  description: string;
}

interface DatabaseLog {
  type: 'SQL' | 'MODEL' | 'PLSQL' | 'AUDIT' | 'REPO';
  message: string;
}

@Component({
  selector: 'app-database-vault-module',
  standalone: true,
  templateUrl: './database-vault-module.component.html',
})
export class DatabaseVaultModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Data modeling chamber',
        title: 'Database Vault',
        subtitle:
          'Conceptual data structures, SQL queries, PL/SQL logic, repositories, integrity and audit-focused persistence.',
        description:
          'This module represents my database criteria through conceptual tables, relationships, query simulation and persistence patterns. No real company or client data is shown.',
        schemaLabel: 'Conceptual schema',
        queryLabel: 'SQL simulation',
        resultLabel: 'Query result',
        relationsLabel: 'Entity relationships',
        skillsLabel: 'Database capabilities',
        logsLabel: 'Data runtime',
        stackLabel: 'Database stack',
        integrityLabel: 'Integrity rules',
        tables: [
          {
            name: 'CLIENTS',
            code: 'TB_CLIENTS',
            description:
              'Stores general profile, identification, contact and business classification data.',
            fields: ['client_id', 'identification', 'full_name', 'email', 'status', 'created_at'],
          },
          {
            name: 'CLIENT_RELATION',
            code: 'TB_CLIENT_RELATION',
            description:
              'Represents relationships between entities with type, validity range and traceability.',
            fields: [
              'relation_id',
              'source_client',
              'target_client',
              'relation_type',
              'valid_from',
            ],
          },
          {
            name: 'PAYMENT_ORDER',
            code: 'TB_PAYMENT_ORDER',
            description:
              'Keeps payment records, due dates, status, amount and document association.',
            fields: ['order_id', 'contract_id', 'issued_at', 'due_at', 'amount', 'status'],
          },
          {
            name: 'AUDIT_LOG',
            code: 'TB_AUDIT_LOG',
            description:
              'Records relevant system actions to preserve traceability and operational control.',
            fields: ['audit_id', 'action', 'entity', 'user_code', 'created_at', 'source_ip'],
          },
        ] as DatabaseTable[],
        relations: [
          {
            from: 'CLIENTS',
            to: 'CLIENT_RELATION',
            type: '1:N',
            description: 'A client can have multiple registered relationships.',
          },
          {
            from: 'CLIENTS',
            to: 'PAYMENT_ORDER',
            type: '1:N',
            description: 'A client or contract can be associated with many payment orders.',
          },
          {
            from: 'PAYMENT_ORDER',
            to: 'AUDIT_LOG',
            type: '1:N',
            description: 'Critical payment actions can generate audit records.',
          },
        ] as DatabaseRelation[],
        skills: [
          {
            title: 'Data modeling',
            description:
              'Designing entities, fields, relationships and structures aligned with business processes.',
          },
          {
            title: 'SQL queries',
            description:
              'Building filtered, ordered and joined queries for application features and reports.',
          },
          {
            title: 'PL/SQL logic',
            description:
              'Understanding stored procedures, validation logic and database-side operations.',
          },
          {
            title: 'Repository layer',
            description:
              'Connecting backend services with persistence using repositories, JDBC and DTO mapping.',
          },
        ] as DatabaseSkill[],
        logs: [
          { type: 'MODEL', message: 'Conceptual entities loaded successfully' },
          { type: 'SQL', message: 'SELECT query prepared for developer_stack' },
          { type: 'PLSQL', message: 'Stored procedure logic represented as simulated flow' },
          { type: 'AUDIT', message: 'Traceability rules enabled for critical operations' },
          { type: 'REPO', message: 'Repository layer mapped to application services' },
        ] as DatabaseLog[],
        stack: [
          'Oracle',
          'PostgreSQL',
          'SQL',
          'PL/SQL',
          'Stored Procedures',
          'Data Modeling',
          'Relationships',
          'JDBC',
          'Repositories',
          'Transactions',
          'Audit',
          'Integrity',
        ],
        query: `SELECT skill_name, category, confidence
FROM developer_stack
WHERE area = 'database'
ORDER BY priority ASC;`,
        response: `[
  { "skill_name": "Oracle", "category": "RDBMS", "confidence": "strong" },
  { "skill_name": "SQL", "category": "Query Language", "confidence": "strong" },
  { "skill_name": "PL/SQL", "category": "Stored Logic", "confidence": "growing" },
  { "skill_name": "Data Modeling", "category": "Design", "confidence": "strong" },
  { "skill_name": "Repository Layer", "category": "Persistence", "confidence": "strong" }
]`,
      };
    }

    return {
      eyebrow: 'Cámara de modelado de datos',
      title: 'Database Vault',
      subtitle:
        'Estructuras conceptuales de datos, consultas SQL, lógica PL/SQL, repositorios, integridad y persistencia con trazabilidad.',
      description:
        'Este módulo representa mi criterio en bases de datos mediante tablas conceptuales, relaciones, simulación de consultas y patrones de persistencia. No se muestran datos reales de empresas ni clientes.',
      schemaLabel: 'Esquema conceptual',
      queryLabel: 'Simulación SQL',
      resultLabel: 'Resultado de consulta',
      relationsLabel: 'Relaciones entre entidades',
      skillsLabel: 'Capacidades de base de datos',
      logsLabel: 'Ejecución de datos',
      stackLabel: 'Stack de base de datos',
      integrityLabel: 'Reglas de integridad',
      tables: [
        {
          name: 'CLIENTES',
          code: 'TB_CLIENTES',
          description:
            'Almacena información general del perfil, identificación, contacto y clasificación empresarial.',
          fields: [
            'cliente_id',
            'identificacion',
            'nombre_completo',
            'email',
            'estado',
            'fecha_creacion',
          ],
        },
        {
          name: 'CLIENTE_RELACION',
          code: 'TB_CLIENTE_RELACION',
          description: 'Representa relaciones entre entidades con tipo, vigencia y trazabilidad.',
          fields: [
            'relacion_id',
            'cliente_origen',
            'cliente_destino',
            'tipo_relacion',
            'vigente_desde',
          ],
        },
        {
          name: 'ORDEN_PAGO',
          code: 'TB_ORDEN_PAGO',
          description:
            'Conserva registros de pago, fechas de vencimiento, estado, monto y documento asociado.',
          fields: [
            'orden_id',
            'contrato_id',
            'fecha_emision',
            'fecha_vencimiento',
            'monto',
            'estado',
          ],
        },
        {
          name: 'AUDITORIA',
          code: 'TB_AUDITORIA',
          description:
            'Registra acciones relevantes del sistema para preservar trazabilidad y control operativo.',
          fields: ['auditoria_id', 'accion', 'entidad', 'usuario', 'fecha_creacion', 'ip_origen'],
        },
      ] as DatabaseTable[],
      relations: [
        {
          from: 'CLIENTES',
          to: 'CLIENTE_RELACION',
          type: '1:N',
          description: 'Un cliente puede tener múltiples relaciones registradas.',
        },
        {
          from: 'CLIENTES',
          to: 'ORDEN_PAGO',
          type: '1:N',
          description: 'Un cliente o contrato puede asociarse con varias órdenes de pago.',
        },
        {
          from: 'ORDEN_PAGO',
          to: 'AUDITORIA',
          type: '1:N',
          description: 'Las acciones críticas de pago pueden generar registros de auditoría.',
        },
      ] as DatabaseRelation[],
      skills: [
        {
          title: 'Modelado de datos',
          description:
            'Diseño de entidades, campos, relaciones y estructuras alineadas con procesos de negocio.',
        },
        {
          title: 'Consultas SQL',
          description:
            'Construcción de consultas filtradas, ordenadas y relacionadas para funcionalidades y reportes.',
        },
        {
          title: 'Lógica PL/SQL',
          description:
            'Comprensión de procedimientos almacenados, validaciones y operaciones del lado de base de datos.',
        },
        {
          title: 'Capa repository',
          description:
            'Conexión entre servicios backend y persistencia mediante repositorios, JDBC y mapeo a DTOs.',
        },
      ] as DatabaseSkill[],
      logs: [
        { type: 'MODEL', message: 'Entidades conceptuales cargadas correctamente' },
        { type: 'SQL', message: 'Consulta SELECT preparada para developer_stack' },
        { type: 'PLSQL', message: 'Lógica de procedimiento representada como flujo simulado' },
        { type: 'AUDIT', message: 'Reglas de trazabilidad activas para operaciones críticas' },
        { type: 'REPO', message: 'Capa repository conectada con servicios de aplicación' },
      ] as DatabaseLog[],
      stack: [
        'Oracle',
        'PostgreSQL',
        'SQL',
        'PL/SQL',
        'Procedimientos almacenados',
        'Modelado de datos',
        'Relaciones',
        'JDBC',
        'Repositorios',
        'Transacciones',
        'Auditoría',
        'Integridad',
      ],
      query: `SELECT skill_name, category, confidence
FROM developer_stack
WHERE area = 'database'
ORDER BY priority ASC;`,
      response: `[
  { "skill_name": "Oracle", "category": "RDBMS", "confidence": "strong" },
  { "skill_name": "SQL", "category": "Query Language", "confidence": "strong" },
  { "skill_name": "PL/SQL", "category": "Stored Logic", "confidence": "growing" },
  { "skill_name": "Data Modeling", "category": "Design", "confidence": "strong" },
  { "skill_name": "Repository Layer", "category": "Persistence", "confidence": "strong" }
]`,
    };
  });

  getLogClass(type: DatabaseLog['type']): string {
    const classes: Record<DatabaseLog['type'], string> = {
      SQL: 'text-violet-300',
      MODEL: 'text-cyan-300',
      PLSQL: 'text-fuchsia-300',
      AUDIT: 'text-amber-300',
      REPO: 'text-emerald-300',
    };

    return classes[type];
  }
}
