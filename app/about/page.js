import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="bg-gray-100 dark:bg-gray-900 p-4">
        <nav className="flex justify-around">
          <Link
            href="/about/student"
            className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
          >
            Student
          </Link>
          <Link
            href="/about/teacher"
            className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 transition duration-300"
          >
            Teacher
          </Link>
        </nav>
      </header>
      <main>
        <img className="w-full h-screen object-cover" src="https://www.shutterstock.com/shutterstock/photos/2262390691/display_1500/stock-photo-hand-turns-dice-and-changes-the-expression-it-s-all-about-you-to-it-s-all-about-me-2262390691.jpg" alt="about page image"/>
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
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
}
