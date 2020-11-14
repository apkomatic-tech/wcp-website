import React, { useState } from "react"

const ctx = React.createContext()

const Provider = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  function closeMobileNav() {
    setMobileNavOpen(false)
  }
  function openMobileNav() {
    setMobileNavOpen(true)
  }
  function toggleMobileNav() {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <ctx.Provider
      value={{
        mobileNavOpen,
        openMobileNav,
        closeMobileNav,
        toggleMobileNav,
      }}
    >
      {children}
    </ctx.Provider>
  )
}

export default Provider

export { ctx }
