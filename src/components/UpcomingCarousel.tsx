"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import competitions from "@/data/competitions.json";
import Link from "next/link";
import { format } from "date-fns";

export default function UpcomingCarousel() {
  const upcoming = (competitions as { id: string; name: string; deadline?: string }[])
    .filter((c) => c.deadline && !isNaN(Date.parse(c.deadline)))
    .filter((c) => Date.parse(c.deadline!) > Date.now())
    .sort((a, b) => Date.parse(a.deadline!) - Date.parse(b.deadline!))
    .slice(0, 6);

  return (
    <Swiper spaceBetween={16} slidesPerView={1.2}>
      {upcoming.map((c) => (
        <SwiperSlide key={c.id}>
          <Link
            href={`/competitions/${c.id}`}
            className="block bg-white p-4 rounded-xl shadow"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-600">
              Deadline&nbsp;{format(new Date(c.deadline!), "dd/MM/yyyy")}
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
