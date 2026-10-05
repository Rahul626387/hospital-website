"use client";

import useSWR from "swr";
import ApiService from "../../src/services/Apiservices";

export function useDepartments() {
  const { data, error, isLoading, mutate } = useSWR(
    "departments",
    ApiService.get
  );

  return {
    departments: data?.department_new ?? [],
    error,
    isLoading,
    mutate,
  };
}