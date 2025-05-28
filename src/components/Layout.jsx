// src/components/Layout.jsx
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
