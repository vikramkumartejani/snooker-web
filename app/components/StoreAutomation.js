import Image from "next/image";

export default function StoreAutomation() {
  const devices = [
    {
      id: 1,
      name: "Device Name",
      image: "/assets/store-img-1.png",
      controller: "8 port Controller",
    },
    {
      id: 2,
      name: "Device Name",
      image: "/assets/store-img-2.png",
      controller: "8 port Controller",
    },
    {
      id: 3,
      name: "Device Name",
      image: "/assets/store-img-3.png",
      controller: "8 port Controller",
    },
    {
      id: 4,
      name: "Device Name",
      image: "/assets/store-img-4.png",
      controller: "8 port Controller",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#4DC488] text-sm font-medium">CHECK IT OUT</span>
        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          Store Automation
        </h2>
        <p className="mt-4 text-grayish max-w-2xl mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {devices.map((device) => (
          <div
            key={device.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={device.image}
                alt={device.name}
                fill
                className="object-cover h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {device.name}
              </h3>
              <p className="text-gray-600 mt-1">{device.controller}</p>
              <button className="w-full mt-4 bg-[#4DC488] text-white py-2 px-4 rounded-md hover:bg-[#3da36e] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
