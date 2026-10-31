export const BUSINESS = {
  name: "Chicken Point",
  phones: ["9711893786", "9211598030", "9990417352"],
  primaryPhone: "9711893786",
  whatsapp: "919711893786",
  zomato: "https://www.zomato.com/ncr/chicken-point-1-karawal-nagar-new-delhi/order",
  maps: "https://maps.app.goo.gl/x4tkBBn8jASXkkuM6",
  address: "Main Shiv Vihar Tiraha, Near Anil Sweets, Shiv Vihar, Karawal Nagar, Delhi - 110094",
  hoursLabel: "6 PM to 11 PM, Wednesday to Monday (closed Tuesdays)",
  openHour: 18,
  closeHour: 23,
  closedDay: "Tue",
};

export const waLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;

const istParts = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  return { day: get("weekday"), hour: Number(get("hour")) % 24 };
};

// Returns { open, text } for the hero badge.
export const getStatus = () => {
  const { day, hour } = istParts();
  if (day === BUSINESS.closedDay) return { open: false, text: "Closed today (Tuesday). Back tomorrow at 6 PM" };
  if (hour >= BUSINESS.openHour && hour < BUSINESS.closeHour) return { open: true, text: "Open now, until 11 PM" };
  if (hour < BUSINESS.openHour) return { open: false, text: "Opens today at 6 PM" };
  return { open: false, text: day === "Mon" ? "Closed now. Back Wednesday at 6 PM" : "Closed now. Opens tomorrow at 6 PM" };
};
