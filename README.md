# Kenya Connect Dating

Location-based online dating platform for people in Kenya.

## Features (MVP Demo)

- Landing page with Kenyan localization
- Profile creation (name, age, county, bio, interests, tribe, mode)
- Nearby / county-filtered matches (mock data)
- Basic like/pass UI

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + React + TypeScript
- **Hosting**: Netlify (connected to this GitHub repo)
- **Future backend**: Supabase / Firebase / Netlify Functions + PostgreSQL for auth, real-time chat, GPS, photo storage, M-Pesa payments

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

Connected to Netlify. Push to `main` triggers automatic deploy.

## Next Steps for Full App

1. Integrate real authentication (Netlify Identity or Supabase Auth)
2. Add photo upload (Cloudinary or Supabase Storage)
3. Implement geolocation + distance calculation (Google Maps Geocoding or browser Geolocation API)
4. Real matching algorithm + swipe UI
5. Real-time chat (Supabase Realtime or Socket.io)
6. Notifications, safety/report system
7. M-Pesa integration for premium features
8. County-specific and Sheng language support

## Counties Supported in Demo

Nairobi, Mombasa, Kisumu, Kiambu, Nakuru, Eldoret

---

Made for connecting Kenyans 🇰🇪
