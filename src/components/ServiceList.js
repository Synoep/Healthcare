import React from "react";

const ServiceList = ({ services, deleteService, editService }) => {
  return (
    <div className="service-list">
      {services.length === 0 ? (
        <p>No services available. Add a service to get started.</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id} className="service-item">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p><strong>Price:</strong> ${service.price}</p>
              <button onClick={() => editService(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceList;
