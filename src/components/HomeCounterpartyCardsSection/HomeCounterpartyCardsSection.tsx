import { useEffect, useState } from "react";
import CounterpartyCard, {
  CounterpartyCardProps,
} from "../HomeCounterpartyCard/HomeCounterpartyCard";
import { Pagination, Skeleton } from "antd";
import { Col } from "antd";
import { CounterpartyMockData } from "./HomeCounterpartyMockData";

const HomeCounterpartyCardsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = CounterpartyMockData.slice(startIndex, endIndex);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentPage]);
  return (
    <div className="starred-container">
      <div>
        <div className="grid-container">
          {loading
            ? Array.from({ length: pageSize }).map((_, index) => (
                <Col key={index}>
                  <Skeleton active />
                </Col>
              ))
            : currentData.map((item: CounterpartyCardProps, index: number) => (
                <Col key={index}>
                  <CounterpartyCard key={index} {...item} />
                </Col>
              ))}
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={CounterpartyMockData.length}
          onChange={(page) => setCurrentPage(page)}
          align="end"
        />
      </div>
    </div>
  );
};

export default HomeCounterpartyCardsSection;
