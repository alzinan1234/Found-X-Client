"use server";

const registerUser = async () => {
  try {
    const response = await fetch("https://api.example.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "dM7lW@example.com",
        password: "password123",
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
