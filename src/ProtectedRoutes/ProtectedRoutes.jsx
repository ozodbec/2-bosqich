import React from "react";

export default function ProtectedRoutes({ user, children }) {
  if (user) {
    return children;
  } else {
    return children;
  }
}
