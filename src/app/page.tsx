"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Gift, Zap } from "lucide-react"
import Image from "next/image"

interface PromoSlide {
  id: number
  image: string
  title: string
  description: string
  link: string
}

const promoData = {
  site1: {
    name: "Greenwing",
    icon: <Star className="w-6 h-6" />,
    color: "from-green-400 to-green-600",
    slides: [
      {
        id: 1,
        image: "/asset/Greenwing/promo1.jpg",
        title: "Promotion 1",
        description: "Description",
        link: "https://www.thaihonda.co.th/honda/",
      },
      {
        id: 2,
        image: "/asset/Greenwing/promo2.jpg",
        title: "Promotion 2",
        description: "Description",
        link: "https://www.thaihonda.co.th/honda/",
      },
      {
        id: 3,
        image: "/asset/Greenwing/promo3.jpg",
        title: "Promotion 3",
        description: "Description",
        link: "https://www.thaihonda.co.th/honda/",
      },
    ],
  },
  site2: {
    name: "Big Wing",
    icon: <Zap className="w-6 h-6" />,
    color: "from-green-500 to-green-700",
    slides: [
      {
        id: 1,
        image: "/asset/BigWing/promo4.jpg",
        title: "Promotion 1",
        description: "Description",
        link: "https://www.thaihonda.co.th/hondabigbike/",
      },
      {
        id: 2,
        image: "/asset/BigWing/promo5.jpg",
        title: "Promotion 2",
        description: "Description",
        link: "https://www.thaihonda.co.th/hondabigbike/",
      },
      {
        id: 3,
        image: "/asset/BigWing/promo6.jpg",
        title: "Promotion 3",
        description: "Description",
        link: "https://www.thaihonda.co.th/hondabigbike/",
      },
    ],
  },
  site3: {
    name: "Cub House",
    icon: <Gift className="w-6 h-6" />,
    color: "from-green-600 to-green-800",
    slides: [
      {
        id: 1,
        image: "/asset/CubHouse/promo7.png",
        title: "Promotion 1",
        description: "Description",
        link: "https://www.thaihonda.co.th/cubhouse/",
      },
      {
        id: 2,
        image: "/asset/CubHouse/promo8.jpg",
        title: "Promotion 2",
        description: "Description",
        link: "https://www.thaihonda.co.th/cubhouse/",
      },
      {
        id: 3,
        image: "/asset/CubHouse/promo9.jpg",
        title: "Promotion 3",
        description: "Description",
        link: "https://www.thaihonda.co.th/cubhouse/",
      },
    ],
  },
};


function PromoCarousel({ slides, color }: { slides: PromoSlide[]; color: string }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden rounded-lg h-full">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 relative">
              <div className={`bg-gradient-to-br ${color} p-6 h-full flex flex-col justify-between`}>
                <div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={300}
                    height={300}
                    className="w-full h-32 sm:h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-white font-bold text-lg mb-2">{slide.title}</h3>
                  <p className="text-green-100 text-sm">{slide.description}</p>
                </div>
                <Button asChild variant="secondary" className="mt-5 mb-5 bg-white text-green-700 hover:bg-green-50">
                  <a href={slide.link} target="_blank" rel="noopener noreferrer">
                    Go to Site
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default function LoyaltyPromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 items-center justify-between">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-green-200">
        <div className="container mx-auto px-4 py-4 h-22 flex items-center justify-between">
          <div className="flex-grow text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-green-800">
              Greenwing Product Information
            </h1>
          </div>
          {/* Logo Image */}
          {/* <Image
            src="/asset/img/Greenwing_logo.jpg" 
            alt="Greenwing Logo"
            width={70} 
            height={70}
          /> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)] min-h-[500px]">
          {/* Site 1 Promo */}
          <Card className="overflow-hidden shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-0 h-full">
              <div className="bg-green-600 text-white p-4 flex items-center justify-center space-x-2">
                {promoData.site1.icon}
                <h2 className="text-xl font-bold">{promoData.site1.name}</h2>
              </div>
              <div className="h-[calc(100%-64px)]">
                <PromoCarousel slides={promoData.site1.slides} color={promoData.site1.color} />
              </div>
            </CardContent>
          </Card>

          {/* Site 2 Promo */}
          <Card className="overflow-hidden shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-0 h-full">
              <div className="bg-green-700 text-white p-4 flex items-center justify-center space-x-2">
                {promoData.site2.icon}
                <h2 className="text-xl font-bold">{promoData.site2.name}</h2>
              </div>
              <div className="h-[calc(100%-64px)]">
                <PromoCarousel slides={promoData.site2.slides} color={promoData.site2.color} />
              </div>
            </CardContent>
          </Card>

          {/* Site 3 Promo */}
          <Card className="overflow-hidden shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
            <CardContent className="p-0 h-full">
              <div className="bg-green-800 text-white p-4 flex items-center justify-center space-x-2">
                {promoData.site3.icon}
                <h2 className="text-xl font-bold">{promoData.site3.name}</h2>
              </div>
              <div className="h-[calc(100%-64px)]">
                <PromoCarousel slides={promoData.site3.slides} color={promoData.site3.color} />
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  )
}
