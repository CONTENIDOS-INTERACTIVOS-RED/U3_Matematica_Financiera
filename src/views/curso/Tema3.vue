<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Formulación financiera en Excel'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .bg-full-width.bg-color-7.mb-3
      .p-4.p-md-5
        p.mb-4 Para conocer sobre la temática, lo invitamos a escuchar el siguiente podcast.

      
        .row.justify-content-center.align-items-center
          .col-lg-6    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Formulación financiera en Excel"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              
            )
    
    p.mb-4 En esta sección, se explorará cómo aplicar Excel a los principales temas abordados en el curso, proporcionando explicaciones claras y ejemplos detallados para comprender y aplicar estas herramientas en situaciones reales. Se abordarán casos prácticos que permitirán desarrollar habilidades en el uso de funciones financieras, construcción de modelos de análisis y optimización de procesos, con el objetivo de mejorar la precisión en la toma de decisiones y facilitar la interpretación de información financiera en distintos contextos.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Cálculo del Valor Presente en Excel")
            p Para calcular el VP en Excel, usamos la función VA() (Valor Actual):
            p.text-center =VA(tasa, nper, pago, VF, tipo)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa: Tasa de interés o descuento por período.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 nper: Número de períodos o años.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 pago: Flujo de efectivo periódico (si aplica).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF: Valor futuro esperado.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tipo: 0 (si los pagos ocurren al final del período) o 1 (si ocurren al inicio).
            h5 Ejemplo: 
            p Una persona planea recibir $50,000 en 5 años. Quiere saber cuánto necesita hoy si la tasa de descuento es 8 % anual. En Excel, usa la función VA():
            p.text-center =VA(8 %, 5, 0, 50000) 
            p El resultado es 34,032. Es decir, si hoy invierte s $34,032 con una tasa del 8 % anual, en 5 años tendrá $50,000.
          div(numero="2" titulo="Cálculo del Valor Futuro en Excel") 
            p Para calcular el VF en Excel, usamos la función VF() (Valor Futuro).
            p.text-center =VF(tasa, nper, pago, VA, tipo)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa: Tasa de interés o crecimiento anual.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 nper: Número de períodos o años.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 pago: Pago periódico (si aplica).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VA: Valor presente o inversión inicial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tipo: 0 (si los pagos ocurren al final) o 1 (si ocurren al inicio).
            h5 Ejemplo: 
            p Un inversionista deposita $10,000 hoy en una cuenta con una tasa de interés compuesta del 6 % anual por 10 años. Quiere saber cuánto tendrá al final del período. En Excel, usa la función VF():
            p.text-center =VF(6 %, 10, 0, -10000) 
            p El resultado es 17,908. Es decir, si hoy inviertes $10,000 con una tasa del 6 % anual, en 10 años tu inversión crecerá a $17,908.
          div(numero="2" titulo="Cálculo de anualidades en Excel") 
            p Para calcular el pago periódico (cuota) de una anualidad en Excel, usamos la función PAGO():
            p.text-center =PAGO(tasa, nper, VA, VF, tipo)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa = Tasa de interés por período.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 nper = Número total de períodos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VA = Valor actual del préstamo o inversión.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = Valor futuro de la anualidad (si aplica).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tipo = 0 (si los pagos son al final del período) o 1 (si son al inicio).
            h5 Ejemplo: 
            p Un préstamo de $100,000 se pagará en 5 años, con una tasa de 12 % anual, en pagos mensuales. En Excel:
            p.text-center =PAGO(12 %/12, 60, -100000)
            p El resultado es 2,224. Es decir, para pagar $100,000 en 5 años con una tasa del 12 %, se deben hacer pagos mensuales de $2,224.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="4" titulo="Cálculo del Valor Presente de una anualidad en Excel")
            p Si quieres saber cuánto dinero necesitas hoy para recibir una renta periódica en el futuro, usa la función VA():
            p.text-center =VA(tasa, nper, pago, VF, tipo)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 • tasa = Tasa de interés por período.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 • nper = Número total de períodos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 • pago = Pago periódico.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 • VF = Valor futuro de la anualidad (si aplica).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 • tipo = 0 (vencida) o 1 (anticipada).
            h5 Ejemplo: 
            p Un inversionista quiere recibir $2,000 mensuales durante 20 años, con una tasa del 8 % anual. ¿Cuánto dinero debe tener hoy? En Excel:
            p.text-center =VA(8%/12, 240, -2000) 
            p El resultado es 238,476. Es decir, para recibir $2,000 mensuales por 20 años, necesitas $238,476 hoy, si la tasa de interés es del 8 % anual.
          div(numero="5" titulo="Cálculo del Valor Futuro de una anualidad en Excel") 
            p Si quieres saber cuánto tendrás en el futuro si realizas pagos periódicos, usa la función VF():
            p.text-center =VF(tasa, nper, pago, VA, tipo)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa = Tasa de interés por período.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 nper = Número total de períodos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 pago = Pago periódico.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VA = Valor presente o inversión inicial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tipo = 0 (vencida) o 1 (anticipada).
            h5 Ejemplo: 
            p Un padre quiere ahorrar $500 mensuales durante 18 años para la universidad de su hijo. La cuenta de ahorro genera un 5 % anual compuesto mensualmente. ¿Cuánto tendrá al final? En Excel:
            p.text-center =VF(5%/12, 216, -500) 
            p El resultado es 179,597. Es decir, Si ahorras $500 al mes con una tasa del 5 %, después de 18 años tendrás $179,597.
          div(numero="6" titulo="Cálculo de amortización con Pagos Anticipados en Excel") 
            p Para este tipo de amortización en Excel, se usa la función PAGO(), con el argumento tipo = 1 (lo que indica que el pago se realiza al inicio del período):
            p.text-center =PAGO(tasa, nper, VA, VF, 1)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa = Tasa de interés por período (tasa anual dividida por el número de pagos al año).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 nper = Número total de períodos de pago.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VA = Valor del préstamo o capital inicial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = Valor futuro del préstamo (generalmente 0 si se amortiza completamente).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tipo = 1 (Indica que los pagos son al inicio del período).
            h5 Ejemplo: 
            p Un préstamo de $50,000 se pagará en 5 años, con una tasa de 10 % anual, en pagos trimestrales. En Excel:
            p.text-center =PAGO(10 %/4, 20, -50000, 0, 1)
            p El resultado es 3,187 por trimestre. Dado que los pagos son anticipados, la cuota es ligeramente menor que en un préstamo con pagos vencidos. Esto se debe a que cada pago se realiza antes de que se acumulen más intereses, reduciendo el costo total del financiamiento.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="7" titulo="Cálculo del VPN en Excel")
            p Para calcular el Valor Presente Neto en Excel, se utiliza la función VPN(), que permite descontar los flujos de efectivo futuros a su valor presente:
            p.text-center =VPN(tasa, flujo1, flujo2, ..., flujoN) - inversión_inicial
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa = Tasa de descuento o costo de capital.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 flujo1, flujo2, …, flujoN = Flujos de efectivo en cada período.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 inversión_inicial = Monto de la inversión inicial (se resta al resultado de la función VPN()).
            h5 Ejemplo: 
            p Una empresa está evaluando un proyecto que requiere una inversión inicial de $50,000 y generará los siguientes flujos de efectivo anuales durante 4 años, con una tasa de descuento del 10 % anual:
            .tabla-a.color-acento-botones.mb-3
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Flujo de Efectivo ($)
                tbody
                  tr.bg-color-4
                    td 1
                    td 15,000
                  tr.bg-color-4
                    td 2
                    td 18,000
                  tr.bg-color-4
                    td 3
                    td 20,000
                  tr.bg-color-4
                    td 4
                    td 25,000
            p Al crear la tabla en Excel, se aplica la siguiente fórmula:
            p.text-center =VPN(10%, 15000, 18000, 20000, 25000) – 50000
            p El resultado es 6,202. Es decir, El VPN es positivo, lo que indica que el proyecto es rentable y generará un valor adicional de $6,202 sobre la inversión inicial.
          div(numero="8" titulo="Cálculo de la TIR en Excel") 
            p Para calcular la Tasa Interna de Retorno (TIR) en Excel, se utiliza la función TIR(), que busca la tasa que hace que el VPN sea igual a cero:
            p.text-center =TIR(rango_flujos)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 rango_flujos = Rango de celdas que contiene los flujos de efectivo del proyecto, incluyendo la inversión inicial (negativa).
            h5 Ejemplo: 
            p Una empresa está evaluando un proyecto que requiere una inversión inicial de $50,000 y generará los siguientes flujos de efectivo durante 4 años:
            .tabla-a.color-acento-botones.mb-3
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Flujo de Efectivo ($)
                tbody
                  tr.bg-color-4
                    td 0
                    td -50,000
                  tr.bg-color-4
                    td 1
                    td 15,000
                  tr.bg-color-4
                    td 2
                    td 18,000
                  tr.bg-color-4
                    td 3
                    td 20,000
                  tr.bg-color-4
                    td 4
                    td 25,000
            p Al crear la tabla en Excel se aplica la siguiente fórmula:
            p.text-center =TIR(A2:A6) 
            p El resultado es 13.47 %. Es decir, la TIR del proyecto es 13.47 %, lo que significa que este proyecto generará un rendimiento del 13.47 % anual. Si la tasa de descuento de la empresa es menor a este valor, el proyecto es rentable y debería aprobarse.
          div(numero="9" titulo="Cálculo de la TIRA en Excel") 
            p Para calcular la Tasa Interna de Retorno Ajustada (TIRA) en Excel, se usa la función TIRM():
            p.text-center =TIRM(rango_flujos, tasa_financiamiento, tasa_reinversión)
            p Donde:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 rango_flujos = Rango de celdas con los flujos de efectivo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa_financiamiento = Tasa de interés de la inversión inicial.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 tasa_reinversión = Tasa de interés con la que se reinvierten los flujos positivos.
            h5 Ejemplo: 
            p Un inversionista analiza un proyecto con una inversión inicial de $80,000 y los siguientes flujos de efectivo durante 5 años. La tasa de financiamiento es 9 % y la tasa de reinversión de los flujos positivos es 7 %.
            .tabla-a.color-acento-botones.mb-3
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Flujo de Efectivo ($)
                tbody
                  tr.bg-color-4
                    td 0
                    td -80,000
                  tr.bg-color-4
                    td 1
                    td 20,000
                  tr.bg-color-4
                    td 2
                    td 22,000
                  tr.bg-color-4
                    td 3
                    td 25,000
                  tr.bg-color-4
                    td 4
                    td 30,000
                  tr.bg-color-4
                    td 5
                    td 35,000
            p Al crear la tabla en Excel, se aplica la siguiente fórmula:
            p.text-center =TIRM(A2:A7, 9 %, 7 %)
            p El resultado es 8.85 %. Es decir, la TIRA del proyecto es 8.85 %, lo que significa que, si la tasa de descuento de la empresa es menor a este valor, el proyecto es rentable.



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69203" target="_blank" rel="noopener noreferrer") Gutiérrez Carmona, J. (2012). Matemáticas financieras: con fórmulas, calculadora financiera y Excel: ( ed.). Ecoe Ediciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51516" target="_blank" rel="noopener noreferrer") Aching Guzmán, C. (2015). Guía rápida: aplicaciones financieras de excel con matemáticas financieras: ( ed.). El Cid Editor.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://support.microsoft.com/es-es/office/funciones-financieras-referencia-5658d81e-6035-4f24-89c1-fbf124c2b1d8 " target="_blank" rel="noopener noreferrer") Microsoft. (n.d.). Funciones financieras (referencia). Soporte técnico de Microsoft. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://formadoresit.es/las-principales-funciones-financieras-de-excel/ " target="_blank" rel="noopener noreferrer") Formadores IT. (n.d.). Las principales funciones financieras de Excel.  

            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Ap3IkVeH2Kc " target="_blank" rel="noopener noreferrer") Luz Castellanos Duque. (2016, 15 de marzo). Cálculo de la TIR [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NO7lUB9uJ8A" target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019g, 16 de septiembre). ¿Cómo programar un ahorro o inversión en Excel? [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HMG21jQgr-E " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019d, 9 de septiembre). ¿Cómo crear una tabla de amortización de cuota fija? [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2NTgwIYmd2w " target="_blank" rel="noopener noreferrer") Universidad Continental - Modalidad a Distancia. (2021, 2 de diciembre). Ejercicios de aplicación de matemáticas financieras [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la función principal del Valor Presente Neto (VPN)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Medir la rentabilidad de un proyecto en términos absolutos.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Comparar inversiones en función de su tiempo de recuperación.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Determinar la cantidad exacta de inversión necesaria para un proyecto.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Identificar si un proyecto tiene costos ocultos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El VPN permite evaluar la rentabilidad absoluta de un proyecto descontando los flujos de efectivo futuros a valor presente.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué sucede si el VPN de un proyecto es igual a cero?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El proyecto genera pérdidas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'No hay ganancia ni pérdida, es un punto de equilibrio.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Es preferible no ejecutar el proyecto.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Indica que la inversión inicial debe aumentar.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un VPN de cero significa que el proyecto recupera su inversión sin generar pérdidas ni ganancias adicionales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué representa el Índice de Rentabilidad (IR) en la evaluación de proyectos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El porcentaje de ganancia sobre la inversión inicial.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La relación entre los ingresos y los costos operativos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La rentabilidad relativa de un proyecto en comparación con su inversión.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La diferencia entre el VPN y la TIR.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El IR mide la relación entre el valor generado por un proyecto y su inversión inicial, permitiendo comparar la rentabilidad relativa de diferentes opciones.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cómo afecta la tasa de descuento al cálculo del VPN?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'A mayor tasa de descuento, mayor será el VPN.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una tasa de descuento más alta reduce el VPN.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La tasa de descuento no tiene efecto en el VPN.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Un cambio en la tasa de descuento solo afecta la inversión inicial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'A medida que la tasa de descuento aumenta, los flujos de efectivo futuros se reducen en términos de valor presente, disminuyendo el VPN.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué mide la Tasa Interna de Retorno (TIR)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La rentabilidad esperada de un proyecto expresada en porcentaje.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'El tiempo necesario para recuperar la inversión inicial.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'El rendimiento absoluto de un proyecto sin considerar su escala.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La cantidad de efectivo generada por un proyecto cada año.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La TIR representa la tasa a la que el VPN es igual a cero, reflejando la rentabilidad porcentual del proyecto.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
