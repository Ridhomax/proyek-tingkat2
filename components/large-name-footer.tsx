"use client";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="https://wa.me/082268882235" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8" />
              <h2 className="text-lg font-bold">Properties</h2>
            </Link>

            <h1 className="dark:text-gray-300 mt-4">
              Build by{" "}
              <span className="dark:text-[#039ee4]">
                <Link href="https://maps.app.goo.gl/BvdsB6HoYAB5qZtr6">Liban Group</Link>
              </span>
            </h1>
            <div className="mt-2">
            <Link  href="https://x.com/compose/tweet?text=I%27ve%20been%20using%20%23SpectrumUI%20 share%20yourtought%20%40arihantCodes%20">
              <Button variant='secondary'>
                Share Your Thoughts On
                <Icons.twitter className="icon-class ml-1 w-3.5 " />
              </Button>
            </Link>
            </div>
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} Spectrum UI. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="https://wa.me/082268882235" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Conatact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
                <li>
                  <Link href="https://wa.me/082268882235" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="https://maps.app.goo.gl/BvdsB6HoYAB5qZtr6" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Maps
                  </Link>
                </li>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
        
      
      </div>
    </footer>
  );
}

export { Footer };
