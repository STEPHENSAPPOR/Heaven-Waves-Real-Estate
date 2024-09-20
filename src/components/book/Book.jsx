import React, { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    category: '',
    numberOfRooms: '2', // Default to 2
    buildingType: '',
    visitDate: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted', formData);
    alert('Booking request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-10 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-[#FF6400] mb-8 text-center">
          Book Your Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Choose a category</option>
                  <option value="Standard">Standard</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-600">
                  Select a Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Choose a service</option>
                  <option value="Sales Services">Sales Services</option>
                  <option value="Rentals Services">Rentals Services</option>
                  <option value="Property Advisory / General Consultancy Services">
                    Property Advisory / General Consultancy Services
                  </option>
                  <option value="Valuation Services">Valuation Services</option>
                  <option value="Developer Services">Developer Services</option>
                  <option value="Quantity and Land Surveying">Quantity and Land Surveying</option>
                  <option value="Commercial Retail and Leasing">Commercial Retail and Leasing</option>
                  <option value="Overseeing Architectural Designs">Overseeing Architectural Designs</option>
                  <option value="Project Planning">Project Planning</option>
                  <option value="Refurbishment Projects">Refurbishment Projects</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-600">
                  Number of Rooms (2-5)
                </label>
                <select
                  id="numberOfRooms"
                  name="numberOfRooms"
                  required
                  value={formData.numberOfRooms}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="buildingType" className="block text-sm font-medium text-gray-600">
                  Building Type
                </label>
                <select
                  id="buildingType"
                  name="buildingType"
                  required
                  value={formData.buildingType}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Choose building type</option>
                  <option value="Single Unit">Single Unit</option>
                  <option value="Story Building">Story Building</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-600">
                  Date of Visit
                </label>
                <input
                  id="visitDate"
                  name="visitDate"
                  type="date"
                  required
                  value={formData.visitDate}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Additional Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 flex justify-center items-center
               bg-[#FF6400] text-white font-bold py-3 px-4 rounded-lg 
               shadow-lg mt-8 transition duration-300 hover:bg-orange-500 hover:shadow-xl"
            >
              Submit Booking
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Book;
