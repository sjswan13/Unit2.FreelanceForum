
const freelancers = [
  {name: "Alice", occupation: "Writer", startingPrice: 30},
  {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
  {name: 'Carol', occupation: 'Programmer', startingPrice: 70},
  {name: 'Timmy', occupation: 'Marine Biologist', startingPrice: 50},
  {name: 'Rodger', occupation: 'Gardener', startingPrice: 30},
  {name: 'Samantha', occupation: 'Phlebotomist', startingPrice: 20},
  {name: 'George', occupation: 'Server', startingPrice: 15},
  {name: 'Fred', occupation: 'Cashier', startingPrice: 12}
];

const freelancerData = [
  //  {name: "Alice", occupation: "Writer", startingPrice: 30},
  // {name: "Alice", occupation: "Writer", startingPrice: 30},
  // {name: 'Bob', occupation: 'Teacher', startingPrice: 50},
];

function updateAvgStartingPrice() {
  const avgStartingPriceElement = document.querySelector('#Avg_Starting_Price');
  const totalStartingPrice = freelancerData.reduce((sum, person) => {
    return sum + person.startingPrice
  }, 0);
  console.log(avgStartingPriceElement, totalStartingPrice)
  const average = totalStartingPrice/freelancerData.length;
  const roundedAverage = average.toFixed(2);
  const averageText = `The Average Starting Price is $${roundedAverage}`;
  avgStartingPriceElement.textContent = averageText;
}

function addFreelancer() {
  // select random freelancer
  const randomFreelancerIndex =Math.floor(Math.random() * 8);
  //add user to data array
  freelancerData.push(freelancers[randomFreelancerIndex])
  console.log('freelancerData', freelancerData)
}

function addFreelancerToDOM() {
  const tbody = document.querySelector('#table-body');
  //loop over freelancer data 
  // for (let i = 0; i < freelancerData.length; i ++) {
  //   //on each iteration add current freelancer to DOM
  //   const currentFreelancer = freelancerData[i];
  //   console.log(currentFreelancer)
  //   const row = document.createElement('tr');
  //   const name = document.createElement('td');
  //   const occupation = document.createElement('td');
  //   const startingPrice = document.createElement('td');

  //   name.textContent = currentFreelancer.name;
  //   occupation.textContent = currentFreelancer.occupation;
  //   startingPrice.textContent = currentFreelancer.startingPrice;

  //   row.appendChild(name);
  //   row.appendChild(occupation);
  //   row.appendChild(startingPrice);

  //   // if currentFreelancer is last freelancer, add
  //   if (i === freelancerData.length-1) {
  //     tbody.appendChild(row);
  //   }
  // }

  const currentFreelancer = freelancerData[freelancerData.length-1];

  const row = document.createElement('tr');
  tbody.appendChild(row);

  const name = document.createElement('td');
  name.textContent = currentFreelancer.name;
  row.appendChild(name);

  const occupation = document.createElement('td');
  occupation.textContent = currentFreelancer.occupation;
  row.appendChild(occupation);

  const startingPrice = document.createElement('td');
  startingPrice.textContent = currentFreelancer.startingPrice;
  row.appendChild(startingPrice);
}


// setInterval(() => {
//   addFreelancer();
//   addFreelancerToDOM();
//   updateAvgStartingPrice();
// }, 3000);
