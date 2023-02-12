import "./livreurCss.css";
import React, { useState } from "react";

const CommandCard = ({ order }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="command-card">
      <h3>Commande #{order.id}</h3>
      <p>Adresse de livraison: {order.deliveryAddress}</p>
      <p>Nom du client: {order.customerName}</p>
      <p>Montant: {order.amount}</p>
      {!isAccepted && (
        <button onClick={handleAccept}>Accepter</button>
      )}
      {isAccepted && <p>Commande acceptée</p>}
    </div>
  );
};

const DeliveryPage = () => {
  const [acceptedOrderId, setAcceptedOrderId] = useState(null);
  const orders = [
    {
      id: 1,
      deliveryAddress: "123 Main St.",
      customerName: "John Doe",
      amount: 25,
    },
    {
      id: 2,
      deliveryAddress: "456 Oak Ave.",
      customerName: "Jane Doe",
      amount: 15,
    },
    {
      id: 3,
      deliveryAddress: "789 Pine St.",
      customerName: "Jim Smith",
      amount: 35,
    },
  ];

  return (
    <div className="delivery-page">
      <h2>Commandes en attente</h2>
      {orders.map((order) => (
        <CommandCard
          key={order.id}
          order={order}
          isAccepted={acceptedOrderId === order.id}
          onAccept={() => {
            setAcceptedOrderId(order.id);
          }}
        />
      ))}
    </div>
  );
};

export default DeliveryPage;
