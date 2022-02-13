export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="container mt-10 bg-black py-4 text-white">© {year} Tangential, LLC</footer>;
}
