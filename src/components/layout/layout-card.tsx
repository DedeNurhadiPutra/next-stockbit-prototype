"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface LayoutCardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  isNew?: boolean;
}

export function LayoutCard({ title, description, href = "#", image, isNew }: LayoutCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-all cursor-pointer bg-gray-900 border-gray-800">
        {image && (
          <div className="relative w-full h-40">
            <Image src={image} alt={title} fill className="rounded-t-lg object-cover" />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            {title}
            {isNew && (
              <span className="px-2 py-0.5 text-xs bg-green-600 text-white rounded">New</span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
