const MENUS = [
  {
    image:
      "https://variety.com/wp-content/uploads/2023/10/Marvel-In-Trouble-Illustration-Full-2.jpg?w=1000",
    title: "comics",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image:
      "https://variety.com/wp-content/uploads/2023/10/Marvel-In-Trouble-Illustration-Full-2.jpg?w=1000",
    title: "comics",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image:
      "https://variety.com/wp-content/uploads/2023/10/Marvel-In-Trouble-Illustration-Full-2.jpg?w=1000",
    title: "comics",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image:
      "https://variety.com/wp-content/uploads/2023/10/Marvel-In-Trouble-Illustration-Full-2.jpg?w=1000",
    title: "comics",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];
export default function ComicsComponent() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-8">
        <h1 className="font-bold text-3xl uppercase">latest comics</h1>
        <div className="flex space-x-4">
          {MENUS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-40 aspect-[9/16] space-y-4"
            >
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt="submenu_image"
                />
              </div>
              <div className="px-2">
                <h2>{item.title}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
