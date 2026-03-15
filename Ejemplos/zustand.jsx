import React from 'react';
import { create } from 'zustand';

/**
 * ZUSTAND: Contador Global Simple
 * 
 * ¿PARA QUÉ SIRVE?: Es una alternativa moderna y muy simple a Redux.
 * Permite crear un estado fuera de los componentes y usarlo donde quieras.
 * 
 * ¿CÓMO FUNCIONA?:
 * - create: Función de Zustand para crear un "Store" (almacén).
 * - set: Función para actualizar los datos dentro del almacén.
 * - Custom Hook: Usamos el hook 'useCounterStore' para sacar los datos cómodamente.
 */

// 1. Creamos el almacén (Store)
const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// 2. Componente que usa el almacén
const ZustandCounter = () => {
    const { count, increment, decrement } = useCounterStore();

    return (
        <div style={{ padding: '20px', border: '2px solid #10b981', borderRadius: '10px' }}>
            <h3>Zustand (Global State)</h3>
            <p>Valor Global: <strong>{count}</strong></p>
            <button onClick={increment}>Sumar +1</button>
            <button onClick={decrement}>Restar -1</button>
        </div>
    );
};

export default ZustandCounter;
