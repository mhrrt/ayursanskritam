const form = document.getElementById("contactForm");

const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,

    email: document.getElementById("email").value,

    query: document.getElementById("query").value,
  };

  try {
    const response = await fetch(CONFIG.API_URL, {
      method: "POST",

      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      message.innerText = "Query submitted successfully.";

      form.reset();
    } else {
      message.innerText = "Something went wrong.";
    }
  } catch (error) {
    message.innerText = "Submission failed.";
  }
});
