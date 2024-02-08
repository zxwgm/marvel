import { useQuery } from "react-query";
import { apiGetMunhwa } from "../api";

export default function Munhwa() {
  const { data } = useQuery("getMunhwa", apiGetMunhwa);
  console.log(data);
  return ( 
    <div>
      {data?.result.item.map((item, index) => (
        <div key={index}>{item.ccbaMnm1[0]}</div>
      ))}
    </div>
  );
}
