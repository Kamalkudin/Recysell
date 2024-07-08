
// Code 2

const carbonData = [
  { month: "January", carbon_amount: 10000 },
  { month: "February", carbon_amount: 12000 },
  { month: "March", carbon_amount: 15000 },
  { month: "April", carbon_amount: 18000 },
  { month: "May", carbon_amount: 20000 },
  { month: "June", carbon_amount: 22000 },
  { month: "July", carbon_amount: 25000 },
  { month: "August", carbon_amount: 28000 },
  { month: "September", carbon_amount: 30000 },
  { month: "October", carbon_amount: 32000 },
  { month: "November", carbon_amount: 35000 },
  { month: "December", carbon_amount: 38000 },
];

// create bar chart
const ctx = document.getElementById("bar-chart").getContext("2d");
const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: carbonData.map((data) => data.month),
    datasets: [
      {
        label: "Carbon Emissions",
        data: carbonData.map((data) => data.carbon_amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    title: {
      display: true,
      text: "Carbon Footprint",
    },
  },
});

// // calculate and display carbon footprint
const carbonFootprint = carbonData.reduce((acc, current) => acc + current.carbon_amount, 0);
document.getElementById("carbon-footprint").innerHTML = `Total Carbon Footprint: ${carbonFootprint}`;

// calculate and display average carbon footprint
const averageCarbonFootprint = carbonData.reduce((acc, current) => acc + current.carbon_amount, 0) / carbonData.length;
document.getElementById("average-carbon-footprint").innerHTML = `Average Carbon Footprint: ${averageCarbonFootprint}`;

