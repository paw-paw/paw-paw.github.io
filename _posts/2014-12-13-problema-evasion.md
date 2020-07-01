---
title: El Problema de la Evasión
category: Miscelaneos
excerpt: "Análisis matemático de las mecánicas usadas en el cálculo de la evasión. ¿Cómo afecta esto al balance de las distintas fuentes de evasión del juego?"
header:
  teaser: /assets/images/teasers/pa-evasion.jpg
  og_image: /assets/images/teasers/pa-evasion.jpg
---

Los skills de evasión vienen directamente de Warcraft III y fueron heredados de ahí por el mapa de DotA. La evasión es un concepto clásico cuyo origen puede trazarse a los primeros RPG's, esos de dados, mapas y tablas. En pocas palabras, la evasión te otorga la chance de evitar un ataque. Bastante simple. Y, en cierta forma, bastante interesante. *Publicado originalmente en Dota is Kill el 13 de diciembre de 2014*

Lo interesante de este concepto es que la función del beneficio de la evasión no crece de forma lineal, a pesar de que muchos creen lo contrario. Este es un error de concepto en el cual muchos diseñadores de juegos han caído, Icefrog y Blizzard incluidos: El Demon Hunter obtenía 10/20/30% de evasión, la Phantom Assassin obtiene 20/30/40/50%. Ambos skills son balanceados linealmente, con un aumento de 10 por nivel.

Ahora bien, muchos se preguntarán cuál es el problema con que la cantidad de evasión crezca de forma lineal. La respuesta está en el párrafo anterior: el beneficio de la evasión no crece de forma lineal. De esta forma, hacer crecer tu evasión de 40% a 50% (Blur de nivel 3 a 4) otorga un beneficio a la HP mucho más grande que incrementarla de 20% a 30% (Blur de nivel 1 a 2). Les pongo un ejemplo sencillísimo:

| Cantidad de Evasión                   | 0% (0) | 50% (.50) | 100% (1) |
|---------------------------------------|--------|-----------|----------|
| Factor de Incremento de la EHP física | 1      | 2         | ∞        |

El factor Incremento de Resistencia Física se multiplica por la EHP física (concepto con el cual necesito que se familiaricen, que significa HP efectiva y toma en cuenta, para el cálculo de la EHP física, la armadura y otros modificadores) para obtener la nueva EHP física, después de aplicado el modificador evasión. ¿No comprenden por qué 100% de evasión aumenta al infinito la resistencia física? Piensen un poco en ello. Piensen en un tipo al cual nunca puedes pegarle. Por más que tenga solo 1, 10, 1000, 10000 de HP, ¿no tendría una resistencia infinita al no poder recibir un solo golpe?

## Encontrando la fórmula de beneficio de la Evasión

Ahora bien, mi punto es el siguiente: de 0% de evasión a 50% de evasión tenemos un incremento de 1. Si el beneficio de la evasión realmente fuese lineal, el incremento de 50% a 100% sería también de 1. Sin embargo, podemos ver que salta hacia el infinito. No puede ser una función lineal. Una función lineal tiene el siguiente aspecto:

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/posts/evasion1.png" alt="Gráfica de función lineal">

Las funciones lineales solo pueden tender al infinito para x=infinito. Sin embargo, nuestra función tiende al infinito cuando la evasión es de 100%. De manera intuitiva se cree que la función b(e): beneficio por evasión donde e es la cantidad de evasión tiene la siguiente forma:

*b(e)=m\*e+p*

Cuya curva hemos visto ya arriba. Los valores de m y p solo modifican qué tan empinada está la curva y en qué lugar del plano cartesiano se encuentra. Sigue siendo similar a la gráfica mostrada y, lo más importante, sigue tendiendo al infinito solo cuando e=∞.

Entonces, es nuestro deber (?) encontrar un tipo de función que no sea lineal y que refleje fielmente el beneficio otorgado por la evasión de acuerdo a su porcentaje. Esta función será llamada b(e) y reemplazará a la anterior (cuyo único objetivo era mostrar que estaba errada). ¿Qué sabemos de esta b(e) nueva y mejorada? Volvemos a nuestro cuadro:

* Cuando e=0 => b(e)=1
* Cuando e=0.5 => b(e)=2
* Cuando e=1 => b(e)=∞

¿Qué función cumple con lo expuesto por estos datos? Para empezar, una de las primeras funciones con tendencia al infinito que nos enseñan es 1/x. Llamémosla 1/e para que concuerde con nuestra función. 1/e tiende al infinito cuando es 0. Pero nosotros queremos que tienda al infinito para e=1. Sencillo: cambiémosla por 1/(e-1). Ahora cumple tanto con el tercer requisito como con el primero. Pero cuando e=0.5, lo que nos da es -2 en lugar de 2. ¿Qué hacemos? Nada más sencillo que cambiar de signo a nuestra función. Quedaría de la siguiente forma:

*b(e)=1/(1-e)*

Cuya gráfica es la siguiente:

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/posts/evasion.png" alt="Gráfica de función inversa">

Es verdad que esta fórmula cumple con tener una gráfica como la que buscamos, pero hasta ahora no tenemos forma de saber si es la correcta, o qué sentido tiene. En realidad, el factor de (1-e) es el porcentaje de ataques que no son evadidos. Como solo hay dos resultados posibles (evadir o no evadir el ataque) entonces ambas probabilidades funcionan como inverso aditivo. Lo siguiente es una regla de tres simple inversa comparando el EHP físico recibiendo el 100% de los golpes (1) con el EHP físico evadiendo ataques (1-e).

## Aplicando la fórmula al caso Phantom  Assassin

No nos distraigamos. Tenemos ahora nuestra gráfica, la cual admitimos que es la gráfica de la verdadera función beneficio de la evasión. Ahora nos dedicamos a tabular un par de variables interesantes. Pondremos los valores del skill Blur de la Phantom Assassin y veremos de qué forma crece el beneficio:

| Nivel de Blur | Factor de Evasión | Beneficio en la EHP |
|---------------|-------------------|---------------------|
| 1             | .2                | 1.25                |
| 2             | .3                | 1.43                |
| 3             | .4                | 1.67                |
| 4             | .5                | 2                   |

Pues bien, esto demuestra que el beneficio no aumenta linealmente de ninguna forma. Del nivel 1 al nivel 2 otorga un beneficio de 0.18. De nivel 2 a nivel 3 otorga un 0.24. De nivel 3 a nivel 4 otorga nada más y nada menos que 0.33. Subir Blur de nivel 3 a 4 te otorga casi el doble de beneficio que subirlo de nivel 1 a nivel 2.

Ya que hemos confirmado, con los datos de la propia Phantom Assassin, que Blur está desbalanceado y que su beneficio no aumenta de forma constante en cada nivel que adquiere, debemos encontrar una forma de balancear Blur que haga aumentar de forma constante al beneficio.

¿Cómo lo hacemos?

Pues es simple: funciones inversas.

Una función inversa es muchas cosas. La página 147 del primer volumen de la Introducción al Análisis Matemático de Haaser, La Salle y Sullivan la explica bastante bien. Los tipos sabían del tema. Yo, no. Les mostraré unos cuantos ejemplos y espero me sigan el juego.

* Si f(x)=x+1 entonces su inversa es x-1
* Si f(x)=2*x entonces su inversa es x/2
* Si f(x)=7+2x entonces su inversa es (x-7)/2

Una forma práctica de hallar la inversa de una función f es reemplazar f(x) por x y x por f*(x). Llamaremos f* a la inversa de f, g* a la inversa de g y así. Una vez hayas entendido perfectamente a qué me refiero, podemos seguir. La función inversa de b(e) es e(b)=1-(1/b).

De esta forma podemos hallar la cantidad de evasión en base a un beneficio dado en lugar de hacer las cosas al revés, cosa que ya hicimos (hallar el beneficio en base a una cantidad de evasión determinada). Digamos (es solo un ejemplo dado a la ligera) que queremos mantener el beneficio real en niveles 1 y 4, pero hacer que escale correctamente. Armamos la siguiente tabla y usamos nuestra función inversa:

| Nivel de Blur | Beneficio en la EHP | Factor de Evasión |
|---------------|---------------------|-------------------|
| 1             | 1.25                | .2                |
| 2             | 1.43                | .33               |
| 3             | 1.67                | .43               |
| 4             | 2                   | .5                |

De forma que Blur otorgue 20/33/43/50% de evasión.

Hemos aproximado un tanto los decimales. El cambio en este ejemplo en particular puede no parecer grande, pero en realidad empieza a hacerse enorme una vez se supera la barrera del 50%, como veremos en el siguiente apartado.

## La cuestión Butterfly

Esta es otra de las cuestiones ridículas que provienen de la forma en la cual crece el beneficio de la evasión. ¿Recuerdan la gráfica de nuestra función b(e)? Acá está de nuevo:

<img src="{{ site.url }}{{ site.baseurl }}/assets/images/posts/evasion.png" alt="Gráfica de función inversa">

Si se dedican a observar su comportamiento, llegarán a la misma conclusión a la que llegamos antes: aumentar una evasión de 70% a 80% incrementa mucho más el beneficio que aumentarla de 10% a 20%. ¿Que qué tiene que ver eso con la Butterfly? Pues aquí lo explico.

Deberían saber ya que la posibilidad de evadir ataques de Butterfly no se suma directamente a la de Blur. No funciona como que Blur da 50% y Butterfly da 30% y sumadas dan 80%. Antes bien, ocurre un pequeño cálculo en cada ataque. Phantom Assassin tiene un 50% de evadir ese ataque con Blur. Si no lo evade con Blur (lo cual tiene 50% de posibilidades de ocurrir), tiene el 30% de chances de evadirlo con Butterfly, SOBRE EL PORCENTAJE ANTERIOR. el 30% del 50% es 15%. Esta es la cantidad que se suma al 50% de Blur.

Entonces, una Butterfly incrementa la evasión de la PA de 50% a 65%. *"¡Meh!"* Dirán los insensatos. *"Comprarla en un héroe sin evasión da el 30% completo y eso es mucho más... ¿no?"*

No.

Pueden comprobarlo ustedes mismos tabulando los datos en nuestra fórmula b(e)=1/(1-e):

| Factor de Evasión | Beneficio en la EHP |
|-------------------|---------------------|
| 0                 | 1                   |
| .35               | 1.54                |
| .5                | 2                   |
| .675              | 3.08                |

Como ven, Butterfly otorga al héroe promedio un beneficio de 0.54. Para una Phantom Assassin, por otro lado, el beneficio es el doble.

¿Por qué sucede esto? Pues pueden descubrirlo viendo la gráfica: a medida que la cantidad porcentual de evasión se aproxima a 100%, el beneficio que otorga empieza a dispararse. Una evasión lo suficientemente alta simplemente se caga en todo y en todos. Un aumento, por mínimo que sea, cuando la evasión es suficientemente alta, es devastador. De hecho, el salto en beneficio entre .5 y .675 es el mismo que el salto entre 0 y .5.

Para jugar un poco más con el concepto, veamos qué pasa en un héroe promedio que compra dos Butterflies:

| Factor de Evasión | Beneficio en la EHP |
|-------------------|---------------------|
| 0                 | 1                   |
| .35               | 1.54                |
| .57               | 2.38                |

Y sí: la segunda Butterfly otorga mucha más resistencia física que la primera.

## Conclusiones

Es posible que Icefrog no sepa de esto, pero lo dudo. El hombre es una máquina y conocía todas las curiosidades, por mínimas que sean, del sistema de Warcraft III. Me inclino por pensar que simplemente decidió que la diferencia entre cantidad de evasión y beneficio real era lo suficientemente pequeña como para ser descartada. Como sabemos, Icefrog ha preferido siempre unos números bonitos. Y es más bonito que la cantidad de evasión aumente de forma constante por nivel. Esto podía servir y ser ignorado cuando solo existían Drunken Brawler y Jinada con 25% de evasión (Sí, Jinada antes daba evasión) y Blur con 30%. Y, como ya hemos visto antes, cuando la cantidad de evasión es lo suficientemente pequeña, las diferencias con el beneficio real son realmente ínfimas. Sin embargo, ahora existe Blur con 50% y Blur+Butterfly con 67.5%: las diferencias empiezan a hacerse más evidentes.