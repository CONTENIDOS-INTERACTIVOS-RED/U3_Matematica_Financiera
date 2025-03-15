<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. VPN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El Valor Presente Neto (VPN) es una herramienta fundamental en la evaluación financiera de proyectos de inversión, ya que permite medir su rentabilidad considerando el valor temporal del dinero.

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") VPN
            p.mb-4(data-aos="fade-right") En el PDF <b>VPN</b>, se explican los conceptos clave de este método, su importancia en la toma de decisiones estratégicas y la forma en que los flujos de efectivo futuros son descontados para determinar si un proyecto generará valor. A través de ejemplos prácticos, se analizará cómo calcular e interpretar el VPN, así como sus ventajas y limitaciones en la planificación financiera.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> VPN.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
    
    .row.mb-4.mb-5
      .col-lg-6(data-aos="fade-left")
        div.bg-color-4.p-4 
          p La fórmula general para calcular el valor presente neto es:
          figure.justify-content-center.d-flex
            img(src="@/assets/curso/tema1/1-2.svg", style="width: 180px;") 
          p Donde:
          p.mb-0 CF<sub>t</sub>= Flujo de efectivo en el período t.
          p.mb-0 i = Tasa de descuento (costo del capital o tasa mínima aceptable de rendimiento).
          p.mb-0 n = Número total de períodos del proyecto.
          p.mb-0 C<sub>0</sub>= Inversión inicial.

      .col-lg-6(data-aos="fade-rigth").align-content-center.bg-color-5.p-4
        p Interpretación:
        p.mb-0 Si VPN > 0: el proyecto generará valor y es financieramente viable.
        p.mb-0 Si VPN = 0: el proyecto no genera ni pérdidas ni ganancias, se encuentra en un punto de equilibrio.
        p.mb-0 Si VPN < 0: el proyecto no es rentable y no se recomienda llevarlo a cabo.
    
    h2(data-aos="fade-left") Ejemplo 1. Cálculo del VPN de un proyecto de inversión
    p.mb-5 Una empresa está evaluando la posibilidad de lanzar un nuevo producto. Para ello, requiere una inversión inicial de $15,000 y estima que generará ingresos netos anuales de $6,000 durante 4 años. La tasa de descuento utilizada para evaluar la inversión es del 10 % anual.
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7
              h5 Paso 1
              p Identificación de los datos.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Inversión inicial: C_0= 15,000 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Flujos de efectivo anuales: CF_t = 6,000 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Tasa de descuento: i = 0.10 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Número de períodos: n = 4 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7
              h5 Paso 2
              p Aplicar la fórmula del VPN.
              p VPN = (6,000 / (1 + 0.10)^1) + (6,000 / (1 + 0.10)^2) + (6,000 / (1 + 0.10)^3) + (6,000 / (1 + 0.10)^4) - 15,000
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Paso 3
              p Cálculo de los valores presentes.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Año 1: 6,000 / 1.10 = 5,454.55
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Año 2: 6,000 / (1.10)^2 = 6,000 / 1.21 = 4,958.68
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Año 3: 6,000 / (1.10)^3 = 6,000 / 1.331 = 4,508.80
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 Año 4: 6,000 / (1.10)^4 = 6,000 / 1.4641 = 4,098.00
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Paso 4
              p Restar la inversión inicial.
              p.mb-0 VPN = 5,454.55 + 4,958.68 + 4,508.80 + 4,098.00 - 15,000
              p VPN = 4,020.03
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Paso 5
              p Interpretación del resultado.
              p El VPN es $4,020.03, lo que indica que el proyecto generará una ganancia neta después de recuperar la inversión inicial. Dado que el VPN es positivo, el proyecto es viable y se recomienda su ejecución.
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        h2(data-aos="fade-left") Ejemplo 2. Comparación de dos proyectos
        p.mb-5 Una empresa tiene dos opciones de inversión y debe elegir la más rentable. Ambos proyectos requieren una inversión de $20,000, pero tienen flujos de efectivo diferentes y una tasa de descuento del 12 %.

        .row.mb-5.justify-content-center
          .col-lg-8
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Proyecto A ($)
                    th.bg-color-5 Proyecto B ($)
                tbody
                  tr.bg-color-4
                    td 1
                    td 5,000
                    td 3,000
                  tr.bg-color-4
                    td 2
                    td 7,000
                    td 5,000
                  tr.bg-color-4
                    td 3
                    td 6,000
                    td 7,000
                  tr.bg-color-4
                    td 4
                    td 4,000
                    td 9,000
        
        .row.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
          .col-lg-8
            LineaTiempoD.color-primario.large(data-aos="fade-left")
              div(numero="1" titulo="Paso 1")
                p Aplicar la fórmula del VPN para cada proyecto.
                h5 Proyecto A: 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_A = (5,000 / (1.12)^1) + (6,000 / (1.12)^2) + (7,000 / (1.12)^3) + (8,000 / (1.12)^4) - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_A = (5,000 / 1.12) + (6,000 / 1.2544) + (7,000 / 1.4049) + (8,000 / 1.5735) - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_A = 4,464.29 + 4,782.39 + 4,980.20 + 5,083.99 - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_A = 19,310.87 - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_A = -689.13
                h5 Proyecto B: 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_B = (7,000 / (1.12)^1) + (6,000 / (1.12)^2) + (5,000 / (1.12)^3) + (4,000 / (1.12)^4) - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_B = (7,000 / 1.12) + (6,000 / 1.2544) + (5,000 / 1.4049) + (4,000 / 1.5735) - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_B = 6,250.00 + 4,782.39 + 3,557.00 + 2,543.10 - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_B = 17,132.49 - 20,000
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 VPN_B = -2,867.51
              div(numero="2" titulo="Paso 2") 
                p Interpretación del resultado.
                p Ambos proyectos tienen un VPN negativo, lo que indica que ninguno de los dos es una inversión recomendable. Sin embargo, si se tuviera que elegir la mejor opción, el Proyecto A es menos riesgoso, porque su VPN es menos negativo que el del Proyecto B. Se recomienda no realizar la inversión en ninguno de los dos proyectos a menos que se puedan mejorar las condiciones de flujo de efectivo o reducir la inversión inicial.

 

             
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49157" target="_blank" rel="noopener noreferrer") García Boza, J. (2016). Matemáticas financieras: ( ed.). Difusora Larousse - Ediciones Pirámide. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69330" target="_blank" rel="noopener noreferrer") Serrano Rodríguez, J. (2008). Matemáticas financieras, conceptos y problemas: ( ed.). Universidad de los Andes. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.hubspot.es/sales/que-es-valor-presente-neto" target="_blank" rel="noopener noreferrer") HubSpot. (n.d.). Valor presente neto: qué es, cómo se calcula y ejemplos.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.esan.edu.pe/conexion-esan/vpn-y-tir-los-indices-para-evaluar-proyectos-de-inversion-1 " target="_blank" rel="noopener noreferrer") ESAN. (2019, 5 de agosto). VPN y TIR: los índices para evaluar proyectos de inversión.  
            


            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=a9eVmPeLKX4" target="_blank" rel="noopener noreferrer") Aprende y Verifica. (2020, 31 de julio). Cómo calcular el VALOR PRESENTE NETO de un proyecto de inversión (rápido y sencillo) [Vídeo]. YouTube.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=C62Qky6pZE4 " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019f, 16 de septiembre). Cómo calcular el valor presente de una anualidad perpetua y su comprobación [Vídeo]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
