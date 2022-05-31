import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "slapathabass",
  },
  url: {
    secure: true,
  },
});

export const LogoImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654016748/Deloach-dev/Screen_Shot_2022-05-31_at_12.05.23_PM_pkl8au.png"
  )
  .quality("auto")
  .format("auto");
export const IronandClayImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011348/Deloach-dev/Screen_Shot_2022-05-31_at_10.35.30_AM_xh8apv.png"
  )
  .quality("auto")
  .format("auto");
export const BionTechImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.40.48_AM_isnexo.png"
  )
  .quality("auto")
  .format("auto");
export const NASAPOTDImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.42.32_AM_gok42d.png"
  )
  .quality("auto")
  .format("auto");
export const COVIDTrackerImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.43.03_AM_yjvtcr.png"
  )
  .quality("auto")
  .format("auto");

export const ProSCIImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.43.43_AM_jflbpf.png"
  )
  .quality("auto")
  .format("auto");
export const PeriodicTableImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/a_90/v1654014939/Deloach-dev/Screen_Shot_2022-05-31_at_11.35.18_AM_xtotny.png"
  )
  .quality("auto")
  .format("auto");

export const CCCoffeeImage = cld
  .image(
    "https://res.cloudinary.com/slapathabass/image/upload/v1654011939/Deloach-dev/Screen_Shot_2022-05-31_at_10.45.13_AM_jlmqp5.png"
  )
  .quality("auto")
  .format("auto");
