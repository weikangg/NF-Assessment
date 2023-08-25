"use client";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Header from "./header";

export default function Home() {
  const companyData = [
    {
      Name: "PayPal",
      rating: 4.1,
      image:
        "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUxDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--25b4bba81d9da1ae8840d15f92e733d1cff3d4c1/PayPal.jpg",
      jobTitle: "Software Engineer 3",
      time: "1 minute ago",
      location: "Singapore",
      Tag: "Fullstack",
      Skills: ["Rest API", "SOA", "Sonar", "JMeter", "Git"],
      salary: "S$7,656 - S$11,957 / mth",
      id: 1,
    },
    {
      Name: "Visa",
      rating: 4,
      image:
        "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFNIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ed72540d89ca503ecf1f5aa41d6f88ccaa403944/Visa.png",
      jobTitle: "Staff SW Software Engineer",
      time: "10 hours ago",
      location: "Singapore",
      Tag: "Fullstack",
      Skills: ["Rest API", "Jenkins", "API", "Spring"],
      salary: "S$8,891 - S$21,087 / mth",
      id: 2,
    },
    {
      Name: "Singtel",
      rating: 3.8,
      image:
        "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ21IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4537ffc0ba49a27cb75349ea0649c988f4dad54a/Singtel.png",
      jobTitle: "Senior Software Developer",
      time: "1 day ago",
      location: "Singapore",
      Tag: "Fullstack",
      Skills: ["Kubernetes", "Vue.js", "Django", "Maven"],
      salary: "S$6,869 - S$11,161 / mth",
      id: 3,
    },
    {
      Name: "Citi",
      rating: 4.2,
      image:
        "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmlJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--46dabe06454d6d87ccadfa5c041fb3c897de1604/Citi.jpg",
      jobTitle: "VP - Senior Java Developer",
      time: "4 days ago",
      location: "Singapore",
      Tag: "Fullstack",
      Skills: ["Apache", "Ignite", "Oracle", "Sonar"],
      salary: "S$9,014 - S$14,304 / mth",
      id: 4,
    },
    {
      Name: "UBS",
      rating: 3.8,
      image:
        "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBblNJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da6a554252e0f6e29fa3f7821257e929908d112b/UBS.png",
      jobTitle: "Senior Software Engineer",
      time: "10 days ago",
      location: "Singapore",
      Tag: "Fullstack",
      Skills: ["Java", "Spring", "React", "Javascript", "HTML"],
      salary: "S$8,329 - S$14,146 / mth",
      id: 5,
    },
  ];
  const [currentCompany, setCurrentCompany] = useState(companyData[0].id);
  const [company, setCompany] = useState(companyData[0].Name);

  return (
    <>
      <Header></Header>
      <main className="flex flex-col md:flex-row justify-center p-5 mx-5">
        <div className="w-full lg:w-2/5">
          {companyData.map((company) => (
            <button
              key={company.id}
              className={`rounded-lg border bg-card text-card-foreground shadow-sm mb-2 p-3 w-full transition-transform duration-500 ease-in-out transform ${
                currentCompany === company.id
                  ? "border-emerald-400 border-2"
                  : "border"
              } hover:translate-y-[-2px] hover:shadow-lg`}
              onClick={() => {
                setCurrentCompany(company.id);
                setCompany(company.Name);
              }}
            >
              <div className="flex flex-row gap-2 items-start">
                <Image src={company.image} alt="Logo" width={50} height={50} />
                <div className="flex flex-col grow">
                  <div className="flex flex-row text-sm mb-1">
                    {company.Name}
                    <span className="flex flex-row items-center gap-1 ml-2">
                      {company.rating} <Star className="fill-black h-3 w-3" />
                    </span>
                  </div>
                  <div className="font-bold text-start">{company.jobTitle}</div>

                  <div className="flex flex-row text-sm">
                    <span
                      className={`font-bold mr-3 ${
                        company.time.includes("days") &&
                        parseInt(company.time) > 3
                          ? "text-gray-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {company.time}
                    </span>{" "}
                    <span className=" text-gray-400 flex flex-row items-center">
                      <MapPin className="fill-gray-200 h-4 w-4" />{" "}
                      {company.location}
                    </span>
                  </div>
                  <div className="flex flex-row text-sm mt-2">
                    <span className="text-sm font-semibold">
                      {company.salary}
                      <span className="rounded-md mx-2 border text-card-foreground p-1 text-sm text-black-300 font-normal  bg-gray-100 border-gray-100 mr-2">
                        EST
                      </span>
                    </span>
                  </div>
                </div>
                <div className="text-[10px] rounded-md border text-card-foreground p-2 sm:text-sm text-emerald-500 font-bold bg-emerald-100 border-emerald-100">
                  <span className="text-medium">{company.Tag}</span>
                </div>
              </div>
              <Separator className="my-3" />
              <div className="flex items-start flex-wrap">
                {company.Skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-md border text-card-foreground p-2 text-sm text-gray-500 font-bold bg-gray-100 border-gray-100 mr-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="w-full lg:w-3/5 lg:block hidden rounded-lg border bg-card text-card-foreground shadow-sm mb-2 p-2 ml-0 lg:ml-2">
          <h1 className="font-bold">{company}</h1>
        </div>
      </main>
    </>
  );
}
