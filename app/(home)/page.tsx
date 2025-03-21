"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [message, setMessage] = useState([]);
  const [isLoading, isSetLoading] = useState(false);
  return (
    <div>
      <SidebarTrigger />
    </div>
  );
}
