import React, {useState} from 'react'

function Forms(props) {
    const [name, setName] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name);
    }

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    value={name}
                    onChange={handleChange}
                    autoComplete="off"
                />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
      </form>
    )
}

export default Forms
