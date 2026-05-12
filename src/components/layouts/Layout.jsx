import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"
import FooterBar from "./FooterBar"

export default function Layout() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)" }}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <FooterBar />
    </div>
  );
}
