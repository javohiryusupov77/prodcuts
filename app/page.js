import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 p-4">
        <nav className="flex justify-around">
          <Link href="/" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link href="/products" className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300">
            Products
          </Link>
        </nav>
      </header>
      <main>
        <img className="w-full h-screen object-cover" src="https://cdn.pixabay.com/photo/2017/10/01/14/56/communication-2805785_1280.jpg" alt="home image" />
      </main>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
}
