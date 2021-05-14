import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
// import * as usersService from '../../utilities/users-service';
import * as ordersAPI from '../../utilities/orders-api';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
// import NavBar from '../../components/NavBar/NavBar';
import OrderList from '../../components/OrderList/OrderList';
import { useState, useEffect } from 'react';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);


  useEffect(function() {
    async function getOrders() {
      const updatedOrders = await ordersAPI.getAll();
      setOrders(updatedOrders);
      setActiveOrder(updatedOrders[0]);
    }
    getOrders();
  }, []);

  async function deleteOrder(id) {
    await ordersAPI.deleteOrder(id);
    const updatedOrders = await ordersAPI.getAll();
    setOrders(updatedOrders);
    setActiveOrder(null);
  }


  return (
    <main className="OrderHistoryPage">
      <aside>
        {/* <NavBar user={user} set={setUser}/> */}
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <br/>
        <br/>
        <br/>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      
      <div>
        <OrderList orders={orders} setActiveOrder={setActiveOrder} activeOrder={activeOrder} deleteOrder={deleteOrder} />
      </div>
      <div>
        <OrderDetail order={activeOrder} />
      </div>



    </main>
  );
}