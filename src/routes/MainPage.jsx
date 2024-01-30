import { useQuery } from "react-query";
import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { apiGetComics, apiGetEvents } from "../api";
import ListCarousel from "../components/ListCarousel";
import TitleRotate from "../components/TitleRotate";

export default function MainPage() {
  let lists; // fetch 요청한 배열을 받기 위한 변수
  let events; // events fetch 요청한 배열을 받기 위한 변수

  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );
  if (!isLoadingEvents) {
    events = dataEvents?.data.results;
  }

  console.log(events);

  return (
    <Layout>
      {/* 메인 슬라이드 컴포넌트 */}
      <MainSlide />

      {/* 코믹스 섹션 */}
      <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />

      {/* 리스트 캐러셀 */}
      <ListCarousel lists={lists} />

      {/*  */}
      <section className="w-full flex justify-center">
        <div
          className="max-w-7xl w-full 
        grid grid-cols-[7fr_3fr]"
        >
          {/* 1왼쪽 */}
          <div className="w-full h-full">
            {/* 타이틀 */}
            <TitleRotate text="The Events" />
            {/* 이벤트 API에서 불러오기 */}
            <div className="w-full">
              {events?.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-64 border-b-2 pb-4 mb-4 flex space-x-8 group cursor-pointer"
                >
                  {/* image */}
                  <div className="w-1/2 h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                      alt="event_image"
                    />
                  </div>
                  {/* description */}
                  <div className="w-1/2 h-full">
                    <h2 className="uppercase font-semibold group-hover:text-red-600 duration-500">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <h3 className="italic text-sm">
                      {item.start?.substr(0, 10)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 2오른쪽 */}
          <div className="w-full h-full"></div>
        </div>
      </section>
    </Layout>
  );
}
