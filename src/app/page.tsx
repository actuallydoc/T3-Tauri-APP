'use client'

import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";

const Home: React.FC = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main>
        <h1>Welcome to the T3 Taur App </h1>
      </main>
    </>
  )
};
