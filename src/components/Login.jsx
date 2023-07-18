// Login.js
import React, { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import { auth } from "./firebase"; // Import Firebase Authentication

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log("Logged in user:", user.email);
      })
      .catch((error) => {
        // Handle login errors (e.g., wrong email/password)
        console.error("Error logging in:", error.message);
      });
  };

  return (
    <VStack spacing={4}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </VStack>
  );
};

export default Login;
