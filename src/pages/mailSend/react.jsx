import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [cartItems, setCartItems] = useState([
    { name: 'Item1', quantity: 2 },
    { name: 'Item2', quantity: 1 }
  ]);

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        email,
        cartItems
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Ошибка отправки почты:', error);
      alert('Error sending email');
    }
  };

  return (
    <div>
      <h1>Отправка заказа на email</h1>
      <input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail}>Отправить заказ</button>
    </div>
  );
};

export default App;