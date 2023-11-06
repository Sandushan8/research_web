import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./header.css";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="bg-white stick">
      <nav
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
        aria-label="Global"
        style={{ padding: 10, margin: 0, width: "100%" }}>
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 p-1.5"
            style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <img
              className="h-8 w-auto"
              src={logo}
              alt=""
              style={{ height: 50, borderRadius: "50%" }}
            />
            <p style={{ fontWeight: "bold", fontSize: 18, color: "#3371E3" }}>
              MindRelax
            </p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group
          className="hidden lg:flex lg:gap-x-12"
          style={{ gap: 16 }}>
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom: pathname === "/" && "2px solid #3371E3",
              color: pathname === "/" && "#3371E3",
            }}>
            Home
          </a>
          <a
            href="/introduction"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom:
                pathname.includes("introduction") && "2px solid #3371E3",
              color: pathname.includes("introduction") && "#3371E3",
            }}>
            Introduction
          </a>
          <a
            href="/domain"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom: pathname.includes("domain") && "2px solid #3371E3",
              color: pathname.includes("domain") && "#3371E3",
            }}>
            Domain
          </a>
          <a
            href="/milestones"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom:
                pathname.includes("milestones") && "2px solid #3371E3",
              color: pathname.includes("milestones") && "#3371E3",
            }}>
            Milestones
          </a>
          <a
            href="/features"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom:
                pathname.includes("features") && "2px solid #3371E3",
              color: pathname.includes("features") && "#3371E3",
            }}>
            Features
          </a>
          <a
            href="/documents"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom:
                pathname.includes("documents") && "2px solid #3371E3",
              color: pathname.includes("documents") && "#3371E3",
            }}>
            Documents
          </a>
          <a
            href="/tools"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom: pathname.includes("tools") && "2px solid #3371E3",
              color: pathname.includes("tools") && "#3371E3",
            }}>
            Tools & Technologies
          </a>
          <a
            href="/team"
            className="text-sm font-semibold leading-6 text-gray-900"
            style={{
              borderBottom: pathname.includes("team") && "2px solid #3371E3",
              color: pathname.includes("team") && "#3371E3",
            }}>
            Team
          </a>
          <a
          href="mailto:it20083328@my.sliit.lk?subject=Issue in research web"
                  className="text-sm font-semibold leading-6 text-gray-900">
                  Contact Us
                </a>
        </Popover.Group>
      </nav>

      {/* Mobile View starts here */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </a>
                <a
                  href="/introduction"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Introduction
                </a>
                <a
                  href="/domain"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Domain
                </a>
                <a
                  href="/milestones"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Milestones
                </a>
                <a
                  href="/features"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Features
                </a>
                <a
                  href="/documents"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Documents
                </a>
                <a
                  href="/tools"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Tools & Technologies
                </a>
                <a
                  href="/team"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Team
                </a>
                <a
                  href="mailto:it20083328@my.sliit.lk?subject=Issue in web application"
                  className="-mx-3 block rounded-lg px-3 py-0 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
