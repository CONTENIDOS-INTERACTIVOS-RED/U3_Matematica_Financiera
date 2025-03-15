export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evaluación de proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'VPN',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'TIR y TIRA',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'TIR',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'TIRA',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formulación financiera en Excel',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Banco de España. (2023). Conceptos básicos de inversión y rentabilidad: Valor Presente Neto (VPN).',
      link:
        'https://clientebancario.bde.es/pcb/es/menu-horizontal/productosservici/inversionrentabilidad/valorpresente',
    },
    {
      referencia:
        'Universidad Estatal de Milagro. (2019). Valor Actual Neto y Tasa Interna de Retorno como parámetros de evaluación de las inversiones. Revista Investigación Operacional, 40(4), 469-474.',
      link:
        'https://sga.unemi.edu.ec/media/evidenciasiv/2019/07/30/articulo_2019730122917.pdf',
    },
    {
      referencia:
        'Puga Muñoz, M. (s.f.). Valor Actual Neto y Tasa Interna de Retorno (VAN y TIR). Departamento de Auditoría y Sistemas de Información.',
      link:
        'https://accioneduca.org/admin/archivos/clases/material/valor-actual-neto-y-tasa-interna-de-retorno-van-y-tir_1563977885.pdf',
    },
    {
      referencia:
        'Universitat Oberta de Catalunya. (2022). Los métodos VAN y TIR en la valoración de los proyectos de inversión.',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/150126/2/LosMetodosVANyTIREnLaValoracionDeLosProyectosDeInversion.pdf',
    },
    {
      referencia:
        'Meza, J. (2013). Matemáticas financieras aplicadas: uso de las calculadoras financieras y EXCEL: (5 ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114356',
    },
    {
      referencia:
        'Rodríguez Franco, J. & Pierdant Rodríguez, A. I. (2016). Matemáticas financieras con aplicaciones en Excel: ( ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40427',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Rentabilidad',
      significado:
        'Proceso de evaluación de la viabilidad económica de un proyecto mediante indicadores financieros como VPN y TIR.',
    },
    {
      termino: 'Costo de Capital',
      significado:
        'Tasa de retorno mínima requerida por los inversionistas para financiar un proyecto o empresa.',
    },
    {
      termino: 'Crecimiento Compuesto',
      significado:
        'Aumento progresivo del capital debido a la reinversión de intereses o ganancias generadas en cada período.',
    },
    {
      termino: 'Descuento de Flujos de Efectivo',
      significado:
        'Método financiero para calcular el valor presente de los ingresos futuros considerando una tasa de descuento.',
    },
    {
      termino: 'Evaluación Financiera',
      significado:
        'Proceso de análisis que permite determinar la viabilidad económica de un proyecto o inversión.',
    },
    {
      termino: 'Factores de Descuento',
      significado:
        'Coeficientes aplicados para traer a valor presente los flujos de efectivo futuros de una inversión.',
    },
    {
      termino: 'Flujo de Ingresos',
      significado:
        'Cantidad de dinero generada por un proyecto o empresa en un período determinado.',
    },
    {
      termino: 'Índice de Rentabilidad (IR)',
      significado:
        'Indicador financiero que mide el beneficio generado por cada unidad monetaria invertida en un proyecto.',
    },
    {
      termino: 'Inversión Inicial',
      significado:
        'Monto de dinero requerido al inicio de un proyecto para su puesta en marcha.',
    },
    {
      termino: 'Método de Valoración',
      significado:
        'Técnicas utilizadas para evaluar la rentabilidad y viabilidad financiera de una inversión.',
    },
    {
      termino: 'Periodo de Recuperación Descontado',
      significado:
        'Tiempo necesario para recuperar la inversión inicial considerando el valor del dinero en el tiempo.',
    },
    {
      termino: 'Riesgo Financiero',
      significado:
        'Probabilidad de que una inversión no genere los rendimientos esperados o incurra en pérdidas.',
    },
    {
      termino: 'Tasa de Corte',
      significado:
        'Tasa de referencia utilizada para evaluar la rentabilidad de un proyecto mediante el descuento de flujos de efectivo.',
    },
    {
      termino: 'Umbral de Rentabilidad',
      significado:
        'Nivel mínimo de ingresos que un proyecto debe generar para cubrir sus costos y no incurrir en pérdidas.',
    },
  ],
}
