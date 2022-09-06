// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import i1 from "@/assets/img/1.jpg";
import i2 from "@/assets/img/2.jpg";
import i3 from "@/assets/img/3.jpg";
import { Button } from "@material-tailwind/react";
// Import Swiper styles
import "swiper/css";

export const Cswiper = () => {
	console.log(i1);

	return (
		<div className="max-w-5xl max-h-80  min-h-80">
			<Swiper
				// install Swiper modules

				modules={[Pagination, Autoplay]}
				autoplay={{
					delay: 15000,
					disableOnInteraction: false,
				}}
				slidesPerView={1}
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}>
				<SwiperSlide className="flex items-center  justify-between">
					<div className="self-start flex flex-col font-Estedad ">
						<p className="text-start py-10 font-black">یه عنوان اینجا</p>
						<p className="text-center font-semibold px-24 break-before-avoid whitespace-nowrap">
							کمی تا قسمتی متن طولانی اینجا
						</p>
						<p className="text-center py-10 font-black">یه عنوان اینجا</p>
						<Button className="text-ceneter self-center font-semibold text-white">
							{" "}
							بیا منو کلیک کن
						</Button>
					</div>
					<Image src={i1} objectFit="cover" width={640} height="480" alt="test" />
				</SwiperSlide>
				<SwiperSlide className="flex items-center  justify-between">
					<div className="self-start flex flex-col font-Estedad ">
						<p className="text-start py-10 font-black">یه عنوان اینجا</p>
						<p className="text-center font-semibold px-24 break-before-avoid whitespace-nowrap">
							کمی تا قسمتی متن طولانی اینجا
						</p>
						<p className="text-center py-10 font-black">یه عنوان اینجا</p>
						<Button className="text-ceneter self-center font-semibold text-white">
							{" "}
							بیا منو کلیک کن
						</Button>
					</div>
					<Image src={i2} objectFit="cover" width={640} height="480" alt="test" />
				</SwiperSlide>
				<SwiperSlide className="flex items-center  justify-between bg-blue-200">
					<div className="self-start flex flex-col font-Estedad ">
						<p className="text-start py-10 font-black">یه عنوان اینجا</p>
						<p className="text-center font-semibold px-24 break-before-avoid whitespace-nowrap">
							کمی تا قسمتی متن طولانی اینجا
						</p>
						<p className="text-center py-10 font-black">یه عنوان اینجا</p>
						<Button className="text-ceneter self-center font-semibold text-white">
							{" "}
							بیا منو کلیک کن
						</Button>
					</div>
					<Image src={i3} objectFit="cover" width={640} height="480" alt="test" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
