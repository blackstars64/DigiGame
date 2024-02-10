import { Outlet } from "react-router-dom";

function Page() {
  return (
    <>
      <header>
        <h2>Page</h2>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Page;
