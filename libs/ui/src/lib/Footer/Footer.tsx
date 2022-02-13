export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="bg-black px-10 py-2 text-white">© {year} Tangential, LLC</footer>;
}
