"use client";


import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <ProfileCard
        name="Arham"
        title="Software Engineer"
        handle="Arham-mod"
        status="Online"
        contactText=""
        iconUrl="/Screenshot_2025-07-22_014537-removebg-preview.png"
        avatarUrl="/drawing1.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
      />
    </div>
  );
}
