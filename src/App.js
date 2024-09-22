import React, { useState } from "react";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import './App.css'; 

const App = () => {
  const [services, setServices] = useState([]);
  const [editableService, setEditableService] = useState(null);

  
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditableService(null);
  };

  
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  
  const editService = (service) => {
    setEditableService(service);
  };

  return (
    <div className="app-container">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editableService={editableService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        editService={editService}
      />
    </div>
  );
};

export default App;
