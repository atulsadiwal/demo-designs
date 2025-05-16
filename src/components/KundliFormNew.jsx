import { useState } from "react"

export default function KundliFormNew() {
    const [formData, setFormData] = useState({
        gender: "",
        name: "",
        birthLocation: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        birthHour: "",
        birthMinute: "",
        birthAmPm: "AM",
    })
    const currentYear = new Date().getFullYear();

    const monthOptions = [
        { label: "January", value: "1" },
        { label: "February", value: "2" },
        { label: "March", value: "3" },
        { label: "April", value: "4" },
        { label: "May", value: "5" },
        { label: "June", value: "6" },
        { label: "July", value: "7" },
        { label: "August", value: "8" },
        { label: "September", value: "9" },
        { label: "October", value: "10" },
        { label: "November", value: "11" },
        { label: "December", value: "12" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    function getDaysInMonth(month, year) {
        const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
        return new Date(year, monthIndex + 1, 0).getDate(); // 0th day of next month
    }

    const maxValidDay = getDaysInMonth(formData.birthMonth, formData.birthYear || currentYear);


    const handleSubmit = (e) => {
        e.preventDefault()

        // Validate day and year
        const day = Number.parseInt(formData.birthDay)
        const year = Number.parseInt(formData.birthYear)

        if (day < 1 || day > 31) {
            alert("Please enter a valid day between 1 and 31")
            return
        }

        if (year < 1900 || year > currentYear) {
            alert(`Please enter a valid year between 1900 and ${currentYear}`)
            return
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-xl transform transition-all hover:shadow-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-6 px-6 text-center">
                    <h1 className="text-2xl font-bold text-white tracking-wider">KUNDLI FORM</h1>
                    <p className="text-purple-100 mt-1">Enter your birth details for accurate predictions</p>
                </div>
                <div className="p-4 w-full">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Gender Selection */}
                        <div className="bg-white p-2 rounded-xl border border-purple-100 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                            <div className="flex space-x-4">
                                <label className="relative flex items-center py-1 px-4 rounded-full border border-purple-200 cursor-pointer hover:bg-purple-50 transition-all">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === "male"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                                    />
                                    <span className="ml-2 text-gray-600 flex gap-1 font-semibold items-center">
                                        Male
                                        <img src="/images/icons/man.png" height={16} width={16} alt="man" />
                                    </span>
                                </label>
                                <label className="relative flex items-center py-1 px-4 rounded-full border border-purple-200 cursor-pointer hover:bg-purple-50 transition-all">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === "female"}
                                        onChange={handleChange}
                                        className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                                    />
                                    <span className="ml-2 text-gray-600 flex gap-1 font-semibold items-center">Female
                                        <img src="/images/icons/woman.png" height={16} width={16} alt="woman" />
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="bg-white p-2 rounded-xl border border-purple-100 shadow-sm">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Birth Location */}
                        <div className="bg-white p-2 rounded-xl border border-purple-100 shadow-sm">
                            <label htmlFor="birthLocation" className="block text-sm font-medium text-gray-700 mb-2">
                                Birth Location
                            </label>
                            <input
                                type="text"
                                id="birthLocation"
                                name="birthLocation"
                                value={formData.birthLocation}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="City, State, Country"
                                required
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="mb-5 bg-white p-2 rounded-xl border border-purple-100 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Date of Birth</label>
                            <div className="grid grid-cols-3 gap-4">
                                {/* Year */}
                                <div>
                                    <label htmlFor="birthYear" className="block text-xs font-medium text-gray-500 mb-1">
                                        Year
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="birthYear"
                                            name="birthYear"
                                            value={formData.birthYear}
                                            onChange={handleChange}
                                            min="1900"
                                            max={currentYear}
                                            className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder={`1900-${currentYear}`}
                                            required
                                        />
                                        {formData.birthYear &&
                                            (Number.parseInt(formData.birthYear) < 1900 || Number.parseInt(formData.birthYear) > currentYear) && (
                                                <p className="absolute left-0 text-xs text-red-500 mt-2.5 whitespace-nowrap">{`Please enter a valid year (1900-${currentYear})`}</p>
                                            )}
                                    </div>
                                </div>


                                {/* Month */}
                                <div>
                                    <label htmlFor="birthMonth" className="block text-xs font-medium text-gray-500 mb-1">
                                        Month
                                    </label>
                                    <select
                                        id="birthMonth"
                                        name="birthMonth"
                                        value={formData.birthMonth}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Month</option>
                                        {monthOptions.map((month) => (
                                            <option key={month.value} value={month.value}>
                                                {month.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="birthDay" className="block text-xs font-medium text-gray-500 mb-1">
                                        Day
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            id="birthDay"
                                            name="birthDay"
                                            value={formData.birthDay}
                                            onChange={handleChange}
                                            min="1"
                                            max={maxValidDay}
                                            className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                            placeholder={`1-${maxValidDay || "31"}`}
                                            required
                                        />
                                        {formData.birthDay &&
                                            (Number.parseInt(formData.birthDay) < 1 || Number.parseInt(formData.birthDay) > maxValidDay) && (
                                                <p className="absolute text-xs text-red-500 mt-2.5 whitespace-nowrap">
                                                    {`Please enter a valid day (1-${maxValidDay}) for ${formData.birthMonth}`}
                                                </p>
                                            )}
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* Time of Birth */}
                        <div className="mb-5 bg-white p-2 rounded-xl border border-purple-100 shadow-sm">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Time of Birth</label>
                            <div className="grid grid-cols-3 gap-4">
                                {/* Hour */}
                                <div className="relative">
                                    <label htmlFor="birthHour" className="block text-xs font-medium text-gray-500 mb-1">
                                        Hour
                                    </label>
                                    <input
                                        type="number"
                                        id="birthHour"
                                        name="birthHour"
                                        value={formData.birthHour}
                                        onChange={handleChange}
                                        min="1"
                                        max="12"
                                        placeholder="1-12"
                                        className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    {formData.birthHour &&
                                        (Number.parseInt(formData.birthHour) < 1 || Number.parseInt(formData.birthHour) > 12) && (
                                            <p className="absolute left-0 text-xs text-red-500 mt-2.5 whitespace-nowrap">{`Please enter a valid Hour`}</p>
                                        )}
                                </div>

                                {/* Minute */}
                                <div className="relative">
                                    <label htmlFor="birthMinute" className="block text-xs font-medium text-gray-500 mb-1">
                                        Minute
                                    </label>
                                    <input
                                        type="number"
                                        id="birthMinute"
                                        name="birthMinute"
                                        value={formData.birthMinute}
                                        onChange={handleChange}
                                        min="0"
                                        max="59"
                                        placeholder="0-59"
                                        className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                    {formData.birthMinute &&
                                        (Number.parseInt(formData.birthMinute) < 0 || Number.parseInt(formData.birthMinute) > 59) && (
                                            <p className="absolute left-0 text-xs text-red-500 mt-2.5 whitespace-nowrap">{`Please enter a valid Minute`}</p>
                                        )}
                                </div>
                                {/* AM/PM */}
                                <div>
                                    <label htmlFor="birthAmPm" className="block text-xs font-medium text-gray-500 mb-1">
                                        AM/PM
                                    </label>
                                    <select
                                        id="birthAmPm"
                                        name="birthAmPm"
                                        value={formData.birthAmPm}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-3 py-2 border border-purple-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all hover:scale-105 text-lg font-medium"
                            >
                                Generate Kundli
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>All information is kept confidential and secure</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
