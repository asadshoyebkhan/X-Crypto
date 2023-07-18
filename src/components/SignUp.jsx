// SignUp.js
import React, { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import { auth } from "./firebase"; // Import Firebase Authentication

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Handle successful sign-up
        const user = userCredential.user;
        console.log("New user registered:", user.email);
      })
      .catch((error) => {
        // Handle sign-up errors
        console.error("Error signing up:", error.message);
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
      <Button onClick={handleSignUp}>Sign Up</Button>
    </VStack>
  );
};

export default SignUp;
