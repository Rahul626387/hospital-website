"use client";

import useSWR from "swr";
import ApiService from "../../src/services/Apiservices";


export function useDoctors() {
  const { data, error, isLoading, mutate } = useSWR(
    "doctors",
    ApiService.get
  );

  return {
    doctors: data?.data ?? [],
    error,
    isLoading,
    mutate,
  };
}