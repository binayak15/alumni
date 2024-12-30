import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    dob: "",
    registrationNo: "",
    rollNo: "",
    course: "",
    year: "",
    department: "",
    passedOutYear: "",
    github: "",
    linkedin: "",
    jobRole: "",
    jobProfile: "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = [
      "fullName",
      "gender",
      "email",
      "password",
      "confirmPassword",
      "mobile",
      "dob",
      "registrationNo",
      "rollNo",
      "course",
      "year",
      "department",
      "passedOutYear",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This Field Is Required.";
      }
    });

    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Sign-Up Successful!");
      console.log(formData);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="relative w-full h-32">
        <img
          src="src/assets/cover_page.png"
          alt="Header"
          className="w-full h-full object-cover"
        />
        <h2 className="absolute inset-0 bg-gray-800 bg-opacity-50 text-white text-3xl font-bold flex items-center justify-center">
          SIGN UP
        </h2>
      </div>

      {/* Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-center mb-4">
            Please Provide Your Correct Information
          </h3>
          <p className="text-center text-gray-500 mb-6">
            We Will Reach You Very Soon. You Will Receive A Confirmation Email
            After Verification.
          </p>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Profile Picture Centered */}
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                  {formData.profilePic ? (
                    <img
                      src={URL.createObjectURL(formData.profilePic)}
                      alt="Profile Preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-500">No Image</span>
                  )}
                </div>
                <label className="block mt-3 font-medium text-gray-700">
                  Upload Profile Picture *
                </label>
                <input
                  type="file"
                  name="profilePic"
                  accept="image/*"
                  onChange={handleChange}
                  className="text-sm text-gray-500 mt-1"
                />
                {errors.profilePic && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.profilePic}
                  </p>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Gender *", name: "gender" },
                { label: "Email *", name: "email", type: "email" },
                { label: "Mobile *", name: "mobile", type: "tel" },
                { label: "Password *", name: "password", type: "password" },
                {
                  label: "Confirm Password *",
                  name: "confirmPassword",
                  type: "password",
                },
                { label: "DOB *", name: "dob", type: "date" },
                { label: "Registration Number *", name: "registrationNo" },
                { label: "University Roll No *", name: "rollNo" },
                { label: "Course *", name: "course" },
                { label: "Year *", name: "year", type: "number" },
                { label: "Department Name *", name: "department" },
                { label: "Passed Out Year *", name: "passedOutYear" },
              ].map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Optional Fields in Single Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "GitHub Profile", name: "github" },
                { label: "LinkedIn Profile", name: "linkedin" },
                { label: "Current Job Role", name: "jobRole" },
              ].map((field) => (
                <div key={field.name} className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              ))}
            </div>

            {/* Sign-Up Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-900"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
