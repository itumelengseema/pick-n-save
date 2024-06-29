import React, {useState} from "react";

export function BudgetForm({setBudget}) {
    const [budget, setBudgetValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setBudget(parseInt(budget));
        setBudgetValue('');
    };

    return (
        <section className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="budget" className="form-label">Enter your budget</label>
                    <input
                        type="number"
                        className="form-control"
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudgetValue(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Set Budget</button>
            </form>
        </section>
    );
}

export function GroceryForm({addGroceryItem}) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addGroceryItem({name, price, quantity});
        setName('');
        setPrice('');
        setQuantity('');
    };

    return (
        <section className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter item</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Enter price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Enter quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Grocery</button>
            </form>
        </section>
    );
}

