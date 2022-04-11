import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { fetchUsers } from 'store/customerReducer';
import { asyncAddCashAction, asyncGetCashAction } from 'store/cashReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch(asyncAddCashAction())}>Пополнить счет</button>
        <button onClick={() => dispatch(asyncGetCashAction())}>Снять со счета</button>
        <button onClick={() => dispatch(fetchUsers())}>Получить клиентов из базы</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => <div>{customer.name}</div>)}
        </div>
        : <div>Клиенты отсутствуют!</div>}
    </div>
  );
}

export default App;
