import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Header} from "./Components/Header";
import {BudgetForm, GroceryForm} from "./Components/BudgetForm";
import {GroceryList} from "./Components/GroceryList";

const initialGroceryData = {
    totalBudget: 0,
    groceryList: []
};

function App() {
    const [totalBudget, setTotalBudget] = useState(0);
    const [groceryData, setGroceryData] = useState(initialGroceryData);
    const [isBudgetSet, setIsBudgetSet] = useState(false);

    const handleSetBudget = (budget) => {
        setTotalBudget(budget);
        setIsBudgetSet(true);
    };

    const handleAddGroceryItem = (item) => {
        const id = Math.random().toString(36).substr(2, 9); // Generate a random ID
        const newGroceryItem = {
            id,
            name: item.name,
            price: parseFloat(item.price),
            quantity: parseInt(item.quantity)
        };
        setGroceryData({
            ...groceryData,
            groceryList: [...groceryData.groceryList, newGroceryItem]
        });
    };

    const handleDeleteGroceryItem = (id) => {
        const updatedGroceryList = groceryData.groceryList.filter(item => item.id !== id);
        setGroceryData({
            ...groceryData,
            groceryList: updatedGroceryList
        });
    };

    const handleReset = () => {
        setTotalBudget(0);
        setGroceryData(initialGroceryData);
        setIsBudgetSet(false);
    };

    const calculateTotalSpent = (groceryList) => {
        return groceryList.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <>
            <Header totalBudget={totalBudget} groceryCount={groceryData.groceryList.length} totalSpent={calculateTotalSpent(groceryData.groceryList)} />
            {!isBudgetSet && <BudgetForm setBudget={handleSetBudget} />}
            {isBudgetSet && <GroceryForm addGroceryItem={handleAddGroceryItem} />}
            <GroceryList groceryList={groceryData.groceryList} totalBudget={totalBudget} onDelete={handleDeleteGroceryItem} onReset={handleReset} calculateTotalSpent={calculateTotalSpent} />
        </>
    );
}

export default App;
