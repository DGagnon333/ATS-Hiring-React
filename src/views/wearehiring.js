import React from 'react'

import { Helmet } from 'react-helmet'

import './wearehiring.css'

const Wearehiring = (props) => {
  return (
    <div className="wearehiring-container">
      <Helmet>
        <title>wearehiring - ATS Hiring</title>
        <meta property="og:title" content="wearehiring - ATS Hiring" />
      </Helmet>
      <div className="filterContainer">
        <button type="button" className="wearehiring-categories button">
          <svg viewBox="0 0 1024 1024" className="wearehiring-icon">
            <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
          </svg>
          <span>Categories</span>
        </button>
        <button type="button" className="wearehiring-departments button">
          <svg
            viewBox="0 0 1097.142857142857 1024"
            className="wearehiring-icon2"
          >
            <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
          </svg>
          <span>Departments</span>
        </button>
        <button type="button" className="wearehiring-locations button">
          <svg viewBox="0 0 1024 1024" className="wearehiring-icon4">
            <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
          </svg>
          <span>Locations</span>
        </button>
        <button type="button" className="wearehiring-search button">
          <svg viewBox="0 0 1024 1024" className="wearehiring-icon6">
            <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
          </svg>
          <span>Search</span>
        </button>
      </div>
    </div>
  )
}

export default Wearehiring
