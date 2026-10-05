"use client";

import useSWR from "swr";
import ApiService from "../../src/services/Apiservices";


export function useApi(key) {
  const { data, error, isLoading, mutate } = useSWR(
    key,
    ApiService.get
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

