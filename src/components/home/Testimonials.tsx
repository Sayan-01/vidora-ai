import React from "react";
import { SectionBadge } from "../ui/SectionBadge";

const reviews = [
  {
    text: "I've never seen a tool like this. Creating endless short videos is a breeze, and the auto-generated captions and effects are perfect.",
    name: "Samantha Lee",
    role: "Social Media Influencer",
    img: "https://picsum.photos/id/64/100/100"
  },
  {
    text: "Creating short videos is effortless with this tool. It handles everything from captions to music, delivering fantastic results. A game-changer!",
    name: "Avery Thompson",
    role: "Youtube content creator",
    img: "https://picsum.photos/id/91/100/100"
  },
  {
    text: "This tool surpassed my expectations. It seamlessly manages captions and music, letting me focus on content. Efficient and user-friendly!",
    name: "Taylor Johnson",
    role: "Video marketing specialist",
    img: "https://picsum.photos/id/65/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-transparent to-[#0A0C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
            <SectionBadge>Testimonial</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Our User Stories: <br />
                How We Made an <span className="text-purple-400">Impact</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl">
                Explore user stories that highlight how we made a significant impact and transformed user experiences in meaningful ways.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
                <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#0F111A] flex flex-col justify-between h-full">
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">"{review.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full border border-purple-500/30" />
                        <div>
                            <div className="text-white font-medium text-sm">{review.name}</div>
                            <div className="text-gray-500 text-xs">{review.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};