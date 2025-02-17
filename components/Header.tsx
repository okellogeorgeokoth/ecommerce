"use client";
import React, { useState } from "react";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon, MenuIcon } from "@sanity/icons";
import Image from "next/image";

function Header() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const createClerkPasskey = async () => {
    try {
      const response = await user?.createPasskey();
      console.log(response);
    } catch (err) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex flex-wrap justify-between items-center px-4 py-2 bg-white shadow-md">
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link href="/" className="text-2xl font-bold text-black hover:opacity-50 cursor-pointer">
          <span className="flex items-center">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={140}
              height={140}
              className="mr-2"
              priority
            />
          </span>
        </Link>
        {/* Toggle Button (Visible only on small screens) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden ml-4 focus:outline-none z-50"
        >
          <MenuIcon className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Navbar Links - Always visible on large screens */}
      <nav className="hidden sm:flex sm:items-center space-x-6">
        <Link href="/" className="hover:text-gray-500">Home</Link>
        <Link href="/about" className="hover:text-gray-500">About Us</Link>
        <Link href="/contact" className="hover:text-gray-500">Contact Us</Link>
      </nav>

      {/* Fullscreen Mobile Menu Overlay (Appears only on small screens) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white text-lg z-40">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>
          <nav className="flex flex-col space-y-6 text-center text-xl">
            <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:text-gray-400" onClick={toggleMenu}>About Us</Link>
            <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact Us</Link>
          </nav>
        </div>
      )}

      {/* Search Bar - Full Width on Small Screens */}
      <Form
        action="/search"
        className="w-full sm:w-auto sm:block sm:flex-1 sm:mx-4 mb-4 sm:mb-0"
      >
        <input
          type="text"
          name="query"
          placeholder="Search for Products"
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-full sm:max-w-4xl"
        />
      </Form>

      {/* User Area */}
      <div className="sm:flex items-center space-x-4 w-full sm:w-auto flex-col sm:flex-row">
        <div className="sm:w-auto w-full flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Link
            href="/basket"
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <TrolleyIcon className="w-6 h-6" />
            <span>My Basket</span>
          </Link>
        </div>

        <ClerkLoaded>
          <SignedIn>
            <Link
              href="/orders"
              className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <PackageIcon className="w-6 h-6" />
              <span>My Orders</span>
            </Link>
          </SignedIn>
          {user ? (
            <div className="flex items-center space-x-2 ">
              <UserButton />
              <div className="hidden sm:block text-sm">
                <p>Welcome Back</p>
                <p className="font-bold">{user.fullName}!</p>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
          {user?.passkeys.length === 0 && (
            <button
              onClick={createClerkPasskey}
              className="bg-white hover:bg-black hover:text-white animate-pulse text-black font-bold py-2 px-4 rounded border-black border"
            >
              Create a Passkey now
            </button>
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
