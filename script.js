document.addEventListener("DOMContentLoaded", function () {
  const vegetarian = "Vegetarian Pizza";
  const hawaiian = "Hawaiian Pizza";
  const pepperoni = "Pepperoni Pizza";

  const pizzaPrice = 80;

  alert(
    `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
  );

  // Display messages to the user
  const displayMessage = (message) => {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    document.getElementById("message").innerHTML = ""; // Clear existing messages
    document.getElementById("message").appendChild(messageElement);
  };

  // Calculate cooking time based on quantity
  const calculateCookingTime = (quantity) => {
    if (quantity >= 6) {
      return "The pizzas will take 20 minutes.";
    } else if (quantity >= 3) {
      return "The pizzas will take 15 minutes.";
    } else if (quantity >= 1) {
      return "The pizzas will take 10 minutes.";
    } else {
      return "That's not a valid amount.";
    }
  };

  document.getElementById("calculateOrder").addEventListener("click", () => {
    // Get user input from
    const pizzaName = document.getElementById("pizzaName").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Check the pizza name
    if (![vegetarian, hawaiian, pepperoni].includes(pizzaName)) {
      displayMessage("We don't have that on the menu");
      return;
    }

    // Check the quantity
    if (isNaN(quantity) || quantity <= 0) {
      displayMessage("That's not a valid amount");
      return;
    }

    // Calculate order total and cooking time
    const orderTotal = quantity * pizzaPrice;
    const estimatedCookingTime = calculateCookingTime(quantity);

    // Display order
    displayMessage(
      `Great, I'll get started on your ${pizzaName} right away. It will cost ${orderTotal} kr. ${estimatedCookingTime}`
    );
  });
});

// Display messages to the user
const displayMessage = (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  document.getElementById("message").innerHTML = ""; // Clear existing messages
  document.getElementById("message").appendChild(messageElement);
};

// Calculate cooking time based on quantity
const calculateCookingTime = (quantity) => {
  if (quantity >= 6) {
    return "The pizzas will take 20 minutes.";
  } else if (quantity >= 3) {
    return "The pizzas will take 15 minutes.";
  } else if (quantity >= 1) {
    return "The pizzas will take 10 minutes.";
  } else {
    return "That's not a valid amount.";
  }
};

document.getElementById("calculateOrder").addEventListener("click", () => {
  // Get user input from
  const pizzaName = document.getElementById("pizzaName").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  // Check the pizza name
  if (![vegetarian, hawaiian, pepperoni].includes(pizzaName)) {
    displayMessage("We don't have that on the menu");
    return;
  }

  // Check the quantity
  if (isNaN(quantity) || quantity <= 0) {
    displayMessage("That's not a valid amount");
    return;
  }

  // Calculate order total and cooking time
  const orderTotal = quantity * pizzaPrice;
  const estimatedCookingTime = calculateCookingTime(quantity);

  // Display order
  displayMessage(
    `Great, I'll get started on your ${pizzaName} right away. It will cost ${orderTotal} kr. ${estimatedCookingTime}`
  );
});
