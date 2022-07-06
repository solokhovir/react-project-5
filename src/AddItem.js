import React from "react";

export default function AddItem(props) {
    return <form onSubmit={props.onFormSubmit}>
        <div>
            <label htmlFor="name">Название товара: </label>
            <input
                type="text"
                placeholder="Название товара"
                className="ui-textfield"
                name="name"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="desc">Описание товара: </label>
            <input
                type="text"
                placeholder="Описание товара"
                className="ui-textfield"
                name="desc"
                value={props.desc}
                onChange={(e) => props.setDesc(e.target.value)}
            />
        </div>
        <div className="validation">
            {props.validation ? "" : <p className="error">Заполните все поля</p>}
        </div>
        <div className="form-footer">
            <input type="submit" className="ui-button" value="Добавить" />
        </div>
    </form>
}