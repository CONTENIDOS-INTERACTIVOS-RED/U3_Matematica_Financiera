<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. TIR y TIRA'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La evaluación de la rentabilidad de un proyecto es un aspecto fundamental en la toma de decisiones financieras. Antes de asignar recursos a una inversión, es necesario conocer si generará los rendimientos esperados y si resulta una opción viable en comparación con otras alternativas disponibles. Para ello, existen diversas herramientas que permiten medir la eficiencia de una inversión y determinar su impacto económico a lo largo del tiempo.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Uno de los métodos más utilizados en este análisis es la Tasa Interna de Retorno (TIR), un indicador que calcula la rentabilidad esperada de un proyecto, expresada en porcentaje. Su utilidad radica en la posibilidad de comparar diferentes inversiones sin importar su tamaño, proporcionando una referencia clara sobre cuál puede ofrecer un mejor rendimiento. Sin embargo, la TIR presenta ciertas limitaciones, especialmente en lo relacionado con la reinversión de los flujos de efectivo generados. En este contexto, surge la Tasa Interna de Retorno Ajustada (TIRA), una variante que corrige esta limitación al considerar que los ingresos obtenidos se reinvierten a una tasa distinta, generalmente más acorde con las condiciones del mercado.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Comprender la diferencia entre la TIR y la TIRA, permite tomar decisiones más fundamentadas al evaluar la rentabilidad de un proyecto, evitando sobreestimaciones y optimizando la asignación de recursos. Estos indicadores, cuando se utilizan en conjunto con otras herramientas como el Valor Presente Neto (VPN), proporcionan una visión más completa del desempeño financiero de una inversión, facilitando la selección de proyectos económicamente viables.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] TIR
    
    p.mb-4 La Tasa Interna de Retorno (TIR) es un indicador financiero clave en la evaluación de proyectos de inversión, ya que permite medir su rentabilidad en términos porcentuales.

    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") TIR
            p.mb-4(data-aos="fade-right") En el PDF <b>TIR</b>, se explican los conceptos esenciales de este método, su utilidad en la toma de decisiones y la forma en que se determina la tasa de descuento que iguala el Valor Presente Neto (VPN) a cero. A través de ejemplos prácticos, se analizará cómo calcular e interpretar la TIR, sus ventajas y limitaciones, así como su aplicación en la comparación de diferentes alternativas de inversión.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> TIR.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    .row.mb-4.mb-5
      .col-lg-4(data-aos="fade-left")
          figure.justify-content-center.d-flex
            img(src="@/assets/curso/tema2/4.png") 
          
      .col-lg-8(data-aos="fade-rigth").align-content-center.bg-color-4.p-4
        p La fórmula general es:
        figure.justify-content-center.d-flex
            img(src="@/assets/curso/tema2/5.svg", style="width: 240px;")
        p Donde:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-6
            p.mb-0 CF<sub>t</sub>= Flujo de efectivo en el período t.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-6
            p.mb-0 TIR= Tasa interna de retorno desconocida.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-6
            p.mb-0 n = Número de períodos del proyecto.
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right.bg-color-6
            p.mb-0 C<sub>0</sub>= Inversión inicial.
    
    h2(data-aos="fade-left") Métodos para calcular la TIR
    p.mb-5 Debido a la naturaleza no lineal de la ecuación de la TIR, su cálculo generalmente no puede resolverse de manera algebraica y requiere métodos iterativos o herramientas computacionales como Excel o calculadoras financieras.

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Método de aproximaciones sucesivas")
            p Este método consiste en probar diferentes valores de TIR en la ecuación del VPN hasta encontrar el valor que lo haga igual a cero.
          div(numero="2" titulo="Uso de Excel") 
            p En Excel, la función =TIR() permite calcular automáticamente la TIR ingresando los flujos de efectivo como argumento.
          div(numero="3" titulo="Interpretación") 
            p La TIR no es solo un número; es una herramienta para decidir si un proyecto vale la pena. Su interpretación es sencilla:
            ul.lista-ul--color
              li.mb-0.d-flex
                i
                p.mb-0 • Si la TIR es mayor que el costo del capital
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6.ms-4
                p.mb-0 El proyecto es rentable.
              li.mb-0.d-flex
                i
                p.mb-0 • Si la TIR es igual al costo del capital 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6.ms-4
                p.mb-0 El proyecto apenas recupera la inversión.
              li.mb-0.d-flex
                i
                p.mb-0 • Si la TIR es menor que el costo del capital 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6.ms-4
                p.mb-0 El proyecto no es viable
            p Por ejemplo, si una empresa tiene un costo del capital del 12 % y la TIR del proyecto es 18 %, significa que el negocio generará un rendimiento superior a su costo, lo que lo hace atractivo.
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        h2(data-aos="fade-left") Ejemplo 1. Cálculo de la TIR en un proyecto de inversión
        p.mb-5 Una empresa evalúa un proyecto que requiere una inversión inicial de $50,000 y espera generar los siguientes flujos de efectivo durante 4 años:

        .row.mb-5.justify-content-center
          .col-lg-8
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Flujo de efectivo ($)
                tbody
                  tr.bg-color-4
                    td 1
                    td 15,000
                  tr.bg-color-4
                    td 2
                    td 20,000
                  tr.bg-color-4
                    td 3
                    td 18,000
                  tr.bg-color-4
                    td 4
                    td 17,000
    
    .row.mb-4.mb-5
      .col-lg-4(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/tema2/7.png") 
          
      .col-lg-8(data-aos="fade-rigth").align-content-center.order-2.order-lg-1
        p Nuestro objetivo es calcular la Tasa Interna de Retorno (TIR), que es la tasa de descuento que hace que el Valor Presente Neto (VPN) sea igual a cero.
        p La ecuación que debemos resolver:
        .bg-color-4.p-4.mb-3
          p.mb-0 0 = (15,000 / (1 + TIR)^1) + (20,000 / (1 + TIR)^2) + (18,000 / (1 + TIR)^3) + (17,000 / (1 + TIR)^4) - 50,000
        p Dado que la TIR no se puede calcular algebraicamente, utilizaremos el método de prueba y error.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Probar con TIR = 10 % (0.10).
              p Sustituyamos TIR = 10 % en la ecuación:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 VPN = (15,000 / (1.10)^1) + (20,000 / (1.10)^2) + (18,000 / (1.10)^3) + (17,000 / (1.10)^4) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 VPN = (15,000 / 1.10) + (20,000 / 1.21) + (18,000 / 1.331) + (17,000 / 1.4641) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 VPN = 13,636.36 + 16,528.93 + 13,525.60 + 11,612.65 - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 VPN = 55,303.54 - 50,000 = 5,303.54
              p Dado que el VPN es positivo, significa que la TIR es mayor a 10 %.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Probar con TIR = 15 % (0.15).
              p Sustituyamos TIR = 15 % en la ecuación:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / (1.15)^1) + (20,000 / (1.15)^2) + (18,000 / (1.15)^3) + (17,000 / (1.15)^4) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / 1.15) + (20,000 / 1.3225) + (18,000 / 1.5209) + (17,000 / 1.7490) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 13,043.48 + 15,118.28 + 11,827.84 + 9,717.53 - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 49,707.13 - 50,000 = -292.87
              p El VPN ahora es negativo, lo que significa que la TIR está entre 10 % y 15 %.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Probar con TIR = 12 % (0.12).
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / (1.12)^1) + (20,000 / (1.12)^2) + (18,000 / (1.12)^3) + (17,000 / (1.12)^4) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / 1.12) + (20,000 / 1.2544) + (18,000 / 1.4049) + (17,000 / 1.5735) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 13,392.86 + 15,940.48 + 12,810.23 + 10,806.30 - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 52,949.87 - 50,000 = 2,949.87
              p El VPN es positivo, lo que indica que la TIR es menor a 15 % pero mayor a 12 %.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Refinar con TIR = 13.5 % (0.135).
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / (1.135)^1) + (20,000 / (1.135)^2) + (18,000 / (1.135)^3) + (17,000 / (1.135)^4) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = (15,000 / 1.135) + (20,000 / 1.2883) + (18,000 / 1.4639) + (17,000 / 1.6647) - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 13,216.38 + 15,535.03 + 12,299.78 + 10,216.52 - 50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 ⇨VPN = 51,267.71 - 50,000 = 1,267.71
              p Todavía es positivo, por lo que la TIR está cerca de 13.5 % pero debe ser un poco más alta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Uso de Excel para precisión.
              p Para obtener el valor exacto de la TIR, podemos usar la función de Excel: =TIR(A1:A5)
              p Si en las celdas A1:A5 están los flujos de efectivo:
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
                      td 20,000
                    tr.bg-color-4
                      td 3
                      td 18,000
                    tr.bg-color-4
                      td 4
                      td 17,000
              p El resultado nos dará TIR ≈ 13.78 %.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7
              h5 Interpretación del resultado.
              p Dado que la TIR del proyecto es 13.78 %, y si el costo del capital de la empresa es 12 %, el proyecto es rentable porque la TIR es mayor al costo del capital.
              p Si la empresa tiene otro proyecto con una TIR más alta, debería considerar cuál de los dos es mejor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              h5 Resumen de las pruebas.
              .tabla-a.color-acento-botones.mb-3
                table
                  thead
                    tr
                      th.bg-color-5 TIR (%)
                      th.bg-color-5 VPN ($)
                      th.bg-color-5 Decisión
                  tbody
                    tr.bg-color-4
                      td 10 %
                      td 5,303.54
                      td Positivo (TIR mayor)
                    tr.bg-color-4
                      td 12 %
                      td 2,949.87
                      td Positivo (TIR mayor)
                    tr.bg-color-4
                      td 13.5 %
                      td 1,267.71
                      td Positivo (cercano a 0)
                    tr.bg-color-4
                      td 15 %
                      td –292.87
                      td Negativo (TIR menor)
                    tr.bg-color-4
                      td.text-bold 13.78 % (Excel)
                      td.text-bold 0
                      td.text-bold Valor exacto de la TIR
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] TIRA
    
    p.mb-4 La Tasa Interna de Retorno Ajustada (TIRA) es una variante mejorada de la Tasa Interna de Retorno (TIR) que busca corregir una de sus principales limitaciones: la suposición que los flujos de efectivo generados por un proyecto de inversión se reinvierten a la misma tasa de la TIR. En la práctica, esta suposición no siempre es realista, debido a que los rendimientos obtenidos de un proyecto no necesariamente pueden reinvertirse a la misma rentabilidad proyectada, lo que puede llevar a sobrestimar el atractivo de una inversión.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") La TIRA toma en cuenta que los flujos de efectivo generados a lo largo de la vida del proyecto pueden reinvertirse a una tasa de reinversión diferente, generalmente el Costo de Capital Promedio Ponderado (WACC) o una tasa de oportunidad definida por la empresa o el inversionista. De esta manera, la TIRA proporciona un cálculo más preciso y conservador de la rentabilidad real del proyecto, ajustando la metodología para reflejar condiciones más cercanas a la realidad del mercado.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una de las diferencias claves entre la TIR y la TIRA es que la TIR supone que todos los flujos de efectivo se reinvierten a la misma tasa de retorno del proyecto, lo que puede generar resultados optimistas en escenarios donde esa tasa no es sostenible en el tiempo. En cambio, la TIRA separadamente calcula la reinversión de los flujos de efectivo a una tasa más realista, ofreciendo un análisis más confiable y ajustado a las condiciones del mercado.
        
        h5.mb-5 Conozcamos algunos aspectos importantes de la TIRA:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/16.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="-5%" y="57.5%" numero="+")
                h5 Primero
                p El uso de la TIRA es particularmente importante en proyectos donde se espera que los flujos de efectivo generados sean significativos y que, en la práctica, deban reinvertirse en instrumentos financieros con rentabilidades más bajas que la TIR inicial. Por ejemplo, en una empresa que desarrolla un proyecto con una TIR del 18 %, los excedentes generados podrían reinvertirse en bonos o fondos del mercado monetario con una rentabilidad del 8 %. Si la TIR tradicional se utiliza sin ajustes, el resultado podría indicar un rendimiento mayor al real, mientras que la TIRA reflejaría con mayor precisión la rentabilidad efectiva del proyecto.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="17%" numero="+")
                h5 Segundo
                p Evita los problemas matemáticos que pueden surgir con la TIR, como la presencia de múltiples tasas internas de retorno cuando los flujos de efectivo cambian de signo más de una vez a lo largo del proyecto. En estos casos, la TIR puede generar más de un valor posible, lo que dificulta su interpretación. La TIRA soluciona esta ambigüedad al utilizar una metodología más estructurada que incorpora la tasa de reinversión de los flujos de efectivo.
    
              .bg-color-white.box-shadow.p-3(x="105%" y="56%" numero="+")
                h5 Tercero
                p La TIRA también es útil en la comparación de proyectos con diferentes estructuras de flujo de efectivo. Cuando dos proyectos tienen la misma TIR, pero diferentes patrones de generación de ingresos y posibilidades de reinversión, la TIRA permite distinguir cuál de ellos realmente ofrece una mejor rentabilidad ajustada al mercado.
    
    p.mb-4 Dado que la TIRA proporciona una estimación más precisa del rendimiento de un proyecto, es una métrica recomendada para inversionistas y analistas financieros que buscan evaluar el desempeño real de una inversión en función de tasas de reinversión más realistas. Su aplicación es especialmente relevante en entornos donde los flujos de efectivo deben destinarse a inversiones complementarias con retornos diferentes a la TIR calculada.

    .row.mb-4.mb-5
      .col-lg-4(data-aos="fade-left").mb-3.mb-lg-0
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/tema2/17.png") 
          
      .col-lg-8(data-aos="fade-rigth").align-content-center
        p En conclusión, la Tasa Interna de Retorno Ajustada (TIRA) representa una mejora significativa en el análisis de rentabilidad de proyectos de inversión, dado que elimina la suposición poco realista que todos los flujos de efectivo pueden reinvertirse a la misma tasa de la TIR. Al considerar una tasa de reinversión distinta, la TIRA proporciona una evaluación más precisa y confiable del retorno esperado de un proyecto, permitiendo a las empresas y a los inversionistas tomar decisiones más fundamentadas sobre sus inversiones y asignación de capital.
        .bg-color-4.p-4.mb-3
          p Formulación financiera en Excel
          figure.justify-content-center.d-flex
              img(src="@/assets/curso/tema2/18.svg", style="width: 300px;")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 VF<sub>{Flujos Positivos}</sub>  = Valor futuro de los flujos de efectivo positivos, reinvertidos a la tasa de reinversión.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 C<sub>0</sub> = Inversión inicial.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 n = Número de períodos del proyecto.
    
    p.mb-4 Recuerde que la TIRA es más precisa que la TIR porque usa una tasa de reinversión adecuada en lugar de asumir que los fondos se reinvierten al mismo rendimiento del proyecto.

    h2(data-aos="fade-left") Ejemplo 1. Cálculo de la TIRA en un proyecto de inversión
    p.mb-5 Una empresa evalúa un proyecto con una inversión inicial de $40,000 y los siguientes flujos de efectivo durante 4 años:

    .row.mb-4.mb-5
      .col-lg-4(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0
        figure.justify-content-center.d-flex
          img(src="@/assets/curso/tema2/19.png") 
          
      .col-lg-8(data-aos="fade-rigth").align-content-center.order-2.order-lg-1
        p En conclusión, la Tasa Interna de Retorno Ajustada (TIRA) representa una mejora significativa en el análisis de rentabilidad de proyectos de inversión, dado que elimina la suposición poco realista que todos los flujos de efectivo pueden reinvertirse a la misma tasa de la TIR. Al considerar una tasa de reinversión distinta, la TIRA proporciona una evaluación más precisa y confiable del retorno esperado de un proyecto, permitiendo a las empresas y a los inversionistas tomar decisiones más fundamentadas sobre sus inversiones y asignación de capital.
        .row.justify-content-center
          .col-lg-10
            .tabla-a.color-acento-botones.mb-3.pst
              table
                thead
                  tr
                    th.bg-color-5 Año
                    th.bg-color-5 Flujo de Efectivo ($)
                tbody
                  tr.bg-color-4
                    td 1
                    td 10,000
                  tr.bg-color-4
                    td 2
                    td 12,000
                  tr.bg-color-4
                    td 3
                    td 15,000
                  tr.bg-color-4
                    td 4
                    td 18,000
        p El costo del capital de la empresa es 10 %, y esta es la tasa de reinversión que usaremos en la TIRA.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Calcular el Valor Futuro (VF) de los flujos positivos.")
            p Cada flujo de efectivo se reinvertirá a una tasa del 10 % anual hasta el último año (año 4).
            p VF = CF_1 (1 + 0.10)³ + CF_2 (1 + 0.10)² + CF_3 (1 + 0.10)¹ + CF_4
            p Sustituyendo valores:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = 10,000 (1.10)³ + 12,000 (1.10)² + 15,000 (1.10)¹ + 18,000
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = 10,000 (1.331) + 12,000 (1.21) + 15,000 (1.10) + 18,000
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = 13,310 + 14,520 + 16,500 + 18,000
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 VF = 62,330
            p El Valor Futuro de los flujos de efectivo reinvertidos es $62,330 en el año 4.
            
          div(numero="2" titulo="Aplicar la fórmula de la TIRA.") 
            p Ahora usamos la ecuación de TIRA para determinar la tasa que iguala este valor futuro con la inversión inicial.
            p TIRA = (VF / C₀)^(1/n) – 1
            p Sustituyendo valores:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 TIRA = (62,330 / 40,000)^(1/4) – 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 TIRA = (1.55825)^(0.25) – 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 TIRA = 1.1166 – 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 TIRA = 0.1166 = 11.66 %
            
          div(numero="3" titulo="Comparación con la TIR tradicional.") 
            p Si hubiéramos calculado la TIR tradicional, habríamos obtenido un 13.5 %.
            .tabla-a.color-acento-botones.mb-3
              table
                thead
                  tr
                    th.bg-color-5 Método
                    th.bg-color-5 Resultado
                tbody
                  tr.bg-color-4
                    td TIR
                    td 13.5 %
                  tr.bg-color-4
                    td TIRA
                    td 11.66 %
            p La TIRA es más baja porque refleja una reinversión más realista a una tasa del 10 %, en lugar de asumir una reinversión al mismo rendimiento del proyecto (13.5 %).
    
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esto demuestra que la TIR puede sobreestimar la rentabilidad, mientras que la TIRA ofrece una visión más precisa.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/47688" target="_blank" rel="noopener noreferrer") Apraiz Larragán, A. (2003). Fundamentos de matemática financiera: (2 ed.). Editorial Desclée de Brouwer. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.sage.com/es-es/blog/tasa-interna-de-retorno-tir-que-es-y-como-se-calcula/ " target="_blank" rel="noopener noreferrer") Sage. (2023, 15 de enero). Tasa interna de retorno (TIR): ¿Qué es y cómo se calcula?.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://theinvestoru.com/blog/que-es-la-tir/ " target="_blank" rel="noopener noreferrer") The Investor U. (2023, 10 de julio). TIR: ¿Qué es la Tasa Interna de Retorno y para qué sirve?. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hOY9xZjl8dE " target="_blank" rel="noopener noreferrer") Andres Ricardo Riveros Tarazona. (2019, 21 de octubre). Indicador de evaluación de proyectos: Tasa Interna de Retorno - TIR [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=z5vH5LWDbOg" target="_blank" rel="noopener noreferrer") Oscar Caita. (2022, 31 de octubre). Evalúa la viabilidad: VAN Y TIR | Ejemplo [Vídeo]. YouTube. 
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
