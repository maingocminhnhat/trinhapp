import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function PostDetailPage({}: Props) {
  const router = useRouter();

  return (
    <div>
      <h1>PostDetailPage</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
