import React, { useState } from 'react';

/**
 * EJEMPLO 1: Contador Básico
 * 
 * ¿PARA QUÉ SIRVE?: Es el ejemplo fundamental para entender el estado en React.
 * Permite guardar un dato numérico que cambia con la interacción del usuario.
 * 
 * ¿CÓMO FUNCIONA?: 
 * - 'count' es la variable que guarda el número actual.
 * - 'setCount' es la función que usamos para cambiar ese número.
 * - Cada vez que llamamos a 'setCount', React vuelve a dibujar (renderizar) el componente.
 */
export const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '2px solid #3b82f6', padding: '20px', borderRadius: '10px', marginBottom: '1rem' }}>
            <h3>Ejemplo 1: Contador Básico</h3>
            <p>Valor actual: <strong>{count}</strong></p>
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <button onClick={() => setCount(count - 1)}>Restar</button>
        </div>
    );
};

/**
 * EJEMPLO 2: Input de Texto
 * 
 * ¿PARA QUÉ SIRVE?: Sirve para capturar lo que el usuario escribe en tiempo real.
 * 
 * ¿CÓMO FUNCIONA?:
 * - 'text' guarda lo que hay escrito en el cuadro de texto.
 * - Al escribir (evento onChange), actualizamos el estado con el nuevo valor.
 */
export const InputExample = () => {
    const [text, setText] = useState('');

    return (
        <div style={{ border: '2px solid #f59e0b', padding: '20px', borderRadius: '10px' }}>
            <h3>Ejemplo 2: Input de Texto</h3>
            <input 
                type="text" 
                placeholder="Escribe algo..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Estás escribiendo: <strong>{text}</strong></p>
        </div>
    );
};

// Componente principal que agrupa ambos ejemplos
const StateExamples = () => (
    <div style={{ fontFamily: 'sans-serif' }}>
        <h1>Ejemplos de State (useState)</h1>
        <SimpleCounter />
        <InputExample />
    </div>
);

export default StateExamples;
