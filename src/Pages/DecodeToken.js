import React from "react";
import jwt_decode from "jwt-decode";
export const DecodeToken = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzJlMWFjOWZiZmUyMmNhODQ0ODgxOSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjU3MTA4OTE0LCJleHAiOjE2NTg0MDQ5MTR9.MSjvA98hyk8IAIMtR9Yk4wx4JuRlueaPBZ6ixE2vd0g"
  const decoded = jwt_decode(token);
  console.log(decoded);
  return <div>{decoded?.id}</div>;
};
