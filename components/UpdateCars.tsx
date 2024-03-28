"use client";
import { Fragment, useState ,FormEvent } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CustomButton } from ".";
interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;

}

const UpdateCars = ({ isOpen, closeModal }: CarDetailsProps) => {
      const [formData, setFormData] = useState({
    carImage: [],
    city_mpg: "",
    class: "",
    combination_mpg: "",
    cylinders: "",
    displacement: "",
    drive: "",
    fuel_type: "",
    highway_mpg: "",
    make: "",
    model: "",
    transmission: "",
    year: "",
    price: "0",
    reasingPrice: "0"
  });
  
  

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
  const { name, value } = e.currentTarget;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData); // Submit the form data
  closeModal(); // Close the modal after form submission
};

  return (
     <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative sm:w-full md:w-[400px] lg:w-[500px] max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <h1 className="flex justify-center text-2xl font-bold underline">Create New Car</h1>

                  <form onSubmit={handleSubmit} className="space-y-4">
                   <div className="flex justify-between  flex-1">       
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                       Manufacturer
                      </label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        placeholder={formData.make}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="carImage"  className="block text-lg capitalize font-bold">
                       Model 
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder={formData.model}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                   
                   <div className="flex justify-between  flex-1">            
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                      cylinders
                      </label>
                      <input
                        type="text"
                        id=" cylinders"
                        name=" cylinders"
                        placeholder={formData.cylinders}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="carImage"  className="block text-lg capitalize font-bold">
                       class
                      </label>
                      <input
                        type="text"
                        id="class"
                        name="class"
                        placeholder={formData.class}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                    
                   <div className="flex justify-between  flex-1">            
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                     fuel type
                      </label>
                      <input
                        type="text"
                        id="fuel_type"
                        name="fuel_type"
                        placeholder={formData.fuel_type}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="carImage"  className="block text-lg capitalize font-bold">
                     transmission
                      </label>
                      <input
                        type="text"
                        id="transmission"
                        name="transmission"
                        placeholder={formData.transmission}
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                   <div className="flex justify-between  flex-1">            
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                     price
                      </label>
                      <input
                        type="text"
                        id="price"
                        name="price" 
                        placeholder={formData.price}                     
                       
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="carImage"  className="block text-lg capitalize font-bold">
                      Leasing Price
                      </label>
                      <input
                        type="text"
                        id="reasingPrice"
                        name="reasingPrice"
                        placeholder={formData.reasingPrice}   
                        
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                   <div className="flex justify-between  flex-1">            
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                     displacement
                      </label>
                      <input
                        type="text"
                        id="displacement"
                        name="displacement"
                        placeholder={formData.displacement}   
                        
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="carImage"  className="block text-lg capitalize font-bold">
                      drive
                      </label>
                      <input
                        type="text"
                        id="drive"
                        name="drive"
                        placeholder={formData.drive}   
                        
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                    
                   <div className="flex justify-between  flex-1">            
                     {/* Car Pictures */}
                    <div>
                      <label htmlFor="carImage" className="block text-lg capitalize font-bold">
                        Car Pictures
                      </label>
                      <input
                        type="file"
                        id="carImage"
                        name="carImage"
                        multiple
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="carImage"  className=" block text-lg capitalize font-bold">
                      year
                      </label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        placeholder={formData.year}   
                        
                        onChange={handleInputChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    </div>
                    
                    
                  
                    {/* Submit Button */}
                    <CustomButton
                      btnType="submit"
                      title="Update Car"
                      containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                      textStyles="text-white text-[14px] leading-[17px] font-bold"
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default UpdateCars