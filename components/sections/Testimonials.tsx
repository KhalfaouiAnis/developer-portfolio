"use client"

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import data from "@/data/reviews";

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="References"
        title="What colleagues say"
        subtitle="Feedback from managers, teammates, and founders I've worked with."
      />

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {data.map((review) => {
          return (
            <div
              key={review.id}
              className="break-inside-avoid rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
            >
              <StarRating />

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                &ldquo;{review.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
                  <Image
                    fill
                    alt={review.name}
                    src={review.image}
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {review.role} · {review.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
