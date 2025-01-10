import React from "react";

const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbw76gcaLucJGmKB-V-F-MhMUMNc7JYWroEubCitv_mDqCiraU-mh2gHQkQQahHM_c_btA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Form submitted successfully!");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while submitting the form. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundColor: "#F5F5F5" }}>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-8"
        style={{
          border: "1px solid #D8DEE4",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Week 9 Registration</h2>
        <p className="text-sm text-gray-600 mb-4">
          Date: Sunday, 12th January<br />
          Time: 7 AM <br />
          Distance: 2.5 Kms / 5 Kms <br />
          Venue: Outside Third Wave Coffee, Plan Beach Road, Nerul Seawoods.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="Age"
            placeholder="Age"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="Contact"
            placeholder="Contact Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="EmergencyName"
            placeholder="Name (For Emergency Contact)"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="Phone"
            placeholder="Phone Number (For Emergency Contact)"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="RunningExperience"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
            <option value="First Time Runner">First Time Runner</option>
          </select>

          <select
            name="Distance"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <option value="2.5">2.5 kms</option>
            <option value="5">5 kms</option>
          </select>

          <select
            name="Reach"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <option value="Instagram">Instagram</option>
            <option value="Friends">Friends</option>
            <option value="Youtube">Youtube</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="text"
            name="City"
            placeholder="City"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            name="InstaId"
            placeholder="Instagram ID (optional)"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
          <button
            type="reset"
            className="w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
