import React, { useState, useEffect } from "react";

const ServiceForm = ({ addService, updateService, editableService }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editableService) {
      setName(editableService.name);
      setDescription(editableService.description);
      setPrice(editableService.price);
    }
  }, [editableService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      setError("All fields are required");
      return;
    }

    if (editableService) {
      updateService({ id: editableService.id, name, description, price });
    } else {
      addService({ name, description, price });
    }

    setName("");
    setDescription("");
    setPrice("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <h2>{editableService ? "Edit Service" : "Add a New Service"}</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{editableService ? "Update" : "Add"}</button>
    </form>
  );
};

export default ServiceForm;
