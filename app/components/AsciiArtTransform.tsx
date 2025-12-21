"use client";
import React, { useState, useEffect } from "react";

export default function AsciiArtTransform() {
  const [showFirst, setShowFirst] = useState(true);

  const art1 = `                                  
                                   
                                   
      A0010001000001010            
      70             A0            
      80             A0            
      70             A0            
      80     20000000000000000     
      80     33      A0     30     
      80     23      B0     30     
      70     23      B0     30     
      70589880058898720     30     
             11             30     
             23             30     
             23             30     
             20000000000000000     
                                   
                                   
                                   `;

  const art2 = `                                  
                                  
                                  
                                  
                                  
         1000000000000000A        
         29             0A        
         28             0A        
         19             0A        
         28             0A        
         18             0A        
         18             0B        
         28             0A        
         1000000000000000A        
                                  
                                  
                                  
                                  
                                  
`;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <pre 
      className="text-xs mb-6 overflow-x-auto transition-opacity duration-1000" 
      style={{ 
        fontFamily: 'monospace', 
        lineHeight: '1.2',
        opacity: 1
      }}
    >
      {showFirst ? art1 : art2}
    </pre>
  );
}

