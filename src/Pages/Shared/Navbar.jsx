import React, { useState } from "react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const toggleMobileSubMenu = (menu) => {
        setMobileSubMenu(mobileSubMenu === menu ? null : menu);
    };

    return (
        <div className="relative">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <button
                        className="btn btn-ghost ml-2 lg:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <a className="btn btn-ghost text-xl">
                        <img
                            className="w-24 md:w-40 lg:w-40"
                            src="https://i.ibb.co.com/5x5CdZ87/Oxionix-Horizental-PNG.png"
                            alt=""
                        />
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>

                        <li>
                            <button
                                onClick={() => toggleMenu("industries")}
                                className="flex items-center gap-1"
                            >
                                Industries
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${openMenu === "industries" ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => toggleMenu("products")}
                                className="flex items-center gap-1"
                            >
                                Products
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${openMenu === "products" ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li><a>About us</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn btn-primary text-white">Book Consultancy</a>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden absolute left-0 top-full w-full bg-base-100 shadow-lg border-t z-40">
                    <ul className="menu px-4 py-4 space-y-2">
                        <li><a>Home</a></li>

                        <li>
                            <button
                                onClick={() => toggleMobileSubMenu("industries")}
                                className="flex items-center justify-between w-full"
                            >
                                Industries
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-200 ${mobileSubMenu === "industries" ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {mobileSubMenu === "industries" && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    <li><a>e-Commerce</a></li>
                                    <li><a>Education</a></li>
                                    <li><a>Pharma</a></li>
                                    <li><a>Startup</a></li>
                                    <li><a>Management</a></li>
                                    <li><a>Hospital</a></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button
                                onClick={() => toggleMobileSubMenu("products")}
                                className="flex items-center justify-between w-full"
                            >
                                Products
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-200 ${mobileSubMenu === "products" ? "rotate-180" : "rotate-0"
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {mobileSubMenu === "products" && (
                                <ul className="pl-4 mt-2 space-y-1">
                                    <li><a>ERP</a></li>
                                    <li><a>POS</a></li>
                                    <li><a>LMS</a></li>
                                    <li><a>CRM</a></li>
                                    <li><a>School System</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a>About us</a></li>
                        <li><a>Conact us</a></li>
                    </ul>
                </div>
            )}

            {openMenu === "industries" && (
                <div className="absolute left-0 w-full bg-base-100 shadow-lg border-t py-10 z-40">
                    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-4">
                        <div>
                            <h3 className="font-bold mb-3 text-primary">Industries</h3>
                            <ul className="space-y-2">
                                <li><a>e-Commerce</a></li>
                                <li><a>Education</a></li>
                                <li><a>Pharma</a></li>
                                <li><a>Startup</a></li>
                                <li><a>Management</a></li>
                                <li><a>Hospital</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 text-primary">Popular Solutions</h3>
                            <ul className="space-y-2">
                                <li><a>Inventory System</a></li>
                                <li><a>HRM System</a></li>
                                <li><a>POS System</a></li>
                            </ul>
                        </div>
                        <div className="bg-base-200 p-4 rounded-xl">
                            <img className="w-24 md:w-40 lg:w-40" src="https://i.ibb.co.com/5x5CdZ87/Oxionix-Horizental-PNG.png" alt="" />
                            <h3 className="font-bold mb-3 text-secondary">Need Custom Solution?</h3>
                            <p>We build industry-specific software at scale.</p>
                            <button className="btn btn-primary mt-3 text-white">Contact Us</button>
                        </div>
                    </div>
                </div>
            )}

            {openMenu === "products" && (
                <div className="absolute left-0 w-full bg-base-100 shadow-lg border-t py-10 z-40">
                    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 px-4">
                        <div>
                            <h3 className="font-bold mb-3 text-primary">Products</h3>
                            <ul className="space-y-2">
                                <li><a>ERP</a></li>
                                <li><a>POS</a></li>
                                <li><a>LMS</a></li>
                                <li><a>CRM</a></li>
                                <li><a>School System</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 text-primary">Ready Systems</h3>
                            <ul className="space-y-2">
                                <li><a>Billing</a></li>
                                <li><a>Restaurant POS</a></li>
                                <li><a>Hospital System</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3 text-primary">Features</h3>
                            <ul className="space-y-2">
                                <li><a>Cloud DB</a></li>
                                <li><a>Dashboard</a></li>
                                <li><a>Mobile App</a></li>
                            </ul>
                        </div>
                        <div className="bg-base-200 p-4 rounded-xl">
                            <img className="w-24 md:w-40 lg:w-40" src="https://i.ibb.co.com/5x5CdZ87/Oxionix-Horizental-PNG.png" alt="" />
                            <h3 className="font-bold mb-3 text-secondary">Why Us?</h3>
                            <p>Secure, scalable & enterprise-grade.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
