import { Project } from './project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'CNPP-OTCA',
    company: 'Instituto de Investigaciones de la Amazonía Peruana (IIAP)',
    image: 'cnpp-otca/image1.png',
    description: 'Sitio web que congrega, sistematiza y facilita el acceso a la información relacionada con la Amazonía peruana, generada a partir de las actividades, acciones y agendas de las instituciones participantes en la Comisión Nacional Permanente Perú de la OTCA',
    rol: 'Colaboradora',
    functionalities: ['Buscador temático de documentos', 'Redifusión web'],
    carousel: [
      {
        title: 'Buscador temático',
        image: 'cnpp-otca/image2.png'
      },
      {
        title: 'Redifusión web',
        image: 'cnpp-otca/image3.png'
      },
    ]
  },
  {
    id: 2,
    name: 'SIIGEF - OTCA',
    company: 'Instituto de Investigaciones de la Amazonía Peruana (IIAP)',
    image: 'siigef/image1.png',
    description: 'Sistema integrado de información de los recursos hídricos transfronterizos de la cuenca amazónica',
    rol: 'Colaboradora',
    functionalities: [
      'Integración de nuevos estándares, desde recursos provenientes de datos en web del tipo: JSON, RSS',
      'Generación de reportes de Opinión Pública',
      'Mejoras en los visores: Monitoreo de calidad de agua, opinión pública',
      'Mejoras visuales en la metadata del Recurso Cartográfico',
      'Mejoras y validaciones en el intranet'
    ],
    carousel: [
      {
        title: 'Integración de nuevos estandares',
        image: 'siigef/image2.png'
      },
      {
        title: 'Página principal',
        image: 'siigef/image3.png'
      },
      {
        title: 'Visor de Opinión Pública',
        image: 'siigef/image4.png'
      },
      {
        title: 'Reporte en Visor de Opinión Pública',
        image: 'siigef/image5.png'
      },
      {
        title: 'Metadata de recurso cartográfico',
        image: 'siigef/image6.png'
      },
    ]
  },
  {
    id: 3,
    name: 'eVOTs',
    company: 'ASPAT-PERÚ',
    image: 'evots/image1.png',
    description: 'Sistema que busca fortalecer la adherencia al tratamiento, a través de un sistema que permita el control y seguimiento de las personas afectas por tuberculosis.',
    rol: 'Diseño y desarrollo',
    functionalities: [
      'Desarrollo del sistema biométrico (desktop) para el control de asistencias de los pacientes, utilizando los lectores de huella: Digital Person 4500 y Suprema Biomini S20',
      'Desarrollo del sistema web, que cuenta con módulos como: alertas, pacientes, soporte de pares, programación de actividades, reportes'
    ],
    carousel: [
      {
        title: 'Interfaces del sistema biométrico',
        image: 'evots/evots.png'
      },
      {
        title: 'Interfaz principal de pacientes',
        image: 'evots/image7.png'
      },
      {
        title: 'Registrar casos',
        image: 'evots/image8.png'
      },
      {
        title: 'Crear esquema',
        image: 'evots/image9.png'
      },
      {
        title: 'Control de Asistencia',
        image: 'evots/image10.png'
      },
      {
        title: 'Reporte de Marcación',
        image: 'evots/reporte_marcacion.png'
      },
      {
        title: 'Resumen de Centros',
        image: 'evots/resumen_centros.png'
      },
    ]
  },
  {
    id: 4,
    name: 'SIGVAC',
    company: 'ASPAT-PERÚ',
    image: 'sigvac/image1.png',
    description: 'Sistema Gerencial de Vacunas, para el control y seguimiento en la salud del niño',
    rol: 'Diseño y desarrollo',
    functionalities: ['Desarrollo del sistema web'],
    carousel: [
      {
        title: 'Login',
        image: 'sigvac/image1.png'
      },
      {
        title: 'Inicio',
        image: 'sigvac/inicio.png'
      },
      {
        title: 'Listado de Pacientes',
        image: 'sigvac/listado_pacientes.png'
      },
      {
        title: 'Información del Pacientes',
        image: 'sigvac/informacion_paciente.png'
      },
      {
        title: 'Contactos del Paciente',
        image: 'sigvac/contactos.png'
      },
      {
        title: 'Antecedentes del Pacientes',
        image: 'sigvac/antecedentes.png'
      },
      {
        title: 'Control',
        image: 'sigvac/control.png'
      },
      {
        title: 'Gráfico Peso y Talla',
        image: 'sigvac/grafico_control.png'
      },
      {
        title: 'Desarrollo Psicomotor',
        image: 'sigvac/desarrollo_psicomotor.png'
      },
      {
        title: 'Vacunas',
        image: 'sigvac/vacunas.png'
      },
    ]
  },
  {
    id: 5,
    name: 'PorMayor',
    image: 'pormayor/image1.png',
    company: 'Pormayorpe S.A',
    description: 'Plataforma pormayor.pe, megamercado de mayorista virtual',
    rol: 'Colaboradora',
    functionalities: ['Desarrollo de la parte inicial del proyecto'],
    carousel: [
      {
        title: 'Inicio',
        image: 'pormayor/inicio.png'
      },
      {
        title: 'Login',
        image: 'pormayor/login.png'
      },
      {
        title: 'Listado productos',
        image: 'pormayor/categorias.png'
      },
    ]

  },
  {
    id: 6,
    name: 'Factpro',
    company: 'R M Soluciones Perú S. A. C',
    image: 'factpro/image1.png',
    description: 'Sistema de facturación electrónica, con validación de SUNAT, OSE y PSE',
    rol: 'Desarrollo',
    functionalities: ['Desarrollo y manteniemiento del sistema web, que cuentas con módulos como: Facturación electrónica, punto de venta, control de inventario, control de gastos, reportes'],
    carousel: [
      {
        title: 'Login',
        image: 'factpro/login.png'
      },
      {
        title: 'Inicio',
        image: 'factpro/inicio.png'
      },
      {
        title: 'Terminales POS',
        image: 'factpro/terminales.png'
      },
      {
        title: 'POS',
        image: 'factpro/pos.png'
      },
      {
        title: 'Turnos',
        image: 'factpro/turnos.png'
      },
      {
        title: 'Comprobantes electrónicos',
        image: 'factpro/comprobantes_electronicos.png'
      },
    ]
  },
  {
    id: 7,
    name: 'WebSendaefact',
    company: 'Senda TI Solutions',
    image: 'websendaefact/image1.png',
    description: 'Sistema ERP, que cuenta con módulos de: Finanzas, operaciones, ventas, producción, RRHH',
    rol: 'Desarrollo y Mantenimiento',
    functionalities: ['Desarrollo y manteniemiento del sistema'],
    carousel: [
      {
        title: 'Login',
        image: 'websendaefact/image1.png'
      },
      {
        title: 'Listado de comprobantes',
        image: 'websendaefact/image2.png'
      },
      {
        title: 'Emisión de factura',
        image: 'websendaefact/image3.png'
      },
      {
        title: 'POS',
        image: 'websendaefact/image4.png'
      }
    ]
  },
  {
    id: 8,
    name: 'MisFacturas',
    company: 'Senda TI Solutions',
    image: 'misfacturas/image1.png',
    description: 'Sistema de facturación electrónica, que cuenta con módulos de: emisión de comprobantes, productos, clientes, entre otros',
    rol: 'Desarrollo y Mantenimiento',
    functionalities: ['Desarrollo y manteniemiento del sistema'],
    carousel: [
      {
        title: 'Login',
        image: 'misfacturas/image1.png'
      },
      {
        title: 'Dashboard',
        image: 'misfacturas/image2.png'
      },
      {
        title: 'Listado de comprobantes',
        image: 'misfacturas/image3.png'
      },
      {
        title: 'Emisión de factura',
        image: 'misfacturas/image4.png'
      }
    ]
  }
];
