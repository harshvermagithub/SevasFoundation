import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simulation of a basic JSON-based content store
const dbPath = path.join(process.cwd(), 'public', 'admin_db.json');

// Initialize DB if not exists
if (!fs.existsSync(dbPath)) {
  const initialData = {
    gallery: [
       "WhatsApp Image 2026-03-14 at 14.38.20 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.21 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.22 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.23 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.24 (1).jpeg",
       "WhatsApp Image 2026-03-14 at 14.38.25 (1).jpeg"
    ],
    videos: [
      "WhatsApp Video 2026-03-14 at 14.37.05.mp4",
      "WhatsApp Video 2026-03-14 at 14.37.53.mp4",
      "WhatsApp Video 2026-03-14 at 17.36.10.mp4",
      "WhatsApp Video 2026-03-14 at 21.29.01.mp4"
    ],
    events: [
      {
        id: "1",
        title: "Free Artificial Limb Distribution Camp - Rural Bangalore",
        date: "2026-10-15",
        location: "Bangalore Rural District Camp",
        description: "We will be hosting a massive free limb measurement and distribution camp for over 500 pre-registered individuals."
      },
      {
        id: "2",
        title: "Prosthetics Awareness Seminar",
        date: "2026-11-02",
        location: "Jayanagar Medical Assembly Hall",
        description: "A comprehensive seminar led by top orthotics aiming to educate families and practitioners."
      }
    ]
  };
  fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
}

export async function GET() {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let body: any;
    let data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const type = formData.get('type') as string;
      const file = formData.get('file') as File;

      if (!file) {
        return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;
      let uploadDir = '';

      if (type === 'gallery') {
        uploadDir = path.join(process.cwd(), 'public', 'media', 'Clients');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);
        data.gallery.push(fileName);
      } else if (type === 'video') {
        uploadDir = path.join(process.cwd(), 'public', 'media', 'Video');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);
        data.videos.push(fileName);
      } else if (type === 'banner') {
        uploadDir = path.join(process.cwd(), 'public', 'media', 'banner');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, buffer);
        if (!data.banners) data.banners = [];
        data.banners.push(fileName);
      }
    } else {
      body = await req.json();
      if (!data.donations) data.donations = [];
      if (!data.banners) data.banners = [
         "banner1.jpg", "banner2.jpg", "banner3.jpg",
         "banner4.jpg", "banner5.jpg", "banner6.jpg"
      ];

      if (body.type === 'event') {
        const newEvent = { ...body.event, id: Date.now().toString() };
        data.events.push(newEvent);
      } else if (body.type === 'delete_event') {
        data.events = data.events.filter((e: any) => e.id !== body.id);
      } else if (body.type === 'delete_gallery') {
        data.gallery = data.gallery.filter((img: string) => img !== body.image);
      } else if (body.type === 'delete_banner') {
        data.banners = data.banners.filter((img: string) => img !== body.image);
      } else if (body.type === 'donation') {
        const newDonation = { ...body.donation, id: Date.now().toString(), date: new Date().toISOString() };
        data.donations.push(newDonation);
      } else if (body.type === 'delete_donation') {
        data.donations = data.donations.filter((d: any) => d.id !== body.id);
      }
    }

    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
