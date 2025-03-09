import React, { useState } from "react";

const schemes = [
  {
    id: 1,
    name: "Startup India",
    url: "https://www.startupindia.gov.in/content/sih/en/women_entrepreneurs.html",
  },
  {
    id: 2,
    name: "MUDRA Loan",
    url: "https://www.mudra.org.in/",
  },
  {
    id: 3,
    name: "Stand-Up India",
    url: "https://www.standupmitra.in/",
  },
  {
    id: 4,
    name: "PMEGP",
    url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
  },
];

const GovernmentSchemes = () => {
  const [showSchemes, setShowSchemes] = useState(true);

  return (
    

    <div className="mt-6">
      <h2 className="text-2xl font-bold">Government Schemes</h2>
      <button
        onClick={() => setShowSchemes(!showSchemes)}
        className="mt-2 px-4 py-2 bg-gray-200 rounded"
      >
        {showSchemes ? "Hide Schemes" : "Show Schemes"}
      </button>
      {showSchemes && (
        <ul className="mt-4">
          {schemes.map((scheme) => (
            <li key={scheme.id}>
              <a
                href={scheme.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {scheme.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default GovernmentSchemes;
