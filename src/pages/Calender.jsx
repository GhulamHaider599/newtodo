
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format, isBefore, isAfter } from "date-fns";
// import { FaCalendarAlt } from "react-icons/fa";

// const Calendar = () => {
//   // Get today's date
//   const today = new Date();

//   // State for date range selection
//   const [dateRange, setDateRange] = useState([today, today]); // Default to today
//   const [startDate, endDate] = dateRange;

//   // State for the currently displayed month and year
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());

//   // State to control the visibility of the date range picker
//   const [showPicker, setShowPicker] = useState(false);

//   // Days of the week
//   const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//   // Generate the calendar matrix for the selected month
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     let calendar = [];
//     let week = new Array(7).fill(null);
//     let dayCounter = 1;

//     for (let i = firstDay; i < 7; i++) {
//       week[i] = dayCounter++;
//     }
//     calendar.push([...week]);

//     while (dayCounter <= daysInMonth) {
//       week = new Array(7).fill(null);
//       for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
//         week[i] = dayCounter++;
//       }
//       calendar.push([...week]);
//     }

//     return calendar;
//   };

//   const calendar = generateCalendar(currentMonth, currentYear);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-80">
//       {/* Display Current Day and Date */}
//       <div className="text-center text-lg font-semibold text-gray-700 mb-3">
//         {format(today, "EEEE, MMMM dd, yyyy")}
//       </div>

//       {/* Date Range Selector */}
//       <div className="relative mb-3">
//         <button
//           className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer w-full text-left"
//           onClick={() => setShowPicker(!showPicker)}
//         >
//           <FaCalendarAlt className="text-gray-600" />
//           <span>
//             {startDate && endDate
//               ? `${format(startDate, "MMM dd, yyyy")} - ${format(endDate, "MMM dd, yyyy")}`
//               : "Select date range"}
//           </span>
//         </button>

//         {showPicker && (
//           <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg border p-4 z-50">
//             <DatePicker
//               selectsRange
//               startDate={startDate}
//               endDate={endDate}
//               onChange={(update) => {
//                 if (update[0] && isAfter(update[0], today)) return; // Prevent selecting future start date
//                 if (update[1] && isAfter(update[1], today)) return; // Prevent selecting future end date
//                 setDateRange(update);
//               }}
//               maxDate={today} // Restrict future selection
//               dateFormat="MMM dd, yyyy"
//               inline
//             />
//             <div className="flex justify-between mt-2">
//               <button onClick={() => setDateRange([today, today])} className="text-gray-500 hover:text-gray-700">
//                 Clear
//               </button>
//               <button onClick={() => setShowPicker(false)} className="text-blue-600 font-semibold">
//                 Done
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Calendar Header */}
//       <div className="flex justify-between items-center mb-3">
//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentMonth}
//           onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i} value={i}>
//               {format(new Date(currentYear, i, 1), "MMM")}
//             </option>
//           ))}
//         </select>

//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentYear}
//           onChange={(e) => setCurrentYear(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 10 }, (_, i) => {
//             const year = today.getFullYear() - 5 + i;
//             return (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       {/* Calendar Table */}
//       <table className="w-full">
//         <thead>
//           <tr>
//             {daysOfWeek.map((day, index) => (
//               <th key={index} className={`text-sm ${index === 0 || index === 6 ? "text-red-500" : "text-gray-600"}`}>
//                 {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {calendar.map((week, weekIndex) => (
//             <tr key={weekIndex}>
//               {week.map((date, dateIndex) => {
//                 const fullDate = new Date(currentYear, currentMonth, date);
//                 const isToday =
//                   date === today.getDate() &&
//                   currentMonth === today.getMonth() &&
//                   currentYear === today.getFullYear();

//                 const isInRange =
//                   startDate &&
//                   endDate &&
//                   date &&
//                   isBefore(fullDate, today) &&
//                   isAfter(fullDate, startDate);

//                 return (
//                   <td
//                     key={dateIndex}
//                     className={`text-center text-sm w-8 h-8  cursor-pointer ${
//                       isToday ? "bg-blue-500 text-white font-bold" : ""
//                     } ${isInRange ? "bg-blue-100" : ""} ${
//                       date && isBefore(fullDate, today) ? "hover:bg-gray-200" : "text-gray-400 cursor-not-allowed"
//                     }`}
//                   >
//                     {date ? (
//                       <div className="w-8 h-8 flex items-center justify-center rounded-md">{date}</div>
//                     ) : (
//                       <div className="w-8 h-8"></div>
//                     )}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;

// -----------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format, isBefore, isAfter } from "date-fns";
// import { FaCalendarAlt } from "react-icons/fa";

// const Calendar = () => {
//   // Get today's date
//   const today = new Date();

//   // State for date range selection
//   const [dateRange, setDateRange] = useState([today, today]); // Default to today
//   const [startDate, endDate] = dateRange;

//   // State for the currently displayed month and year
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());

//   // State to control the visibility of the date range picker
//   const [showPicker, setShowPicker] = useState(false);

//   // Get the current day (e.g., "Sunday") and formatted date (e.g., "04, April 2024")
//   const formattedDay = format(today, "EEEE"); // Full day name
//   const formattedDate = format(today, "dd, MMMM yyyy"); // "04, April 2024"

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-80">
//       {/* Display Current Day and Date (Styled Like the First Image) */}
//       <div className="text-center mb-4">
//         <h2 className="text-xl italic text-red-500 font-semibold">{formattedDay}</h2>
//         <h1 className="text-3xl font-bold">{formattedDate}</h1>
//       </div>

//       {/* Date Range Selector */}
//       <div className="relative mb-3">
//         <button
//           className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer w-full text-left"
//           onClick={() => setShowPicker(!showPicker)}
//         >
//           <FaCalendarAlt className="text-gray-600" />
//           <span>
//             {startDate && endDate
//               ? `${format(startDate, "MMM dd, yyyy")} - ${format(endDate, "MMM dd, yyyy")}`
//               : "Select date range"}
//           </span>
//         </button>

//         {showPicker && (
//           <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg border p-4 z-50">
//             <DatePicker
//               selectsRange
//               startDate={startDate}
//               endDate={endDate}
//               onChange={(update) => {
//                 if (update[0] && isAfter(update[0], today)) return;
//                 if (update[1] && isAfter(update[1], today)) return;
//                 setDateRange(update);
//               }}
//               maxDate={today}
//               dateFormat="MMM dd, yyyy"
//               inline
//             />
//             <div className="flex justify-between mt-2">
//               <button onClick={() => setDateRange([today, today])} className="text-gray-500 hover:text-gray-700">
//                 Clear
//               </button>
//               <button onClick={() => setShowPicker(false)} className="text-blue-600 font-semibold">
//                 Done
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Calendar Header */}
//       <div className="flex justify-between items-center mb-3">
//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentMonth}
//           onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i} value={i}>
//               {format(new Date(currentYear, i, 1), "MMM")}
//             </option>
//           ))}
//         </select>

//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentYear}
//           onChange={(e) => setCurrentYear(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 10 }, (_, i) => {
//             const year = today.getFullYear() - 5 + i;
//             return (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Calendar;

// -------------------------------------------------------------------
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format, isBefore, isAfter, isSameDay } from "date-fns";
// import { FaCalendarAlt } from "react-icons/fa";

// const Calendar = () => {
//   // Get today's date
//   const today = new Date();

//   // State for date range selection
//   const [dateRange, setDateRange] = useState([today, today]); // Default to today
//   const [startDate, endDate] = dateRange;

//   // State for the currently displayed month and year
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth());
//   const [currentYear, setCurrentYear] = useState(today.getFullYear());

//   // State to control the visibility of the date range picker
//   const [showPicker, setShowPicker] = useState(false);

//   // Days of the week
//   const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//   // Generate the calendar matrix for the selected month
//   const generateCalendar = (month, year) => {
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     let calendar = [];
//     let week = new Array(7).fill(null);
//     let dayCounter = 1;

//     for (let i = firstDay; i < 7; i++) {
//       week[i] = dayCounter++;
//     }
//     calendar.push([...week]);

//     while (dayCounter <= daysInMonth) {
//       week = new Array(7).fill(null);
//       for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
//         week[i] = dayCounter++;
//       }
//       calendar.push([...week]);
//     }

//     return calendar;
//   };

//   const calendar = generateCalendar(currentMonth, currentYear);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md w-80">
//       {/* Display Current Day and Date */}
//       <div className="text-center text-lg font-semibold text-gray-700 mb-3">
//         {format(today, "EEEE, MMMM dd, yyyy")}
//       </div>

//       {/* Date Range Selector */}
//       <div className="relative mb-3">
//         <button
//           className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer w-full text-left"
//           onClick={() => setShowPicker(!showPicker)}
//         >
//           <FaCalendarAlt className="text-gray-600" />
//           <span>
//             {startDate && endDate
//               ? `${format(startDate, "MMM dd, yyyy")} - ${format(endDate, "MMM dd, yyyy")}`
//               : "Select date range"}
//           </span>
//         </button>

//         {showPicker && (
//           <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg border p-4 z-50">
//             <DatePicker
//               selectsRange
//               startDate={startDate}
//               endDate={endDate}
//               onChange={(update) => {
//                 if (update[0] && isAfter(update[0], today)) return; // Prevent selecting future start date
//                 if (update[1] && isAfter(update[1], today)) return; // Prevent selecting future end date
//                 setDateRange(update);
//               }}
//               maxDate={today} // Restrict future selection
//               dateFormat="MMM dd, yyyy"
//               inline
//             />
//             <div className="flex justify-between mt-2">
//               <button onClick={() => setDateRange([today, today])} className="text-gray-500 hover:text-gray-700">
//                 Clear
//               </button>
//               <button onClick={() => setShowPicker(false)} className="text-blue-600 font-semibold">
//                 Done
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Calendar Header */}
//       <div className="flex justify-between items-center mb-3">
//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentMonth}
//           onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i} value={i}>
//               {format(new Date(currentYear, i, 1), "MMM")}
//             </option>
//           ))}
//         </select>

//         <select
//           className="p-1 border border-gray-300 rounded-md"
//           value={currentYear}
//           onChange={(e) => setCurrentYear(parseInt(e.target.value))}
//         >
//           {Array.from({ length: 10 }, (_, i) => {
//             const year = today.getFullYear() - 5 + i;
//             return (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             );
//           })}
//         </select>
//       </div>

//       {/* Calendar Table */}
//       <table className="w-full">
//         <thead>
//           <tr>
//             {daysOfWeek.map((day, index) => (
//               <th key={index} className={`text-sm ${index === 0 || index === 6 ? "text-red-500" : "text-gray-600"}`}>
//                 {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {calendar.map((week, weekIndex) => (
//             <tr key={weekIndex}>
//               {week.map((date, dateIndex) => {
//                 const fullDate = new Date(currentYear, currentMonth, date);
//                 const isToday =
//                   date === today.getDate() &&
//                   currentMonth === today.getMonth() &&
//                   currentYear === today.getFullYear();

//                 const isInRange =
//                   startDate &&
//                   endDate &&
//                   date &&
//                   isBefore(fullDate, today) &&
//                   isAfter(fullDate, startDate) &&
//                   isBefore(fullDate, endDate);

//                 const isStartDate = startDate && isSameDay(fullDate, startDate);
//                 const isEndDate = endDate && isSameDay(fullDate, endDate);

//                 return (
//                   <td
//                     key={dateIndex}
//                     className={`text-center text-sm w-8 h-8 cursor-pointer ${
//                       isToday ? "bg-blue-500 text-white font-bold" : ""
//                     } ${isInRange ? "bg-blue-100" : ""} ${
//                       isStartDate ? "bg-blue-300 text-white font-bold" : ""
//                     } ${isEndDate ? "bg-blue-300 text-white font-bold" : ""} ${
//                       date && isBefore(fullDate, today) ? "hover:bg-gray-200" : "text-gray-400 cursor-not-allowed"
//                     }`}
//                   >
//                     {date ? (
//                       <div className="w-8 h-8 flex items-center justify-center rounded-md">{date}</div>
//                     ) : (
//                       <div className="w-8 h-8"></div>
//                     )}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Calendar;

// --------------------------------------------------------------------------
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isBefore, isAfter, isSameDay } from "date-fns";
// import { isSameDay, isBefore, isAfter } from "date-fns";

import { FaCalendarAlt } from "react-icons/fa";

import CurrentDateTime from "./CurrentDateTime"; // Import CurrentDateTime component

const Calendar = () => {
  // Get today's date
  const today = new Date();

  // State for date range selection
  const [dateRange, setDateRange] = useState([today, today]); // Default to today
  const [startDate, endDate] = dateRange;

  // State for the currently displayed month and year
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // State to control the visibility of the date range picker
  const [showPicker, setShowPicker] = useState(false);

  // Days of the week
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Generate the calendar matrix for the selected month
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendar = [];
    let week = new Array(7).fill(null);
    let dayCounter = 1;

    for (let i = firstDay; i < 7; i++) {
      week[i] = dayCounter++;
    }
    calendar.push([...week]);

    while (dayCounter <= daysInMonth) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
        week[i] = dayCounter++;
      }
      calendar.push([...week]);
    }

    return calendar;
  };

  const calendar = generateCalendar(currentMonth, currentYear);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80">
      {/* Current Date & Time */}
      <CurrentDateTime />

      {/* Date Range Selector */}
      <div className="relative mb-3">
        <button
          className="flex items-center gap-2 p-3 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer w-full text-left"
          onClick={() => setShowPicker(!showPicker)}
        >
          <FaCalendarAlt className="text-gray-600" />
          <span>
            {startDate && endDate
              ? `${format(startDate, "MMM dd, yyyy")} - ${format(endDate, "MMM dd, yyyy")}`
              : "Select date range"}
          </span>
        </button>

        {showPicker && (
          <div className="absolute top-12 left-0 bg-white shadow-md rounded-lg border p-4 z-50">
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                if (update[0] && isAfter(update[0], today)) return; // Prevent selecting future start date
                if (update[1] && isAfter(update[1], today)) return; // Prevent selecting future end date
                setDateRange(update);
              }}
              maxDate={today} // Restrict future selection
              dateFormat="MMM dd, yyyy"
              inline
            />
            <div className="flex justify-between mt-2">
              <button onClick={() => setDateRange([today, today])} className="text-gray-500 hover:text-gray-700">
                Clear
              </button>
              <button onClick={() => setShowPicker(false)} className="text-blue-600 font-semibold">
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-3">
        <select
          className="p-1 border border-gray-300 rounded-md"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>
              {format(new Date(currentYear, i, 1), "MMM")}
            </option>
          ))}
        </select>

        <select
          className="p-1 border border-gray-300 rounded-md"
          value={currentYear}
          onChange={(e) => setCurrentYear(parseInt(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => {
            const year = today.getFullYear() - 5 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      {/* Calendar Table */}
      <table className="w-full">
        <thead>
          <tr>
            {daysOfWeek.map((day, index) => (
              <th key={index} className={`text-sm ${index === 0 || index === 6 ? "text-red-500" : "text-gray-600"}`}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((date, dateIndex) => {
                const fullDate = new Date(currentYear, currentMonth, date);
                const isToday =
                  date === today.getDate() &&
                  currentMonth === today.getMonth() &&
                  currentYear === today.getFullYear();

                const isInRange =
                  startDate &&
                  endDate &&
                  date &&
                  isBefore(fullDate, today) &&
                  isAfter(fullDate, startDate) &&
                  isBefore(fullDate, endDate);

                const isStartDate = startDate && isSameDay(fullDate, startDate);
                const isEndDate = endDate && isSameDay(fullDate, endDate);

                return (
                  <td
                    key={dateIndex}
                    className={`text-center text-sm w-8 h-8 cursor-pointer ${
                      isToday ? "bg-[#684FFF] text-white font-bold" : ""
                    } ${isInRange ? "bg-blue-100" : ""} ${
                      isStartDate ? "bg-blue-300 text-white font-bold" : ""
                    } ${isEndDate ? "bg-blue-300 text-white font-bold" : ""} ${
                      date && isBefore(fullDate, today) ? "hover:bg-gray-200" : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {date ? (
                      <div className="w-8 h-8 flex items-center justify-center rounded-md">{date}</div>
                    ) : (
                      <div className="w-8 h-8"></div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
