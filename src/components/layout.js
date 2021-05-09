import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <footer className="flex items-center justify-center bg-black">
        <div className="flex justify-center items-center flex-col md:flex-row">
          <div className="flex max-w-md h-20 items-center">
            <p className="pt-0 mb-0 text-white text-base tracking-wide text-xs">
              Mikkel Klokkerud | ©2019-2021 | MikkelCodes.com{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout
