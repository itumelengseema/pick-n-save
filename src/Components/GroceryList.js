import React from "react";

export function GroceryList({groceryList, totalBudget, onDelete, onReset, calculateTotalSpent}) {
    const formattedTotalBudget = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR'
    }).format(totalBudget);

    return (
        <section className="container mt-5">
            <h2>Grocery List</h2>
            <div className="d-flex">
                <div className="btn btn-success d-flex align-items-center mx-2 px-2 py-1">
                    <i className="bi bi-piggy-bank fs-5 me-2"></i>
                    <p className="mb-0">Total Budget: {formattedTotalBudget}</p>
                </div>
                <div className="btn btn-success d-flex align-items-center mx-2 px-2 py-1">
                    <i className="bi bi-cart fs-5 me-2"></i>
                    <p className="mb-0">({groceryList.length})</p>
                </div>
                <div className="btn btn-danger d-flex align-items-center mx-2 px-2 py-1">
                    <i className="bi bi-trash3-fill fs-5 me-2"></i>
                    <p className="mb-0" onClick={onReset}>Reset Application</p>
                </div>
            </div>
            {groceryList.length === 0 ? (
                <p>No items added yet. Add items using the form above.</p>
            ) : (
                <table className="table mt-3">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groceryList.map((item, index) => (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{new Intl.NumberFormat('en-ZA', {
                                style: 'currency',
                                currency: 'ZAR'
                            }).format(item.price)}</td>
                            <td>{item.quantity}</td>
                            <td>{new Intl.NumberFormat('en-ZA', {
                                style: 'currency',
                                currency: 'ZAR'
                            }).format(item.price * item.quantity)}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}