import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const PAGE_SIZE: number = 10;

const usePagination = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (pageNo: number, urlParams?: object) => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          params: {
            pageNo,
            pageSize: PAGE_SIZE,
            ...urlParams,
          },
        });
        setData(response.data.data);
        setTotal(response.data.total);
        setLoading(false);
      } catch (error) {
        console.error("Error => ", error);
        setLoading(false);
      }
    },
    [url]
  );

  const gotoPage = (pageNo: number, urlParams?: object) => {
    setCurrentPage(pageNo);
    fetchData(pageNo, { ...urlParams });
  };

  useEffect(() => {
    //currentPage
    fetchData(1);
  }, [fetchData]);

  const pages: number[] = Array.from(
    { length: Math.ceil(total / PAGE_SIZE) },
    (v, i) => i + 1
  );

  return { data, gotoPage, currentPage, pages, total, loading, fetchData };
};

export { usePagination };
