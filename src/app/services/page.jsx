import {
  Code,
  BarChart3,
  Palette,
  Headphones,
  Megaphone,
  Cloud,
} from "lucide-react";
import Link from "next/link";

function ServicesPage() {
  const serviceData = [
    {
      id: "WD12345",
      title: "Web Development",
      description:
        "We build fast, scalable, and modern web applications using React, Node.js, and TailwindCSS.",
      icon: Code,
    },
    {
      id: "DS67890",
      title: "Data Science",
      description:
        "Unlock insights from your data with machine learning models and analytics dashboards.",
      icon: BarChart3,
    },
    {
      id: "UI24680",
      title: "UI/UX Design",
      description:
        "Create beautiful and user-friendly interfaces that keep your users engaged and happy.",
      icon: Palette,
    },
    {
      id: "CS13579",
      title: "Customer Support",
      description:
        "24/7 multilingual customer support to handle queries across all channels with care.",
      icon: Headphones,
    },
    {
      id: "MK11223",
      title: "Digital Marketing",
      description:
        "Reach your audience through SEO, content marketing, and social media strategies.",
      icon: Megaphone,
    },
    {
      id: "CL99887",
      title: "Cloud Solutions",
      description:
        "Deploy and scale your applications with AWS, Azure, or Google Cloud Infrastructure.",
      icon: Cloud,
    },
  ];
  return (
    <>
      <div className="font-bold text-4xl italic text-gray-700 mb-4">ServicesPage</div>
      <div className="flex gap-4">
        {serviceData.map((d) => {
          const Icon = d.icon;
          return (
            <Link key={d.id} title={d.title} href={`/services/${d.id}`}>
              <div className="max-w-md mx-auto bg-[#F1F5F9] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center justify-center">
                  <Icon className="text-green-500 w-10 h-10" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default ServicesPage;
