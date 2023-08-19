// Freelancers Array
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

// Get Elements from HTML
const table = document.getElementById('freelancer-table');
const averagePriceSpan = document.getElementById('average-price');

//Calculate average price
function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length;
    const roundedAverage = Math.round(averagePrice);
    return roundedAverage;
}

function updateTable() {
    table.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
      </tr>
    `;

    freelancers.forEach(freelancer => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.name}</td>
            <td>${freelancer.occupation}</td>
            <td>$${freelancer.price}</td>
            `;
            table.appendChild(row);
    });

    const averagePrice = calculateAveragePrice();
    averagePriceSpan.textContent = `$${averagePrice}`;
}


// Simulate adding freelancers every few seconds
setInterval(() => {
    const newFreelancer = {
        name: "New Freelancer",
        price: Math.floor(Math.random() * 100) + 1,
        occupation: "new occupation",
    };
    freelancers.push(newFreelancer);
    updateTable();
}, 5000);

updateTable();