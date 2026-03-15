import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

/**
 * REDUX TOOLKIT: Contador Global
 * 
 * ¿PARA QUÉ SIRVE?: Redux sirve para manejar datos que muchos componentes 
 * necesitan compartir (Estado Global), sin tener que pasar "props" manualmente.
 * 
 * ¿CÓMO FUNCIONA?:
 * - Slice: Contiene el valor inicial y las funciones (reducers) que cambian el valor.
 * - Store: Es la caja central donde vive el estado de toda la aplicación.
 * - useSelector: Lo usamos para leer el valor del contador.
 * - useDispatch: Lo usamos para enviar "acciones" (como mandar una orden) al store.
 */

// 1. Definimos la lógica
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

const { increment, decrement } = counterSlice.actions;

// 2. Creamos el almacén (Store)
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

// 3. Componente que usa Redux
const CounterApp = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '2px solid #7c3aed', borderRadius: '10px' }}>
      <h3>Redux Básico (Global State)</h3>
      <p>Valor Global: <strong>{count}</strong></p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
};

const ReduxExample = () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
);

export default ReduxExample;
