import bg from "../../Assets/banner-2.jpg"
import bg2 from "../../Assets/Banner-1.png"
import { FaTrainSubway } from "react-icons/fa6";
import { FaBus } from "react-icons/fa6";
import { MdOutlineElectricRickshaw } from "react-icons/md";
import "cally";
const Banner = () => {
    return (
        <div className="w-full min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="flex flex-col md:flex-row-reverse lg:flex-row-reverse border-2 border-red-500 mt-0 w-full min-h-screen" >
                <div className="relative w-full md:w-1/2 lg:w-1/2 border-2 border-blue-500 h-[330px] md:h-[700px] lg:h-[730px]">
                    <div className="w-[300px] h-[300px] md:w-[380px] md:h-[480px] lg:w-[500px] lg:h-[500px] bg-gradient-to-b from-green-950 to bg-[#4F9D90] rounded-b-full  absolute md:top-[0%] lg:top-0 lg:left-[0%] z-1"></div>
                    <img
                        src={bg2}
                        className="w-full absolute bottom-3 md:bottom-[30%] lg:bottom-[20%] z-10"
                    />
                </div>
                <div className='border-2 border-green-600 w-full md:w-1/2 lg:w-1/2'>
                    <h1 className="text-3xl md:text-5xllg:text-7xl font-bold text-orange-600">TRAINS <span className='text-white'>&</span> BUS</h1>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-lift border-2 border-gray-300 p-5 rounded-xl">
                        <label className="tab ">
                            <label className="tab bg-orange-600">
                                <input type="radio" name="my_tabs_4" />
                                <FaTrainSubway className="text-white text-2xl"></FaTrainSubway>
                                <p className="text-2xl text-white font-bold">Train</p>
                            </label>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <div className="grid grid-cols-3 gap-5">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Choose Vehicle Type</legend>
                                    <select defaultValue="Pick a browser" className="select">
                                        <option disabled={true}>Pick a train</option>
                                        <option>Metro</option>
                                        <option>Normal</option>
                                    </select>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Choose PickUp Location</legend>
                                    <input type="text" className="input" placeholder="Type here" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend">Choose Drop-Off Location</legend>
                                    <input type="text" className="input" placeholder="Type here" />
                                </fieldset>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="">
                                    <legend className="fieldset-legend">Choose a Date</legend>
                                    <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
                                        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                                        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                                        <calendar-month></calendar-month>
                                    </calendar-date>
                                </div>

                            </div>

                        </div>

                        <label className="tab">
                            <label className="tab bg-orange-600 rounded-xl">
                                <input type="radio" name="my_tabs_4" />
                                <FaBus className="text-white text-2xl"></FaBus>
                                <p className="text-2xl text-white font-bold">Bus</p>
                            </label>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                        <label className="tab">
                            <label className="tab bg-orange-600 rounded-2xl">
                                <input type="radio" name="my_tabs_4" />
                                <MdOutlineElectricRickshaw className="text-white text-2xl"></MdOutlineElectricRickshaw>
                                <p className="text-2xl text-white font-bold">CNG</p>
                            </label>
                        </label>
                        <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;