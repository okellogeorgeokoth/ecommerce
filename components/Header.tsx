"use client";
import React, { useState } from "react";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { TrolleyIcon, MenuIcon } from "@sanity/icons";
import Image from "next/image";

function Header() {
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Logo & Links */}
        <div className="flex items-center space-x-8">
          {/* Cropped Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={100} // Adjust width to crop the logo
              height={50} // Adjust height to crop the logo
              className="object-cover" // Ensures the image is cropped and fits within the specified dimensions
              priority
            />
          </Link>
          <nav className="hidden sm:flex space-x-6">
            <Link href="/" className="text-black hover:text-blue-600">Home</Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="text-black hover:text-blue-600">
                About Us
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <Link href="/about-vinceville" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Vinceville</Link>
                  <Link href="/codes-of-practice" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Codes of Practice</Link>
                </div>
              )}
            </div>
            <Link href="/sell-art" className="text-black hover:text-blue-600">Sell Art</Link>
            <Link href="/artists" className="text-black hover:text-blue-600">Artists</Link>
            <Link href="/exhibitions" className="text-black hover:text-blue-600">Exhibitions</Link>
            <Link href="/blog" className="text-black hover:text-blue-600">Blog/News</Link>
            <Link href="/contact" className="text-black hover:text-blue-600">Contact Us</Link>
          </nav>
        </div>

        {/* Right Section: Search & User Actions */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <form action='/search' className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
            <input type="text" name="query" placeholder="Search for Products" className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"/>
        </form>
          {/* Basket */}
          <Link href="/basket" className="text-black hover:text-blue-600">
            <TrolleyIcon className="w-6 h-6" />
          </Link>

          {/* User Actions */}
          <ClerkLoaded>
            {user ? (
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="text-sm">
                  <p>Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal" />
            )}
          </ClerkLoaded>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="sm:hidden ml-4 focus:outline-none">
          <MenuIcon className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white text-lg z-40">
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-2xl">✕</button>
          <nav className="flex flex-col space-y-6 text-center text-xl">
            <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:text-gray-400" onClick={toggleMenu}>About Us</Link>
            <Link href="/sell-art" className="hover:text-gray-400" onClick={toggleMenu}>Sell Art</Link>
            <Link href="/artists" className="hover:text-gray-400" onClick={toggleMenu}>Artists</Link>
            <Link href="/exhibitions" className="hover:text-gray-400" onClick={toggleMenu}>Exhibitions</Link>
            <Link href="/blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog/News</Link>
            <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact Us</Link>

            {/* User Section (Mobile) */}
            <div className="mt-4">
              <ClerkLoaded>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="text-sm">
                      <p>Welcome Back</p>
                      <p className="font-bold">{user.fullName}!</p>
                    </div>
                  </div>
                ) : (
                  <SignInButton mode="modal" />
                )}
              </ClerkLoaded>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;