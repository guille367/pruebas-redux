- Classes:

- Imports:

"import React from 'react'"
Va a buscar las carpetas con el nombre "react" y buscar el objeto React para importarlo.

"import { Component } from 'react'"
Extrae del objeto React (dentro de la carpeta react) y obtiene la propiedad Component
en una variable con el mismo nombre.

- Destructuring

let q = { a:3, b:4, c:4 };
let { a } = q;

a == 3
a !== q.a

De la misma forma...

const fnPrueba = ({ a }) => { console.log(a) }

fnPrueba(q) == 3;