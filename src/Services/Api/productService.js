// Import necessary functions from Redux Toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

// Create the API slice
export const productApi = createApi({
  reducerPath: "productApi",

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["readProduct"],

  endpoints: (builder) => ({
    // Define the readProduct endpoint (GET request)
    readProduct: builder.query({
      query: () => {
        return {
          url: "/product", // API endpoint
          method: "GET", // HTTP method
        };
      },
      providesTags: ["readProduct"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/product/${id}`, // API endpoint with dynamic ID
          method: "DELETE", // HTTP method
        };
      },
      invalidatesTags: ["readProduct"],
    }),
    readProductById: builder.query({
      query: (id) => {
        return {
          url: `/product/${id}`, // API endpoint with dynamic ID
          method: "GET", // HTTP method
        };
      },
      providesTags: ["readProductById"],
    }),

    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: `/product`,
          method: "POST",
          body: body,
        };
      },
    }),

    updateProduct: builder.mutation({
      query: (info) => {
        return {
          url: `/product/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readProduct", "readProductbyID"],
    }),

    // Add more endpoints here...
  }),
});

// Export the generated hooks for use in React components
export const {
  useReadProductQuery,
  useDeleteProductMutation,
  useReadProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
} = productApi;
