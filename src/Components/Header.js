import logo from "../Logo.svg";
import React from "react";

export function Header({totalBudget, groceryCount, totalSpent}) {
    const formattedBudget = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR'}).format(totalBudget);
    const formattedTotalSpent = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR'}).format(totalSpent);

    let budgetStyle = {};
    if (totalSpent > totalBudget) {
        budgetStyle = {color: 'red'};
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary px-5">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="250" className="d-inline-block align-text-top"/>
                    </a>
                    <div className="d-flex">
                        <div className="btn btn-success d-flex align-items-center mx-2 px-2 py-1">
                            <i className="bi bi-piggy-bank fs-5 me-2"></i>
                            <p className="mb-0" style={budgetStyle}>Total Budget: {formattedBudget}</p>
                        </div>
                        <div className="btn btn-success d-flex align-items-center mx-2 px-2 py-1">
                            <i className="bi bi-cart fs-5 me-2"></i>
                            <p className="mb-0">({groceryCount})</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}