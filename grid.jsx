import React from 'react';

/**
 * Grid Layout Visualizer
 * Updated:
 * - Increased horizontal length of Box 7 by widening Column 3.
 * - Maintains Width(6) == Width(5) (Col 1 + Col 2 = Col 4).
 * - Maintains corner radius and grayscale aesthetic from the reference image.
 */

const App = () => {
  // Styles based on the uploaded image (neutral gray, highly rounded corners)
  const blockClass = "bg-[#9da0a1] rounded-[20px] flex items-center justify-center text-white font-bold text-lg transition-transform hover:scale-[1.01] cursor-pointer shadow-sm p-4 text-center";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-4xl aspect-square flex flex-col">
        
        {/* Main Grid Container
          - Columns: 
            Col 1: 1.3fr (Box 2)
            Col 2: 1fr   (Box 3)
            Col 3: 1.8fr (Box 4 & Box 7 - Increased to make 7 longer)
            Col 4: 2.3fr (Box 5 - matches width of Box 6: 1.3 + 1.0)
          - Rows: 
            Row 1: 0.6fr (Header)
            Row 2: 1fr   (Top Row)
            Row 3: 1.2fr (Middle Row)
            Row 4: 1fr   (Bottom-mid)
            Row 5: 1fr   (Footer Row)
        */}
        <div className="grid gap-3 md:gap-4 w-full h-full 
          grid-cols-[1.3fr_1fr_1.8fr_2.3fr] 
          grid-rows-[0.6fr_1fr_1.2fr_1fr_1fr]">
          
          {/* Row 1: Full-Width Header */}
          <div className={`${blockClass} col-span-4`} title="1. Full Header">
            1
          </div>

          {/* Row 2: B2 (Rect), B3 (Sq), B4 (Sq), B5 (Starts) */}
          <div className={`${blockClass} col-span-1`} title="2. Small Rect">
            2
          </div>
          <div className={`${blockClass} col-span-1`} title="3. Square">
            3
          </div>
          <div className={`${blockClass} col-span-1`} title="4. Square">
            4
          </div>
          
          {/* 5. Large Vertical Block (Row 2-3, Col 4) 
              Width: 2.3fr
          */}
          <div className={`${blockClass} row-span-2 col-span-1`} title="5. Large Square">
            5
          </div>

          {/* Row 3: B6 (Starts), B7 (Mid Sq), B5 (Continues) */}
          {/* 6. Large Vertical Block (Row 3-4, Col 1-2) 
              Width: 1.3 + 1 = 2.3fr (Matches Box 5)
          */}
          <div className={`${blockClass} row-span-2 col-span-2`} title="6. Vertical Large Block">
            6
          </div>
          
          {/* 7. Mid Square (Row 3, Col 3) 
              Length increased via Column 3 (1.8fr)
          */}
          <div className={`${blockClass} col-span-1`} title="7. Mid Sq">
            7
          </div>

          {/* Row 4: B6 (Continues), B8 (Starts) */}
          {/* 8. Wide Horizontal Rectangle (Row 4-5, Col 3-4) */}
          <div className={`${blockClass} row-span-2 col-span-2`} title="8. Wide Rect">
            8
          </div>

          {/* Row 5: B9 (Rect), B8 (Continues) */}
          {/* 9. Bottom Rect (Row 5, Col 1-2) */}
          <div className={`${blockClass} col-span-2`} title="9. Bottom Rect">
            9
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;