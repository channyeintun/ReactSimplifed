import {
    createMemoryRouter,
} from "react-router-dom";
import { Layout } from '@/components/layout'

export const router=createMemoryRouter([
    {
      path: "/",
      element: <Layout />,
      loader: ()=>({
        a:1
      }),
      children: [
        {
          path: "team",
          element: <h1>Test</h1>,
          loader: ()=>{},
        },
      ],
    },
  ])