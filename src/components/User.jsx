import React from "react";

export default function User({ user: { displayName } }) {
  return (
    <div className="flex items-center shrink-0">
      <span>{displayName}</span>
    </div>
  );
}
