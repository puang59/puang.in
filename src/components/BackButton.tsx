"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="text-amber-500 mb-4 text-sm rounded hover:text-amber-600"
    >
      ← Back
    </button>
  );
}
