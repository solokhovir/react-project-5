import React, { useState } from "react";
import uuid from "react-uuid";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

export default function Shop() {
    const id = uuid();
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [validation, setValidation] = useState(true);

    console.log("items:", items);

    function handleFormSubmit(event) {
        if (name.length === 0 || desc.length === 0) {
            setValidation(false);
            event.preventDefault();
            return;
        }
        setItems([{ id, name, desc }, ...items]);
        setName("");
        setDesc("");
        setValidation(true);
        event.preventDefault();
    }

    function handleDeleteItem() {
        setItems(items.slice(0, items.length - 1));
    }

    return (
        <>
            <AddItem onFormSubmit={handleFormSubmit} name={name} desc={desc} validation={validation} setName={setName} setDesc={setDesc} />
            <div>
                {items.length === 0 && (
                    <p className="ui-title">Добавьте первый товар</p>
                )}
            </div>
            <ItemsList items={items} onDeleteItem={handleDeleteItem} />
        </>
    );
}
